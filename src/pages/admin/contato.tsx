import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Header from "@/app/components/admin/Header";
import SidebarMenu from "@/app/components/admin/SidebarMenu";
import MarkdownEditor from "@/app/components/admin/MarkdownEditor";
import useContents from "@/app/hooks/useContents";

const AdminContactPage: React.FC = () => {
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
        <Header title="Conteúdo de Contato" />

        <Box p={6}>
          <VStack spacing={8}>
            <MarkdownEditor
              title="Título de Contato"
              keyName="contact-title"
              initialValue={contents["contact-title"] || ""}
            />

            <MarkdownEditor
              title="Subtítulo de Contato"
              keyName="contact-subtitle"
              initialValue={contents["contact-subtitle"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Contato"
              keyName="contact-description"
              initialValue={contents["contact-description"] || ""}
            />

            <MarkdownEditor
              title="Nome da Empresa"
              keyName="contact-company-name"
              initialValue={contents["contact-company-name"] || ""}
            />

            <MarkdownEditor
              title="Endereço da Empresa"
              keyName="contact-company-address"
              initialValue={contents["contact-company-address"] || ""}
            />
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminContactPage;
