import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Header from "@/app/components/admin/Header";
import SidebarMenu from "@/app/components/admin/SidebarMenu";
import MarkdownEditor from "@/app/components/admin/MarkdownEditor";
import useContents from "@/app/hooks/useContents";

const AdminProductsPage: React.FC = () => {
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
        <Header title="Conteúdo de Produtos" />

        <Box p={6}>
          <VStack spacing={8}>
            <MarkdownEditor
              title="Título de Produtos"
              keyName="products-title"
              initialValue={contents["products-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Produtos"
              keyName="products-description"
              initialValue={contents["products-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Suturas"
              keyName="products-suturas-title"
              initialValue={contents["products-suturas-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Suturas"
              keyName="products-suturas-description"
              initialValue={contents["products-suturas-description"] || ""}
            />

            <MarkdownEditor
              title="Suturas - Título da Coluna 1"
              keyName="products-column1-title"
              initialValue={contents["products-column1-title"] || ""}
            />

            <MarkdownEditor
              title="Suturas - Descrição da Coluna 1"
              keyName="products-column1-description"
              initialValue={contents["products-column1-description"] || ""}
            />

            <MarkdownEditor
              title="Suturas - Título da Coluna 2"
              keyName="products-column2-title"
              initialValue={contents["products-column2-title"] || ""}
            />

            <MarkdownEditor
              title="Suturas - Descrição da Coluna 2"
              keyName="products-column2-description"
              initialValue={contents["products-column2-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Suturas Plus"
              keyName="products-suturasplus-title"
              initialValue={contents["products-suturasplus-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Suturas Plus"
              keyName="products-suturasplus-description"
              initialValue={contents["products-suturasplus-description"] || ""}
            />

            <MarkdownEditor
              title="Suturas Plus - Título da Coluna 1"
              keyName="products-suturasplus-column1-title"
              initialValue={
                contents["products-suturasplus-column1-title"] || ""
              }
            />

            <MarkdownEditor
              title="Suturas Plus - Descrição da Coluna 1"
              keyName="products-suturasplus-column1-description"
              initialValue={
                contents["products-suturasplus-column1-description"] || ""
              }
            />

            <MarkdownEditor
              title="Título de Stratafix"
              keyName="products-stratafix-title"
              initialValue={contents["products-stratafix-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Stratafix"
              keyName="products-stratafix-description"
              initialValue={contents["products-stratafix-description"] || ""}
            />

            <MarkdownEditor
              title="Stratafix - Título da Coluna 1"
              keyName="products-stratafix-column1-title"
              initialValue={contents["products-stratafix-column1-title"] || ""}
            />

            <MarkdownEditor
              title="Stratafix - Descrição da Coluna 1"
              keyName="products-stratafix-column1-description"
              initialValue={
                contents["products-stratafix-column1-description"] || ""
              }
            />

            <MarkdownEditor
              title="Stratafix - Título da Coluna 2"
              keyName="products-stratafix-column2-title"
              initialValue={contents["products-stratafix-column2-title"] || ""}
            />

            <MarkdownEditor
              title="Stratafix - Descrição da Coluna 2"
              keyName="products-stratafix-column2-description"
              initialValue={
                contents["products-stratafix-column2-description"] || ""
              }
            />

            <MarkdownEditor
              title="Título de Hemostáticos Adjuvantes"
              keyName="products-hemostaticos-title"
              initialValue={contents["products-hemostaticos-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Hemostáticos Adjuvantes"
              keyName="products-hemostaticos-description"
              initialValue={contents["products-hemostaticos-description"] || ""}
            />

            <MarkdownEditor
              title="Hemostáticos Adjuvantes - Itens"
              keyName="products-hemostaticos-items"
              initialValue={contents["products-hemostaticos-items"] || ""}
            />

            <MarkdownEditor
              title="Título de Spongostan"
              keyName="products-spongostan-title"
              initialValue={contents["products-spongostan-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Spongostan"
              keyName="products-spongostan-description"
              initialValue={contents["products-spongostan-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Spongostan em Pó"
              keyName="products-spongostanpo-title"
              initialValue={contents["products-spongonstanpo-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Spongostan em Pó"
              keyName="products-spongostanpo-description"
              initialValue={
                contents["products-spongonstanpo-description"] || ""
              }
            />

            <MarkdownEditor
              title="Título de Surgiflo"
              keyName="products-surgiflo-title"
              initialValue={contents["products-surgiflo-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Surgiflo"
              keyName="products-surgiflo-description"
              initialValue={contents["products-surgiflo-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Fios de Marcapasso"
              keyName="products-marcapasso-title"
              initialValue={contents["products-marcapasso-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Fios de Marcapasso"
              keyName="products-marcapasso-description"
              initialValue={contents["products-marcapasso-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Cera para Osso"
              keyName="products-cera-title"
              initialValue={contents["products-cera-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Cera para Osso"
              keyName="products-cera-description"
              initialValue={contents["products-cera-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Drenos"
              keyName="products-dreno-title"
              initialValue={contents["products-dreno-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Drenos"
              keyName="products-dreno-description"
              initialValue={contents["products-dreno-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Reservatórios"
              keyName="products-reservatorio-title"
              initialValue={contents["products-reservatorio-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Reservatórios"
              keyName="products-reservatorio-description"
              initialValue={contents["products-reservatorio-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Dermabond"
              keyName="products-dermabond-title"
              initialValue={contents["products-dermabond-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Dermabond"
              keyName="products-dermabond-description"
              initialValue={contents["products-dermabond-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Dermabond Príneo"
              keyName="products-dermabondprineo-title"
              initialValue={contents["products-dermabondprineo-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Dermabond Príneo"
              keyName="products-dermabondprineo-description"
              initialValue={
                contents["products-dermabondprineo-description"] || ""
              }
            />

            <MarkdownEditor
              title="Título de Grampeadores"
              keyName="products-grampeador-title"
              initialValue={contents["products-grampeador-title"] || ""}
            />

            <MarkdownEditor
              title="Descrição de Grampeadores"
              keyName="products-grampeador-description"
              initialValue={contents["products-grampeador-description"] || ""}
            />

            <MarkdownEditor
              title="Título de Telas para Hérnias"
              keyName="products-telas-title"
              initialValue={contents["products-telas-title"] || ""}
            />

            <MarkdownEditor
              title="Título da Coluna 1 - Telas para Hérnias"
              keyName="products-grampeador-column1-title"
              initialValue={contents["products-grampeador-column1-title"] || ""}
            />

            <MarkdownEditor
              title="Itens da Coluna 1 - Telas para Hérnias"
              keyName="products-grampeador-column1-items"
              initialValue={contents["products-grampeador-column1-items"] || ""}
            />

            <MarkdownEditor
              title="Título da Coluna 2 - Telas para Hérnias"
              keyName="products-grampeador-column2-description"
              initialValue={
                contents["products-grampeador-column2-description"] || ""
              }
            />

            <MarkdownEditor
              title="Itens da Coluna 2 - Telas para Hérnias"
              keyName="products-grampeador-column2-description"
              initialValue={
                contents["products-grampeador-column2-description"] || ""
              }
            />
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminProductsPage;
