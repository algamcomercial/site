import React, { useEffect, useState, useCallback } from "react";
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
} from "@chakra-ui/react";
import SidebarMenu from "@/app/components/admin/SidebarMenu";
import Header from "@/app/components/admin/Header";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";

interface Category {
  id: string;
  name: string;
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateArticlePage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const toast = useToast();
  const router = useRouter();

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
                <ReactQuill value={content} onChange={handleContentChange} />
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
