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
      bgSize="250% 50%"
      bgRepeat="repeat"
      bgPosition="center -200px"
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
          fontSize="46px"
          mb={4}
          textAlign="center"
          lineHeight="110%"
          color="darkBlue.500"
        >
          <DynamicContent contentKey="company-header-title" />
        </Heading>
      </Flex>

      <WhitePage borderBottomRadius={0} pb="0px !important">
        <Box>
          <Box mb="60px">
            <Image
              src="/images/empresa-mulher.png"
              alt="Imagem da empresa"
              float="right"
              w="350px"
              ml="10px"
            />
            <Heading as="h1" color="darkBlue.500">
              <DynamicContent contentKey="company-title" />
            </Heading>

            <Text mb={10} mt="2">
              <DynamicContent contentKey="company-description" />
            </Text>

            <Heading as="h2" fontSize="28px" mt={3} letterSpacing="-1px">
              <DynamicContent contentKey="company-approach-title" />
            </Heading>
            <Text mb={10}>
              <DynamicContent contentKey="company-approach-description" />
            </Text>

            <Heading as="h2" fontSize="28px" mt={3} letterSpacing="-1px">
              <DynamicContent contentKey="company-products-title" />
            </Heading>
            <Text>
              <DynamicContent contentKey="company-products-description" />
            </Text>
          </Box>

          <VStack spacing={6} mb={4} alignItems="start">
            {uniqueRows.map((rowIndex) => (
              <HStack key={rowIndex} spacing={3} wrap="wrap">
                {products
                  .filter((product) => product.row === rowIndex)
                  .map((product, index) => (
                    <Button
                      key={index}
                      variant="solid"
                      color="white"
                      fontSize="20px"
                      fontWeight="bold"
                      borderRadius="100px"
                      cursor="default"
                      px={6}
                      h="50px"
                      bg={`${getColorForRow(rowIndex)}.500`}
                      _hover={{ bg: `${getColorForRow(rowIndex)}.700` }}
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
            <Heading as="h2" fontSize="28px" mt={12} letterSpacing="-1px">
              <DynamicContent contentKey="company-contact-title" />
            </Heading>
            <Text mb={4}>
              <DynamicContent contentKey="company-contact-description" />
            </Text>
          </Box>
        </Box>

        <Flex
          bgImage="url(/images/bg-icons.svg)"
          bgSize="100% 100%"
          h="600px"
          position="absolute"
          left="0"
          w="100%"
          alignItems="center"
          justifyContent="center"
          pb="0"
          mt="-50px"
        >
          <Container maxW="1200px" w="100%">
            <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <HStack justify="space-evenly" w="80%" mt="-70px">
                {features.map((feature, index) => (
                  <VStack key={index} mt={index === 1 ? 20 : 0}>
                    <Image src={feature.src} alt={feature.alt} />
                    <Text
                      fontSize={"35px"}
                      fontFamily="Comfortaa"
                      fontWeight="bold"
                      mt={6}
                      color="darkBlue.500"
                    >
                      {feature.label}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </Flex>
          </Container>
        </Flex>

        <Box as="section" bg="white" p={10} pb={0} mt="600px" mx="-40px">
          <Heading as="h2" color="darkBlue.500">
            <DynamicContent contentKey="company-quality-title" />
          </Heading>

          <Text mt={2} mb={4}>
            <DynamicContent contentKey="company-quality-description" />
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-around"
            mt="30px"
          >
            <VStack spacing={4}>
              <VStack spacing={4} alignItems="start" mt="30px">
                <Flex
                  align="center"
                  justify="center"
                  w="60px"
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
                mt="30px"
                ml="30px"
                mr="20px"
              >
                <Flex
                  align="center"
                  justify="center"
                  w="60px"
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

            <VStack>
              <Image
                src="/images/empresa-medico.png"
                minW="330px"
                alt="Política de Qualidade"
              />
            </VStack>

            <VStack spacing={4}>
              <VStack spacing={4} alignItems="start" ml="30px">
                <Flex
                  align="center"
                  justify="center"
                  w="60px"
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

              <VStack spacing={4} alignItems="start" mt="30px" ml="80px">
                <Flex
                  align="center"
                  justify="center"
                  w="60px"
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
          <Flex h="290px" alignItems="center">
            <VStack w="33.33%" bg="darkBlue.500" p={10} h="100%">
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

            <VStack w="33.33%" p={10} h="100%">
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

            <VStack w="33.33%" bg="lightBlue.500" p={10} h="100%">
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
