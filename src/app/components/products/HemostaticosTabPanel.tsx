// Components/HemostaticosTabPanel.tsx
import { Heading, Text, List } from "@chakra-ui/react";
import DynamicContent from "@/app/components/DynamicContent";

const HemostaticosTabPanel = () => {
  return (
    <>
      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-hemostaticos-title" />
      </Heading>

      <Text>
        <DynamicContent contentKey="products-hemostaticos-description" />
      </Text>

      <List
        styleType="#"
        pl="30px"
        mt="26px"
        fontSize="20px"
        gap="8px"
        display="flex"
        flexDirection="column"
        mb="50px"
      >
        <DynamicContent contentKey="products-hemostaticos-items" />
      </List>

      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-spongostan-title" />
      </Heading>

      <Text>
        <DynamicContent contentKey="products-spongostan-description" />
      </Text>

      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px" mt="40px">
        <DynamicContent contentKey="products-spongonstanpo-title" />
      </Heading>

      <Text mb="20px">
        <DynamicContent contentKey="products-spongonstanpo-description" />
      </Text>

      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px" mt="40px">
        <DynamicContent contentKey="products-surgiflo-title" />
      </Heading>

      <Text mb="20px">
        <DynamicContent contentKey="products-surgiflo-description" />
      </Text>
    </>
  );
};

export default HemostaticosTabPanel;
