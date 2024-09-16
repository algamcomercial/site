import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { slugify } from "@/app/hooks/useSlugify";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const { title, description, category, image, published, highlight } =
        req.body;

      // Certifique-se de que `category` é um número
      const categoryId = parseInt(category, 10);

      let imageUrl = "";

      if (image) {
        // Convert base64 image to buffer
        const base64Data = Buffer.from(image.split(",")[1], "base64");
        const fileName = `${uuidv4()}.png`;

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

        const { data: publicUrlData } = supabase.storage
          .from("articles")
          .getPublicUrl(data.path);
        imageUrl = publicUrlData?.publicUrl || "";
      }

      const slug = slugify(title);

      // Criar objeto de dados a serem atualizados
      const updateData: any = {
        title,
        description,
        category_id: categoryId, // Certifique-se de passar um número
        slug,
        published,
        highlight,
      };

      // Somente adicionar a imagem se não for undefined
      if (imageUrl) {
        updateData.image = imageUrl;
      }

      const { data: updatedArticle, error: updateError } = await supabase
        .from("articles")
        .update(updateData)
        .eq("slug", id);

      if (updateError) {
        throw updateError;
      }

      res.status(200).json({ success: true, data: updatedArticle });
    } catch (error) {
      console.error("Error updating article:", error);
      res.status(500).json({ error: "Erro ao atualizar o artigo." });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}
