// src/app/components/BigBanner.tsx
import { Box, Flex, Text } from "@chakra-ui/react";

const BigBanner = () => {
  return (
    <Box position="relative" height={{ base: "400px", md: "572px" }}>
      <Flex
        direction="column"
        align="center"
        justify="end"
        height="100%"
        position="relative"
        zIndex={2}
        pb={{ base: 8, md: 12 }}
      >
        <Box maxWidth="980px" w="100%" textAlign="left" px="20px">
          <Text
            fontFamily="Comfortaa"
            fontSize={{ base: "36px", md: "66px" }}
            fontWeight="bold"
            color="white"
            mb={2}
            lineHeight="90%"
          >
            Excelência em
            <br />
            cada detalhe
          </Text>
          <Text
            fontFamily="Sofia Sans"
            fontSize={{ base: "16px", md: "24px" }}
            color="white"
            lineHeight="110%"
            w="100%"
            maxW="600px"
          >
            Comprometidos com o futuro da saúde, oferecemos tecnologia de ponta
            e atendimento diferenciado.
          </Text>
        </Box>
      </Flex>
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-b, transparent, blue.500)"
        zIndex={1}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={0}
        backgroundImage="url('/images/persons.png')"
        backgroundSize="cover"
        backgroundPosition="top left"
      />
    </Box>
  );
};

export default BigBanner;
