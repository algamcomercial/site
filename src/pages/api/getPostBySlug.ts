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
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article | { error: string }>
) {
  if (req.method === "GET") {
    const { slug } = req.query;
    console.log(slug);

    if (!slug || typeof slug !== "string") {
      return res.status(400).json({ error: "Slug is required" });
    }

    const { data, error } = await supabase
      .from("articles")
      .select(
        `
        id,
        created_at,
        title,
        description,
        image,
        slug,
        category_id,
        categories(name)
      `
      )
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Supabase error:", error.message);
      return res.status(500).json({ error: error.message });
    }

    if (!data) {
      return res.status(404).json({ error: "Article not found" });
    }

    // Acessando o primeiro elemento do array categories
    const categoryName = (data.categories as any).name || null;

    const article: Article = {
      id: data.id,
      created_at: data.created_at,
      title: data.title,
      description: data.description,
      image: data.image,
      slug: data.slug,
      category_id: data.category_id,
      category_name: categoryName, // Usando o nome da primeira categoria
    };

    return res.status(200).json(article);
  }

  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
