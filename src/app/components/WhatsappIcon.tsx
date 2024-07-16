// components/WhatsappIcon.tsx
import { Box, Image } from "@chakra-ui/react";

const WhatsappIcon = () => {
  return (
    <Box
      as="a"
      href="https://wa.me/5531984067075"
      target="_blank"
      rel="noopener noreferrer"
      position="fixed"
      bottom="20px"
      right="20px"
      borderRadius="50%"
      width="60px"
      height="60px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="lg"
      zIndex="1000"
    >
      <Image
        src="/images/whatsapp-icon.png"
        alt="WhatsApp"
        borderRadius="50%"
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default WhatsappIcon;
