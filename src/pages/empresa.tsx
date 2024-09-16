import {
  Flex,
  Box,
  Text,
  Image,
  Heading,
  Button,
  VStack,
  HStack,
  Link,
  Container,
} from "@chakra-ui/react";
import Header from "@/app/components/Header";
import WhatsAppFooter from "@/app/components/WhatsAppFooter";
import Footer from "@/app/components/Footer";
import WhitePage from "@/app/components/WhitePage";
import Head from "next/head";
import DynamicContent from "@/app/components/DynamicContent";

type Product = {
  name: string;
  row: number;
};

const products: Product[] = [
  { name: "Fios de Marcapasso", row: 0 },
  { name: "Suturas, Suturas Plus e Stratfix", row: 0 },
  { name: "Telas e Grampeadores para Hérnia", row: 1 },
  { name: "Drenos e Reservatórios", row: 1 },
  { name: "Hemostáticos Adjuvantes", row: 1 },
  { name: "Colas para uso tópico: Dermabond e Dermabond Prineo", row: 2 },
  { name: "Cera para Osso", row: 2 },
];

const features = [
  {
    src: "/images/excellence-icon.svg",
    alt: "Excelência",
    label: "Excelência",
  },
  { src: "/images/expertise-icon.svg", alt: "Expertise", label: "Expertise" },
  {
    src: "/images/humanization-icon.svg",
    alt: "Humanização",
    label: "Humanização",
  },
];

const getColorForRow = (rowIndex: number): string => {
  switch (rowIndex) {
    case 0:
      return "darkBlue";
    case 1:
      return "blue";
    case 2:
      return "lightBlue";
    default:
      return "gray"; // Default color for any additional rows
  }
};

