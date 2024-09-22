import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import formidable from "formidable";
import fs from "fs";

// Configuração para desativar o processamento automático do body por Next.js
export const config = {
  api: {
    bodyParser: false, // Desativa o bodyParser para podermos usar formidable
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const form = formidable();

    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) {
        console.error("Erro ao processar o formulário:", err);
        return res.status(500).json({ error: "Erro ao processar a imagem." });
      }

      const file = files.image[0];

      if (!file) {
        return res.status(400).json({ error: "Nenhuma imagem foi enviada." });
      }

      try {
        const fileBuffer = fs.readFileSync(file.filepath);
        const fileName = `${uuidv4()}.png`;

        // Faz o upload da imagem para o Supabase
        const { data, error } = await supabase.storage
          .from("articles")
          .upload(fileName, fileBuffer, {
            contentType: file.mimetype, // Define o tipo correto do arquivo
          });

        if (error) {
          console.log(error);
          return res
            .status(500)
            .json({ error: "Erro ao fazer upload da imagem." });
        }

        // Obtém a URL pública da imagem
        const { data: publicUrlData } = supabase.storage
          .from("articles")
          .getPublicUrl(data.path);

        const imageUrl = publicUrlData?.publicUrl || "";

        res.status(200).json({ url: imageUrl });
      } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        res.status(500).json({ error: "Erro ao fazer upload da imagem." });
      }
    });
  } else {
    res.status(405).end(); // Método não permitido
  }
}
