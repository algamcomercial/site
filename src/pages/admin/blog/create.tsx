import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  useToast,
  Container,
  Select,
  Image,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";
import SidebarMenu from "@/app/components/admin/SidebarMenu";
import Header from "@/app/components/admin/Header";
// Remova o import dinâmico se possível
import dynamic from "next/dynamic"; // Utilize o dynamic import para resolver o problema
import { useRouter } from "next/router";
import ReactQuillType, { ReactQuillProps } from "react-quill";

// Importe o ReactQuill dinamicamente, desativando o SSR
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
}) as unknown as React.ForwardRefExoticComponent<
  ReactQuillProps & React.RefAttributes<ReactQuillType>
>;

import "react-quill/dist/quill.snow.css";

interface Category {
  id: string;
  name: string;
}

const CreateArticlePage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [published, setPublished] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const quillRef = useRef<ReactQuillType>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/getCategories");
        const data = await response.json();
        setCategories(data);

        if (data.length > 0) {
          setCategory(data[0].id);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCreate = async () => {
    try {
      let base64Image = null;
      if (imageFile) {
        base64Image = await toBase64(imageFile);
      }

      const postData = {
        title,
        description: content,
        category,
        image: base64Image,
        published,
        highlight,
      };

      const response = await fetch("/api/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        toast({
          title: "Artigo criado.",
          description: "O artigo foi criado com sucesso.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push("/admin/blog");
      } else {
        throw new Error("Erro ao criar o artigo");
      }
    } catch (error) {
      console.error("Error creating article:", error);
      toast({
        title: "Erro.",
        description: "Ocorreu um erro ao criar o artigo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleContentChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  const handleImageUpload = useCallback(() => {
    console.log(typeof window);
    if (typeof window !== "undefined") {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files?.[0];
        if (file) {
          const base64Image = await toBase64(file);

          try {
            const response = await fetch("/api/uploadImage", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ image: base64Image }),
            });

            const data = await response.json();
            if (response.ok) {
              const quill = quillRef.current;
              if (quill && quill.getEditor) {
                const editor = quill.getEditor();
                const range = editor.getSelection(true);
                editor.insertEmbed(range.index, "image", data.url);
              } else {
                console.error(
                  "Editor instance is not available or getEditor is not a function"
                );
              }
            } else {
              throw new Error(data.error || "Erro ao fazer upload da imagem.");
            }
          } catch (error) {
            console.error("Erro ao fazer upload da imagem:", error);
            toast({
              title: "Erro ao fazer upload da imagem",
              description: "Ocorreu um erro ao fazer o upload da imagem.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        }
      };
    }
  }, [toast]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
          [{ align: [] }],
        ],
        handlers: {
          image: handleImageUpload,
        },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    [handleImageUpload]
  );

  return (
    <Flex minH="100vh" bg="gray.100">
      <Box
        as="nav"
        position="fixed"
        left={0}
        top={0}
        bottom={0}
        width="250px"
        bg="darkBlue.500"
        overflowY="auto"
        zIndex={1}
      >
        <SidebarMenu />
      </Box>

      <Box w="100%" ml="250px">
        <Header title="Criar Novo Artigo" />

        <Box p={6} w="100%">
          <Container minW="850px">
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Box mb={4}>
                <Input
                  id="title"
                  size="lg"
                  placeholder="Título do artigo"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
              <Box mb={4}>
                <FormLabel htmlFor="content">Conteúdo</FormLabel>
                <ReactQuill
                  ref={quillRef}
                  value={content}
                  onChange={handleContentChange}
                  modules={modules}
                />
              </Box>
              <Box mb={4}>
                <FormLabel htmlFor="category">Categoria</FormLabel>
                <Select
                  id="category"
                  placeholder="Selecione a categoria"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </Select>
              </Box>
              <Box mb={4}>
                <FormLabel>Imagem</FormLabel>
                <Button as="label" cursor="pointer">
                  Carregar Imagem
                  <Input
                    type="file"
                    display="none"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </Button>
              </Box>
              {imagePreview && (
                <Box mb={4}>
                  <Image
                    src={imagePreview}
                    alt="Imagem selecionada"
                    maxH="200px"
                  />
                </Box>
              )}
              <Flex mb={4} gap={3}>
                <Checkbox
                  isChecked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                >
                  Publicado
                </Checkbox>

                <Checkbox
                  isChecked={highlight}
                  onChange={(e) => setHighlight(e.target.checked)}
                >
                  Destacado
                </Checkbox>
              </Flex>
              <Button colorScheme="blue" onClick={handleCreate}>
                Criar Artigo
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
};

export default CreateArticlePage;
