import { useCallback } from "react";

export const slugify = (title: string) => {
  return title
    .toLowerCase()
    .normalize("NFD") // Normaliza caracteres especiais em suas formas decomponíveis
    .replace(/[\u0300-\u036f]/g, "") // Remove os diacríticos (acentos)
    .replace(/[^a-z0-9]+/g, "-") // Substitui espaços e caracteres não alfanuméricos por hífens
    .replace(/(^-|-$)+/g, ""); // Remove hífens do início e do final
};

export default function useSlugify() {
  return useCallback((title: string) => slugify(title), []);
}
