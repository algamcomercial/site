import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      const { id } = req.body; // Alterado para req.body em vez de req.query

      // Deleta o artigo pelo ID
      const { data, error } = await supabase
        .from("articles")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error deleting article:", error);
      res.status(500).json({ error: "Erro ao deletar o artigo." });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}
