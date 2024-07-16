import { Box, Image, Link, Text, Container, Flex } from "@chakra-ui/react";

const WhatsAppFooter = () => {
  return (
    <Container
      maxW="container.xl"
      w="100%"
      mt="10"
      mb={{ base: "-100px", md: "-50px" }}
      px={{ base: "4", md: "8" }}
    >
      <Link
        href="https://wa.me/5531984067075"
        isExternal
        position="relative"
        _hover={{ textDecoration: "none", transform: "scale(1.05)" }}
        transition="transform 0.2s"
        display="block"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          h={{ base: "auto", md: "176px" }}
          py={{ base: "4", md: "0" }}
        >
          <Flex
            my={8}
            borderRadius="100px"
            border="20px solid"
            borderColor="#27AE60"
            w={{ base: "100%", md: "830px" }}
            h={{ base: "auto", md: "176px" }}
            position="relative"
            alignItems="center"
            flexDir={{ base: "column", md: "row" }}
            bg="white"
            p={{ base: "4", md: "0" }}
          >
            <Flex
              flex="1"
              alignItems="center"
              flexDir={{ base: "column", md: "row" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Image
                src="/images/whatsapp.png"
                alt="Fale agora com Nossos Especialistas"
                mt={{ base: "0", md: "-10px" }}
                ml={{ base: "0", md: "40px" }}
                w={{ base: "50px", md: "67px" }}
                h={{ base: "50px", md: "67px" }}
              />
              <Text
                fontSize={{ base: "5vw", md: "3.8vw", xl: "37px" }}
                color="darkBlue.500"
                fontWeight="bold"
                fontFamily="Comfortaa"
                lineHeight="110%"
                ml={{ base: "0", md: "20px" }}
                mt={{ base: "4", md: "0" }}
              >
                <Text
                  as="span"
                  color="#27AE60"
                  fontSize={{ base: "6vw", md: "3.8vw", xl: "45px" }}
                >
                  Fale agora com{" "}
                </Text>
                <br />
                Nossos Especialistas
              </Text>
            </Flex>

            <Image
              src="/images/arrow-icon-green.svg"
              alt="Fale agora com Nossos Especialistas"
              mt={{ base: "4", md: "-10px" }}
              mr={{ base: "0", md: "40px" }}
              w={{ base: "30px", md: "auto" }}
              display={{ base: "none", md: "block" }}
            />
          </Flex>
        </Flex>
      </Link>
    </Container>
  );
};

export default WhatsAppFooter;
