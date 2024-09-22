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
  Checkbox,
} from "@chakra-ui/react";
import SidebarMenu from "@/app/components/admin/SidebarMenu";
import Header from "@/app/components/admin/Header";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import { useQuill } from "react-quilljs";

const saveToServer = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch("/api/uploadImage", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao fazer upload da imagem");
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error("Erro ao salvar a imagem:", error);
    return null;
  }
};

const selectLocalImage = (quill: Quill) => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    const file = input.files ? input.files[0] : null;
    if (file) {
      const url = await saveToServer(file);
      if (url) {
        const range = quill.getSelection();
        quill.insertEmbed(range?.index || 0, "image", url);
      } else {
        alert("Erro ao fazer upload da imagem");
      }
    }
  };
};

const EditorContainer = styled.div``;

interface Category {
  id: string;
  name: string;
}

const EditArticlePage: React.FC = () => {
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
  const { id } = router.query;

  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: {
        container: [
          ["bold", "italic", "underline"],
          ["image"],
          [{ size: ["small", false, "large"] }],
        ],
      },
    },
  });

  useEffect(() => {
    const fetchCategoriesAndArticle = async () => {
      try {
        const [categoriesResponse, articleResponse] = await Promise.all([
          fetch("/api/getCategories"),
          fetch(`/api/getPostBySlug?slug=${id}`),
        ]);

        const categoriesData = await categoriesResponse.json();
        const articleData = await articleResponse.json();

        setCategories(categoriesData);
        setTitle(articleData.title);
        setContent(articleData.description); // Substituindo descrição por conteúdo
        setCategory(articleData.category_id);
        setPublished(articleData.published);
        setHighlight(articleData.highlight);
        if (articleData.image) {
          setImagePreview(articleData.image);
        }

        // Adiciona o conteúdo ao Quill quando ele estiver pronto
        if (quill) {
          quill.clipboard.dangerouslyPasteHTML(articleData.description);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id && quill) {
      fetchCategoriesAndArticle();
    }
  }, [id, quill]);

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

  const handleUpdate = async () => {
    try {
      let base64Image = null;
      if (imageFile) {
        base64Image = await toBase64(imageFile);
      }

      const response = await fetch(`/api/updatePost?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description: quill?.root.innerHTML, // Pega o conteúdo diretamente do Quill
          category,
          image: base64Image,
          published,
          highlight,
        }),
      });

      if (response.ok) {
        toast({
          title: "Artigo atualizado.",
          description: "O artigo foi atualizado com sucesso.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push("/admin/blog");
      } else {
        throw new Error("Erro ao atualizar o artigo");
      }
    } catch (error) {
      console.error("Error updating article:", error);
      toast({
        title: "Erro.",
        description: "Ocorreu um erro ao atualizar o artigo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  React.useEffect(() => {
    if (quill) {
      const toolbar: any = quill.getModule("toolbar");
      toolbar.addHandler("image", () => selectLocalImage(quill));

      console.log(content);

      quill.clipboard.dangerouslyPasteHTML(content);
    }
  }, [quill]);

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
        <Header title="Editar Artigo" />

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
                <EditorContainer style={{ width: "100%" }}>
                  <div
                    ref={quillRef}
                    style={{ minHeight: "100px", height: "auto" }}
                  />
                </EditorContainer>
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
              <Button colorScheme="blue" onClick={handleUpdate}>
                Atualizar Artigo
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
};

export default EditArticlePage;
