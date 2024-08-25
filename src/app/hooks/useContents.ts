import { useState, useEffect } from "react";

const useContents = () => {
  const [contents, setContents] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetch("/api/getcontents");
        const data = await response.json();
        const contentMap = data.reduce(
          (
            acc: { [key: string]: string },
            item: { key: string; value: string }
          ) => {
            acc[item.key] = item.value;
            return acc;
          },
          {}
        );

        setContents(contentMap);
      } catch (error) {
        console.error("Error fetching contents:", error);
      }
    };

    fetchContents();
  }, []);

  return contents;
};

export default useContents;
