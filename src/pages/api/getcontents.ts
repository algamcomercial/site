import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("contents")
      .select("key, value");

    if (error) {
      console.error("Supabase error:", error.message); // Verifique se há algum erro
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
