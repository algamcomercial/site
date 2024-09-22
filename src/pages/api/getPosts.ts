// src/pages/api/getPosts.ts
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

type Article = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  category_id: number;
  category_name: string;
  published: boolean;
  highlight: boolean; // Adicionando o campo highlighted
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[] | { error: string }>
) {
  if (req.method === "GET") {
    const { limit, published, highlight } = req.query;

    const postLimit = limit ? parseInt(limit as string, 10) : 1;

    let query = supabase
      .from("articles")
      .select(
        `id,
        created_at,
        title,
        description,
        image,
        slug,
        category_id,
        published,
        highlight,
        categories(name)`
      )
      .order("created_at", { ascending: false })
      .limit(postLimit);

    // Aplicar o filtro para published se o parâmetro for passado
    if (published === "true") {
      query = query.eq("published", true);
    }

    // Aplicar o filtro para highlighted se o parâmetro for passado
    if (highlight === "true") {
      query = query.eq("highlight", true);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error.message);
      return res.status(500).json({ error: error.message });
    }

    // Mapear os resultados para o formato esperado
    const articles: Article[] = data.map((article: any) => ({
      id: article.id,
      created_at: article.created_at,
      title: article.title,
      description: article.description,
      image: article.image,
      slug: article.slug,
      category_id: article.category_id,
      category_name: (article.categories as any).name || null,
      published: article.published,
      highlight: article.highlight, // Incluindo o campo highlighted
    }));

    return res.status(200).json(articles);
  }

  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
