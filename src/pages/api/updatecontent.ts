import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const { key, value } = req.body;

    // Verificar se a chave já existe na tabela "content"
    const { data: existingData, error: fetchError } = await supabase
      .from("contents")
      .select("key")
      .eq("key", key)
      .single();

    if (fetchError) {
      return res.status(500).json({ error: fetchError.message });
    }

    let result;
    if (existingData) {
      // Se existir, atualize o valor existente
      const { error: updateError } = await supabase
        .from("contents")
        .update({ value })
        .eq("key", key);

      if (updateError) {
        return res.status(500).json({ error: updateError.message });
      }

      result = { message: "Content updated successfully" };
    } else {
      // Caso contrário, insira uma nova linha
      const { error: insertError } = await supabase
        .from("contents")
        .insert([{ key, value }]);

      if (insertError) {
        return res.status(500).json({ error: insertError.message });
      }

      result = { message: "Content created successfully" };
    }

    return res.status(200).json(result);
  }

  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
