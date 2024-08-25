import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Header from "@/app/components/admin/Header";
import SidebarMenu from "@/app/components/admin/SidebarMenu";
import MarkdownEditor from "@/app/components/admin/MarkdownEditor";
import useContents from "@/app/hooks/useContents";

const AdminHomePage: React.FC = () => {
  const contents = useContents(); // Usando o hook

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

      <Box flex="1" ml="250px">
        <Header title="Conteúdo da Empresa" />

        <Box p={6}>
          <VStack spacing={8}>
            <MarkdownEditor
              title="Título da Home"
              keyName="home-header-title"
              initialValue={contents["home-header-title"] || ""}
            />

            <MarkdownEditor
              title="Subtítulo da Home"
              keyName="home-header-subtitle"
              initialValue={contents["home-header-subtitle"] || ""}
            />

            <MarkdownEditor
              title="Texto Ethicon"
              keyName="home-ethicon"
              initialValue={contents["home-ethicon"] || ""}
            />

            <MarkdownEditor
              title="Título de Produtos"
              keyName="home-products-title"
              initialValue={contents["home-products-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Produtos"
              keyName="home-products-description"
              initialValue={contents["home-products-description"] || ""}
            />

            <MarkdownEditor
              title="Depoimento 1"
              keyName="testimonial1-quote"
              initialValue={contents["testimonial1-quote"] || ""}
            />

            <MarkdownEditor
              title="Nome do Depoimento 1"
              keyName="testimonial1-author"
              initialValue={contents["testimonial1-author"] || ""}
            />

            <MarkdownEditor
              title="Complemento do Depoimento 1"
              keyName="testimonial1-position"
              initialValue={contents["testimonial1-position"] || ""}
            />

            <MarkdownEditor
              title="Depoimento 2"
              keyName="testimonial2-quote"
              initialValue={contents["testimonial2-quote"] || ""}
            />

            <MarkdownEditor
              title="Nome do Depoimento 2"
              keyName="testimonial2-author"
              initialValue={contents["testimonial2-author"] || ""}
            />

            <MarkdownEditor
              title="Complemento do Depoimento 2"
              keyName="testimonial2-position"
              initialValue={contents["testimonial2-position"] || ""}
            />

            <MarkdownEditor
              title="Título Blog"
              keyName="home-blog-title"
              initialValue={contents["home-blog-title"] || ""}
            />
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminHomePage;
