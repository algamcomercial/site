// Components/DrenosTabPanel.tsx
import { Heading, Text, Flex, List } from "@chakra-ui/react";
import DynamicContent from "@/app/components/DynamicContent";

const DrenosTabPanel = () => {
  return (
    <>
      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-dreno-title" />
      </Heading>

      <Text mb="40px">
        <DynamicContent contentKey="products-dreno-description" />
      </Text>

      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-reservatorio-title" />
      </Heading>

      <List
        styleType="#"
        pl="30px"
        fontSize="20px"
        gap="8px"
        display="flex"
        flexDirection="column"
        mb="80px"
      >
        <DynamicContent contentKey="products-reservatorio-description" />
      </List>
    </>
  );
};

export default DrenosTabPanel;
