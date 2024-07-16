import {
  Box,
  Container,
  Text,
  Link,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <Box bg="blue.500" color="white" pt="60px" pb="40px">
      <Container maxW="980px" py={4}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={{ base: 8, md: 0 }}
        >
          <Box
            textAlign={{ base: "center", md: "left" }}
            mt={{ base: "20px", md: "0" }}
          >
            <Image
              src="/images/algam-white.svg"
              alt="Algam Comercial"
              mx={{ base: "auto", md: "0" }}
            />
            <Text fontWeight="bold" fontSize="lg" my="10px" color="white">
              Algam Comercial Ltda
            </Text>
            <Box lineHeight="120%">
              <Text color="white">Rua Amparo, 9 – Loja 03, 04 e 05</Text>
              <Text color="white">Sala 201 A 204 – Alto Barroca</Text>
              <Text color="white">Belo Horizonte – MG</Text>
            </Box>
          </Box>
          <Flex
            direction="column"
            align={{ base: "center", md: "flex-end" }}
            textAlign={{ base: "center", md: "right" }}
          >
            <Flex
              gap={4}
              justifyContent={{ base: "center", md: "flex-end" }}
              mb="6"
            >
              <Link href="https://www.instagram.com/algamcomercial/" isExternal>
                <Instagram />
              </Link>

              <Link
                href="https://www.linkedin.com/company/algam-comercial/?"
                isExternal
              >
                <Linkedin />
              </Link>
            </Flex>

            <Link href="https://wa.me/5531984067075">
              <Text color="white">(31) 9.8406-7075</Text>
            </Link>

            <Link href="mailto:medical@algam.com.br">
              <Text color="white">medical@algam.com.br</Text>
            </Link>

            <Text mt="4" color="white" display={{ base: "none", md: "block" }}>
              Copyright – Todos os direitos reservados
            </Text>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
