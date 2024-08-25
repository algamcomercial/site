import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Realiza o login com email e senha
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    // O token de acesso está disponível em data.session.access_token
    const { session } = data;

    if (!session || !session.access_token) {
      return res
        .status(500)
        .json({ error: "Falha ao obter o token de acesso." });
    }

    // Retorna o token de acesso na resposta
    res.status(200).json({ access_token: session.access_token });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
