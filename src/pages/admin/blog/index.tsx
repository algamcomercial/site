import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Container,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Trash2 } from "lucide-react"; // Importando ícone da biblioteca Lucide
import SidebarMenu from "@/app/components/admin/SidebarMenu";
import Header from "@/app/components/admin/Header";

interface Article {
  id: string;
  title: string;
  description: string;
  slug: string;
}

const AdminArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    // Fetch articles using the getPosts endpoint
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/getPosts?limit=100");
        const data = await response.json();
        console.log(data);
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async () => {
    try {
      await fetch(`/api/deletePost`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedArticle }), // Passando o ID do artigo no corpo da requisição
      });
      setArticles(articles.filter((article) => article.id !== selectedArticle));
      onClose();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const openDeleteModal = (id: string) => {
    setSelectedArticle(id);
    onOpen();
  };

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
        <Header title="Artigos do Blog" />

        <Box p={6} w="100%">
          <Container minW="850px">
            <Flex w="100%" mb="20px">
              <Button
                as="a"
                href="/admin/blog/create"
                colorScheme="blue"
                size="sm"
              >
                Criar artigo
              </Button>
            </Flex>

            {articles.map((article) => (
              <Flex
                key={article.id}
                justify="space-between"
                mb={4}
                p={4}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                gap="20px"
                w="100%"
              >
                <Box
                  onClick={() =>
                    router.push(`/admin/blog/edit/${article.slug}`)
                  }
                  cursor="pointer"
                >
                  <Box
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="120%"
                    mb="10px"
                    _hover={{ color: "blue.500", textDecoration: "underline" }}
                  >
                    {article.title}
                  </Box>

                  <Box
                    color="gray.500"
                    fontSize="14px"
                    lineHeight="120%"
                    dangerouslySetInnerHTML={{
                      __html: article.description?.substring(0, 300),
                    }}
                  />
                </Box>

                <IconButton
                  aria-label="Apagar"
                  icon={<Trash2 size="18px" />} // Usando ícone Lucide
                  size="sm"
                  onClick={() => openDeleteModal(article.id)}
                />
              </Flex>
            ))}

            {articles.length == 0 && <Flex>Nenhum artigo encontrado</Flex>}
          </Container>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirmar Exclusão</ModalHeader>
              <ModalBody>
                Tem certeza de que deseja excluir este artigo?
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="red" onClick={handleDelete}>
                  Excluir
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminArticlesPage;
