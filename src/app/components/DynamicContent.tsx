import { useEffect, useState } from "react";

interface DynamicContentProps {
  contentKey: string;
}

const DynamicContent: React.FC<DynamicContentProps> = ({ contentKey }) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/getcontentbykey?key=${contentKey}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar o conteúdo");
        }
        const data = await response.json();

        let formattedContent = data.value;
        formattedContent = formattedContent.replace(/\n/g, "<br/>");
        formattedContent = replaceCustomTags(formattedContent);

        setContent(formattedContent);
      } catch (error) {
        console.error("Erro ao buscar o conteúdo:", error);
        setContent("");
      }
    };

    fetchContent();
  }, [contentKey]);

  const replaceCustomTags = (content: string): string => {
    return content.replace(
      /<lightBlue\.500>(.*?)<\/lightBlue\.500>/g,
      `<span style="color: var(--chakra-colors-lightBlue-500)">$1</span>`
    );
    // You can add more replacements here for other custom tags
  };

  return <span dangerouslySetInnerHTML={{ __html: content }} />;
};

export default DynamicContent;
