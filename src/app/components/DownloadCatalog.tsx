import { Box, Image, Link, Text, Container, Flex } from "@chakra-ui/react";

const DownloadCatalog = () => {
  return (
    <Container maxW="980px" w="100%" mt="10">
      <Link
        href="/files/catalogo-ethicon.pdf"
        download
        position="relative"
        _hover={{ textDecoration: "none", transform: "scale(1.05)" }}
        transition="transform 0.2s"
        display="block"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          h={{ base: "auto", md: "176px" }}
          p={{ base: 4, md: 0 }}
        >
          <Flex
            my={8}
            borderRadius={{ base: "60px", md: "200px" }}
            border="20px solid"
            borderColor="lightBlue.500"
            w={{ base: "100%", md: "830px" }}
            h={{ base: "auto", md: "176px" }}
            position="relative"
            alignItems="center"
            flexDir={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Image
              src="/images/download-icon.svg"
              alt="Baixar Agora o Catálogo de Produtos"
              mt={{ base: "10px", md: "-10px" }}
              ml={{ base: "0", md: "40px" }}
              order={{ base: "2", md: "1" }}
              display={{ base: "none", md: "block" }}
            />
            <Image
              src="/images/catalogo-ethicon.png"
              alt="Baixar Agora o Catálogo de Produtos"
              mx={{ base: "auto", md: "auto" }}
              pos={{ base: "relative", md: "absolute" }}
              top={{ base: "-40px", md: "-56px" }}
              ml={{ base: "auto", md: "110px" }}
              w={{ base: "50vw", md: "176px" }}
              order={{ base: "1", md: "2" }}
            />
            <Text
              fontSize={{ base: "5vw", md: "3.8vw", xl: "37px" }}
              color="darkBlue.500"
              fontWeight="bold"
              fontFamily="Comfortaa"
              lineHeight="100%"
              ml={{ base: "0", md: "220px" }}
              mt={{ base: -6, md: 0 }}
              mb={{ base: 7, md: "0" }}
              order="3"
            >
              <Text
                as="span"
                color="blue.500"
                fontSize={{ base: "6vw", md: "4.2vw", xl: "45px" }}
              >
                Baixar Agora o{" "}
              </Text>
              <br />
              Catálogo de Produtos
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Container>
  );
};

export default DownloadCatalog;
