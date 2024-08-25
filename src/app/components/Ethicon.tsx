// src/app/components/Ethicon.tsx
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import DynamicContent from "./DynamicContent";

const Ethicon = () => {
  return (
    <Box
      position="relative"
      width="100%"
      bgImage="url('/images/red-smile.svg')"
      bgSize="110%"
      bgRepeat="no-repeat"
      bgPosition="center bottom"
      h={{ base: "auto", md: "400px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={10}
        maxWidth="980px"
        width="100%"
        mx="auto"
        h="100%"
        pb={{ base: "60px", md: "70px" }}
        pt={{ base: "40px" }}
        px="20px"
      >
        <Image
          src="/images/ethicon.png"
          alt="Ethicon Logo"
          minWidth="278px"
          maxWidth={{ base: "100%", md: "278px" }}
          order={{ base: 2, md: 1 }}
          mb={{ base: "20px", md: "0" }}
        />
        <Text
          fontFamily="Comfortaa"
          fontSize={{ base: "6.5vw", md: "34px" }}
          fontWeight="bold"
          color="darkBlue.500"
          textAlign={{ base: "center", md: "left" }}
          lineHeight="100%"
          order={{ base: 1, md: 2 }}
          letterSpacing="-2px"
        >
          <DynamicContent contentKey="home-ethicon" />
        </Text>
      </Flex>
    </Box>
  );
};

export default Ethicon;