const Company = () => {
  const uniqueRows: number[] = Array.from(
    new Set(products.map((product) => product.row))
  );

  return (
    <Flex
      bgImage="url('/images/bg-glow.svg')"
      bgSize={{ base: "300%", md: "250%" }}
      bgRepeat="repeat"
      bgPosition={{ base: "center -50px", md: "center -200px" }}
      minHeight="100vh"
      direction="column"
    >
      <Head>
        <title>A Empresa - Algam</title>
      </Head>
      <Header />

      <Flex w="100%" justify="center">
        <Heading
          as="h1"
          fontSize={{ base: "24px", md: "46px" }}
          letterSpacing={{ base: "-2px", md: "-3px" }}
          mb={{ base: 0, md: 4 }}
          textAlign="center"
          lineHeight="110%"
          color="darkBlue.500"
        >
          <DynamicContent contentKey="company-header-title" />
        </Heading>
      </Flex>

      <WhitePage borderBottomRadius={0} pb="0px !important">
        <Box>
          <Box mb={{ base: "20px", md: "60px" }}>
            <Image
              src="/images/empresa-mulher.png"
              alt="Imagem da empresa"
              float={{ base: "none", md: "right" }}
              w={{ base: "100%", md: "350px" }}
              mb={{ base: "20px", md: "0" }}
              ml={{ md: "10px" }}
            />
            <Heading
              as="h1"
              color="darkBlue.500"
              mt={{ base: "40px", md: "20px" }}
            >
              <DynamicContent contentKey="company-title" />
            </Heading>

            <Text mb={10} mt="2">
              <DynamicContent contentKey="company-description" />
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "22px", md: "28px" }}
              mt={3}
              letterSpacing="-1px"
            >
              <DynamicContent contentKey="company-approach-title" />
            </Heading>
            <Text mb={10}>
              <DynamicContent contentKey="company-approach-description" />
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "22px", md: "28px" }}
              mt={3}
              letterSpacing="-1px"
            >
              <DynamicContent contentKey="company-products-title" />
            </Heading>
            <Text>
              <DynamicContent contentKey="company-products-description" />
            </Text>
          </Box>

          <VStack spacing={{ base: 3, md: 6 }} mb={4} alignItems="start">
            {uniqueRows.map((rowIndex) => (
              <HStack key={rowIndex} spacing={3} wrap="wrap">
                {products
                  .filter((product) => product.row === rowIndex)
                  .map((product, index) => (
                    <Button
                      key={index}
                      variant="solid"
                      color="white"
                      fontSize={{ base: "16px", md: "20px" }}
                      fontWeight="bold"
                      borderRadius="100px"
                      cursor="default"
                      px={{ base: 4, md: 6 }}
                      h={{ base: "40px", md: "50px" }}
                      bg={`${getColorForRow(rowIndex)}.500`}
                      _hover={{ bg: `${getColorForRow(rowIndex)}.700` }}
                      whiteSpace={{ base: "pre-wrap", md: "auto" }}
                      py={{ base: "24px", md: "0" }}
                    >
                      {product.name}
                    </Button>
                  ))}
              </HStack>
            ))}
          </VStack>

          <Text mb={4} mt="12">
            <DynamicContent contentKey="company-products-numbers" />
          </Text>

          <Box zIndex={1} position="relative">
            <Heading
              as="h2"
              fontSize={{ base: "22px", md: "28px" }}
              mt={12}
              letterSpacing="-1px"
            >
              <DynamicContent contentKey="company-contact-title" />
            </Heading>
            <Text mb={4}>
              <DynamicContent contentKey="company-contact-description" />
            </Text>
          </Box>
        </Box>

        <Flex
          bgImage={{ base: "none", md: "url(/images/bg-icons.svg)" }}
          bgSize="100% 100%"
          h={{ base: "auto", md: "400px", lg: "600px" }}
          position={{ base: "relative", md: "absolute" }}
          left="0"
          w="100%"
          alignItems="center"
          justifyContent="center"
          pb="0"
          mt={{ base: "0", md: "0px", lg: "-50px" }}
          my={{ base: "80px", md: "0px" }}
        >
          <Container maxW="1200px" w="100%">
            <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <HStack
                justify="space-evenly"
                w={{ base: "100%", lg: "80%" }}
                mt={{ base: "0", md: "-100px", lg: "-70px" }}
                spacing={{ base: 8, md: 0 }}
                wrap="wrap"
                flexDir="row"
              >
                {features.map((feature, index) => (
                  <VStack
                    key={index}
                    mt={index === 1 ? { base: 0, lg: 20 } : 0}
                  >
                    <Flex h={{ base: "auto", lg: "auto" }}>
                      <Image
                        src={feature.src}
                        alt={feature.alt}
                        w={{ base: "50px", md: "80px", lg: "auto" }}
                      />
                    </Flex>
                    <Text
                      fontSize={{ base: "20px", md: "30px", lg: "35px" }}
                      fontFamily="Comfortaa"
                      fontWeight="bold"
                      mt={{ base: 0, md: 6 }}
                      color="darkBlue.500"
                      textAlign="center"
                    >
                      {feature.label}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </Flex>
          </Container>
        </Flex>

        <Box
          as="section"
          bg="white"
          p={{ base: 0, md: 10 }}
          pb={{ base: 0, md: 0 }}
          mt={{ base: "30px", md: "420px", lg: "600px" }}
          mx={{ base: 0, md: "-40px" }}
        >
          <Heading as="h2" color="darkBlue.500" lineHeight="90%">
            <DynamicContent contentKey="company-quality-title" />
          </Heading>

          <Text mt={2} mb={4}>
            <DynamicContent contentKey="company-quality-description" />
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-around"
            mt="30px"
            pb={{ base: "50px", lg: "0" }}
          >
            <VStack spacing={4}>
              <VStack
                spacing={4}
                alignItems="start"
                mt={{ base: 0, lg: "30px" }}
                w={{ base: "100%", lg: "auto" }}
              >
                <Flex
                  align="center"
                  justify="center"
                  h="60px"
                  position="relative"
                  w="100%"
                >
                  <Box
                    w="60px"
                    h="60px"
                    bgImage="url('/images/gray-blue-circle.svg')"
                    bgSize="cover"
                    bgPos="center"
                    position="absolute"
                    transform="rotate(0deg)" // Customize the rotation as needed
                  />
                  <Text
                    fontSize="25px"
                    fontWeight="bold"
                    color="darkBlue.500"
                    position="relative"
                    fontFamily="Comfortaa"
                    pt="1"
                    zIndex={1}
                  >
                    1
                  </Text>
                </Flex>
                <Text>
                  <DynamicContent contentKey="company-quality-1" />
                </Text>
              </VStack>

              <VStack
                spacing={4}
                alignItems="start"
                mt={{ base: 0, lg: "30px" }}
                ml={{ base: 0, lg: "30px" }}
                mr={{ base: 0, md: "20px" }}
                w={{ base: "100%", lg: "auto" }}
              >
                <Flex
                  align="center"
                  justify="center"
                  w="100%"
                  mt={{ base: "20px", md: 0 }}
                  h="60px"
                  position="relative"
                >
                  <Box
                    w="60px"
                    h="60px"
                    bgImage="url('/images/gray-blue-circle.svg')"
                    bgSize="cover"
                    bgPos="center"
                    position="absolute"
                    transform="rotate(-90deg)" // Customize the rotation as needed
                  />
                  <Text
                    fontSize="25px"
                    fontWeight="bold"
                    color="darkBlue.500"
                    position="relative"
                    fontFamily="Comfortaa"
                    pt="1"
                    zIndex={1}
                  >
                    2
                  </Text>
                </Flex>
                <Text>
                  <DynamicContent contentKey="company-quality-2" />
                </Text>
              </VStack>
            </VStack>

            <VStack
              mt={{ base: 6, md: 0 }}
              display={{ base: "none", lg: "flex" }}
            >
              <Image
                src="/images/empresa-medico.png"
                minW="330px"
                maxW={{ base: "100%", md: "330px" }}
                alt="Política de Qualidade"
              />
            </VStack>

            <VStack spacing={4}>
              <VStack
                spacing={4}
                alignItems="start"
                ml={{ base: 0, md: "30px" }}
              >
                <Flex
                  align="center"
                  justify="center"
                  w="100%"
                  mt={{ base: "40px", md: 0 }}
                  h="60px"
                  position="relative"
                >
                  <Box
                    w="60px"
                    h="60px"
                    bgImage="url('/images/gray-blue-circle.svg')"
                    bgSize="cover"
                    bgPos="center"
                    position="absolute"
                    transform="rotate(-180deg)" // Customize the rotation as needed
                  />
                  <Text
                    fontSize="25px"
                    fontWeight="bold"
                    color="darkBlue.500"
                    position="relative"
                    fontFamily="Comfortaa"
                    pt="1"
                    zIndex={1}
                  >
                    3
                  </Text>
                </Flex>
                <Text>
                  <DynamicContent contentKey="company-quality-3" />
                </Text>
              </VStack>

              <VStack
                spacing={4}
                alignItems="start"
                mt={{ base: 0, lg: "30px" }}
                ml={{ base: "0px", lg: "80px" }}
              >
                <Flex
                  align="center"
                  justify="center"
                  w="100%"
                  mt={{ base: "20px", md: 0 }}
                  h="60px"
                  position="relative"
                >
                  <Box
                    w="60px"
                    h="60px"
                    bgImage="url('/images/gray-blue-circle.svg')"
                    bgSize="cover"
                    bgPos="center"
                    position="absolute"
                    transform="rotate(-270deg)" // Customize the rotation as needed
                  />
                  <Text
                    fontSize="25px"
                    fontWeight="bold"
                    color="darkBlue.500"
                    position="relative"
                    fontFamily="Comfortaa"
                    pt="1"
                    zIndex={1}
                  >
                    4
                  </Text>
                </Flex>
                <Text>
                  <DynamicContent contentKey="company-quality-4" />
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Box>
      </WhitePage>

      <Container maxW="1200px" mb="20">
        <Box
          as="section"
          bg="blue.500"
          borderRadius="20px"
          borderTopRadius={0}
          shadow="md"
          color="white"
          overflow="hidden"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            h="auto"
            alignItems="stretch"
          >
            <VStack
              w={{ base: "100%", md: "33.33%" }}
              bg="darkBlue.500"
              p={{ base: "24px", lg: 10 }}
            >
              <Heading
                as="h3"
                fontSize="28px"
                color="white"
                pb="0"
                letterSpacing="-1px"
                w="100%"
              >
                <DynamicContent contentKey="company-mission-title" />
              </Heading>

              <Text color="white" lineHeight="110%">
                <DynamicContent contentKey="company-mission-description" />
              </Text>
            </VStack>

            <VStack
              w={{ base: "100%", md: "33.33%" }}
              p={{ base: "24px", lg: 10 }}
            >
              <Heading
                as="h3"
                fontSize="28px"
                color="white"
                pb="0"
                letterSpacing="-1px"
                w="100%"
              >
                <DynamicContent contentKey="company-vision-title" />
              </Heading>

              <Text color="white" lineHeight="110%">
                <DynamicContent contentKey="company-vision-description" />
              </Text>
            </VStack>

            <VStack
              w={{ base: "100%", md: "33.33%" }}
              bg="lightBlue.500"
              p={{ base: "24px", lg: 10 }}
            >
              <Heading
                as="h3"
                fontSize="28px"
                color="white"
                pb="0"
                letterSpacing="-1px"
                w="100%"
              >
                <DynamicContent contentKey="company-values-title" />
              </Heading>

              <Text color="white" lineHeight="110%" w="100%">
                <DynamicContent contentKey="company-values-description" />
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Container>
      <WhatsAppFooter />
      <Footer />
    </Flex>
  );
};

export default Company;
