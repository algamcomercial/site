import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Heading,
  Flex,
} from "@chakra-ui/react";

interface MarkdownEditorProps {
  title: string;
  keyName: string;
  initialValue: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  title,
  keyName,
  initialValue,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Atualizar o estado do value quando o initialValue mudar
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // Função para ajustar a altura do Textarea conforme o conteúdo
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 4
      }px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [value]);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/updatecontent", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: keyName, value: value }),
      });

      if (!response.ok) {
        console.error("Error saving content:", response.statusText);
      } else {
        console.log("Content saved successfully");
      }
    } catch (error) {
      console.error("Error saving content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Flex justifyContent="space-between" align="center" mb="2">
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Button
          size="sm"
          colorScheme="blue"
          onClick={handleSave}
          isLoading={isLoading}
        >
          Salvar
        </Button>
      </Flex>

      <FormControl mb={4}>
        <Textarea
          ref={textareaRef}
          w="650px"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your markdown content here"
          borderColor="gray.300"
          size="lg"
          onInput={adjustTextareaHeight}
        />
      </FormControl>
    </Box>
  );
};

export default MarkdownEditor;
