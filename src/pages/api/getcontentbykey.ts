import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { key } = req.query;

    // Verifica se a chave foi fornecida
    if (!key || typeof key !== "string") {
      return res.status(400).json({ error: "A valid 'key' must be provided" });
    }

    // Busca o conteúdo correspondente à chave fornecida
    const { data, error } = await supabase
      .from("contents")
      .select("key, value")
      .eq("key", key)
      .single(); // Utiliza .single() para garantir que apenas um item seja retornado

    if (error) {
      console.error("Supabase error:", error.message);
      return res.status(500).json({ error: error.message });
    }

    if (!data) {
      return res.status(404).json({ error: "Content not found" });
    }

    return res.status(200).json(data);
  }

  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
