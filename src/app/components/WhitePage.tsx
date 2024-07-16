// WhitePage.tsx
import { Box, Container, BoxProps } from "@chakra-ui/react";

interface WhitePageProps extends BoxProps {
  children: React.ReactNode;
}

const WhitePage: React.FC<WhitePageProps> = ({ children, ...props }) => {
  return (
    <Container maxW="1200px">
      <Box
        bg="white"
        width="100%"
        borderRadius="20px"
        px={{ base: "25px", md: "50px", xl: "100px" }}
        py={{ base: "40px", md: "50px", xl: "90px" }}
        mt="10px"
        color="gray.500"
        lineHeight="130%"
      >
        {children}
      </Box>
    </Container>
  );
};

export default WhitePage;
