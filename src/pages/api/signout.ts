// pages/api/signout.ts

import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Efetuar o signout do usuário
    const { error } = await supabase.auth.signOut();

    if (error) {
      return res.status(500).json({ message: "Erro ao fazer signout" });
    }

    res.status(200).json({ message: "Signout realizado com sucesso" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
