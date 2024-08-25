import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { slugify } from "@/app/hooks/useSlugify"; // Certifique-se de que está importando corretamente

export const config = {
  api: {
    bodyParser: true, // Enable body parsing for standard JSON requests
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Parse the incoming request body
      const { title, description, category, image } = req.body;

      let imageUrl = "";

      if (image) {
        // Convert the base64 image to a buffer
        const base64Data = Buffer.from(image.split(",")[1], "base64");

        // Generate a unique file name
        const fileName = `${uuidv4()}.png`;

        // Upload the image to Supabase storage
        const { data, error } = await supabase.storage
          .from("articles")
          .upload(fileName, base64Data, {
            contentType: "image/png",
          });

        if (error) {
          console.log(error);
          res.status(500).json({ error: "Erro ao fazer upload da imagem." });
          return;
        }

        // Get the public URL of the uploaded image
        const { data: publicUrlData } = supabase.storage
          .from("articles")
          .getPublicUrl(data.path);
        imageUrl = publicUrlData?.publicUrl || "";
      }

      // Generate the slug from the title
      const slug = slugify(title); // Aqui agora deve funcionar corretamente

      console.log(slug);

      // Insert the new article into the database
      const { data: insertData, error: insertError } = await supabase
        .from("articles")
        .insert([
          {
            title,
            description,
            category_id: category,
            image: imageUrl,
            slug,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      res.status(200).json({ success: true, data: insertData });
    } catch (error) {
      console.error("Error creating article:", error);
      res.status(500).json({ error: "Erro ao criar o artigo." });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}
