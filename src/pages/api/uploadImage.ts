// uploadImage
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export const config = {
  api: {
    bodyParser: true, // Habilitar o body parser padrão para lidar com JSON
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { image } = req.body;

      if (!image) {
        return res.status(400).json({ error: "Nenhuma imagem foi enviada." });
      }

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
        return res
          .status(500)
          .json({ error: "Erro ao fazer upload da imagem." });
      }

      // Get the public URL of the uploaded image
      const { data: publicUrlData } = supabase.storage
        .from("articles")
        .getPublicUrl(data.path);
      const imageUrl = publicUrlData?.publicUrl || "";

      res.status(200).json({ url: imageUrl });
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      res.status(500).json({ error: "Erro ao fazer upload da imagem." });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}
