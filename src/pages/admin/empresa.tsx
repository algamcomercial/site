import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Header from "@/app/components/admin/Header";
import SidebarMenu from "@/app/components/admin/SidebarMenu";
import MarkdownEditor from "@/app/components/admin/MarkdownEditor";
import useContents from "@/app/hooks/useContents";

const AdminCompanyPage: React.FC = () => {
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
        <Header title="Conteúdo da Home" />

        <Box p={6}>
          <VStack spacing={8}>
            <MarkdownEditor
              title="Título do Cabeçalho de Empresa"
              keyName="company-header-title"
              initialValue={contents["company-header-title"] || ""}
            />

            <MarkdownEditor
              title="Título da Página de Empresa"
              keyName="company-title"
              initialValue={contents["company-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição da Empresa"
              keyName="company-description"
              initialValue={contents["company-description"] || ""}
            />

            <MarkdownEditor
              title="Títúlo de Nossa Abordagem"
              keyName="company-approach-title"
              initialValue={contents["company-approach-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Nossa Abordagem"
              keyName="company-approach-description"
              initialValue={contents["company-approach-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Produtos"
              keyName="company-products-title"
              initialValue={contents["company-products-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Produtos"
              keyName="company-products-description"
              initialValue={contents["company-products-description"] || ""}
            />

            <MarkdownEditor
              title="Números da Empresa"
              keyName="company-products-numbers"
              initialValue={contents["company-products-numbers"] || ""}
            />

            <MarkdownEditor
              title="Título de Atendimento"
              keyName="company-contact-title"
              initialValue={contents["company-contact-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Atendimento"
              keyName="company-contact-description"
              initialValue={contents["company-contact-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Política de Qualidade"
              keyName="company-quality-title"
              initialValue={contents["company-quality-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Política de Qualidade"
              keyName="company-quality-description"
              initialValue={contents["company-quality-description"] || ""}
            />

            <MarkdownEditor
              title="Qualidade 1"
              keyName="company-quality-1"
              initialValue={contents["company-quality-1"] || ""}
            />

            <MarkdownEditor
              title="Qualidade 2"
              keyName="company-quality-2"
              initialValue={contents["company-quality-2"] || ""}
            />

            <MarkdownEditor
              title="Qualidade 3"
              keyName="company-quality-3"
              initialValue={contents["company-quality-3"] || ""}
            />

            <MarkdownEditor
              title="Qualidade 4"
              keyName="company-quality-4"
              initialValue={contents["company-quality-4"] || ""}
            />

            <MarkdownEditor
              title="Título de Missão"
              keyName="company-mission-title"
              initialValue={contents["company-mission-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Missão"
              keyName="company-mission-description"
              initialValue={contents["company-mission-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Visão"
              keyName="company-vision-title"
              initialValue={contents["company-vision-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Visão"
              keyName="company-vision-description"
              initialValue={contents["company-vision-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Valores"
              keyName="company-values-title"
              initialValue={contents["company-values-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Valores"
              keyName="company-values-description"
              initialValue={contents["company-values-description"] || ""}
            />
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminCompanyPage;
