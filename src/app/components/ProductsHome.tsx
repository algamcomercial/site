import {
  Box,
  Flex,
  Heading,
  Text,
  useTheme,
  Container,
  keyframes,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

const ProductsHome = () => {
  const theme = useTheme();
  const marginTopValue = useBreakpointValue({ base: "0", xl: "-10" });

  const products = [
    { image: "/images/hemostatico.svg", name: "Hemostáticos Adjuvantes" },
    { image: "/images/marcapasso.svg", name: "Fios de Marcapasso" },
    { image: "/images/cera.svg", name: "Cera para Osso" },
    {
      image: "/images/grampeador.svg",
      name: "Grampeadores e Telas para Hérnias",
    },
    {
      image: "/images/cola.svg",
      name: "Colas para uso tópico Dermabond e Dermabond Prineo",
    },
    { image: "/images/dreno.svg", name: "Drenos e Reservatórios" },
    {
      image: "/images/sutura.svg",
      name: "Suturas, Suturas Plus e Stratafix (Fio Farpado)",
    },
  ];

  const renderProductBox = (
    product: { image: string; name: string },
    index: number
  ) => {
    const isFirstOrLastInRow = index % 4 === 0 || (index + 1) % 4 === 0;
    const isLastInSecondRow = index === products.length - 1;
    const marginTop =
      isFirstOrLastInRow || isLastInSecondRow ? marginTopValue : "0";
    const rotateDegrees = index * -90;

    const rotateAnimation = keyframes`
      0% { transform: rotate(${rotateDegrees}deg) scale(1); }
      100% { transform: rotate(${rotateDegrees + 360}deg) scale(1.05); }
    `;

    return (
      <Box
        key={index}
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={marginTop}
        cursor="pointer"
        _hover={{
          "& .bg-rotate": {
            animation: `${rotateAnimation} 1s cubic-bezier(0.68, 0.70, 0.27, 1.10) forwards`,
          },
          "& .product-image": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Flex position="relative">
          <Box
            className="bg-rotate"
            width={{ base: "150px", md: "213px", xl: "200px" }}
            height={{ base: "150px", md: "213px", xl: "200px" }}
            bgImage={`/images/gray-blue-circle.svg`}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            transform={`rotate(${rotateDegrees}deg)`}
            transition="all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
          />
          <Box
            className="product-image"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
            transform={{ base: "scale(.65)", md: "scale(1)" }}
          >
            <Image src={product.image} alt={product.name} />
          </Box>
        </Flex>
        <Text
          fontSize={{ base: "18px", md: "22px" }}
          color={theme.colors.darkBlue["500"]}
          fontWeight="bold"
          mt={{ base: 3, md: 6 }}
          textAlign="center"
          width={{ base: "150px", md: "213px", xl: "200px" }}
          wordBreak="break-word"
          whiteSpace="normal"
          lineHeight="110%"
        >
          {product.name}
        </Text>
      </Box>
    );
  };

  return (
    <Container maxW="980px" w="100%" justifyContent="space-between">
      <Flex direction="column" alignItems="center" my="100px" px="20px">
        <Heading
          as="h2"
          fontSize={{ base: "36px", md: "56px" }}
          color={theme.colors.darkBlue["500"]}
          pb="4px"
        >
          Produtos{" "}
          <Text
            as="span"
            color={theme.colors.blue["500"]}
            fontSize={{ base: "36px", md: "56px" }}
          >
            Ethicon
          </Text>
        </Heading>
        <Text
          fontSize={{ base: "20px", md: "22px" }}
          color={theme.colors.gray["500"]}
          maxW="650px"
          textAlign="center"
          mb="30px"
          lineHeight="120%"
        >
          Oferecemos uma grande variedade de suturas, produtos para hérnia,
          hemostáticos, colas para uso tópico, dentre outras tecnologias
          cirúrgicas. Estamos sempre inovando com foco no paciente.
        </Text>
        <Flex
          wrap="wrap"
          justifyContent="center"
          mt={10}
          gap={8}
          rowGap={{ base: 10, md: 20 }}
        >
          {products.map((product, index) => renderProductBox(product, index))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProductsHome;
