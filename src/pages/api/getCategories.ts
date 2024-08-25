import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("id, name");

      if (error) {
        throw error;
      }

      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Erro ao buscar categorias." });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}
