// Components/GrampeadoresTabPanel.tsx
import { Heading, Text, Flex, List } from "@chakra-ui/react";
import DynamicContent from "@/app/components/DynamicContent";

const GrampeadoresTabPanel = () => {
  return (
    <>
      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-grampeador-title" />
      </Heading>

      <Text mb="40px">
        <DynamicContent contentKey="products-grampeador-description" />
      </Text>

      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-telas-title" />
      </Heading>

      <Text mb="20px">
        <DynamicContent contentKey="products-telas-description" />
      </Text>

      <Flex mt="20px" w="100%" mb="80px">
        <Flex flexDir="column" flex="1">
          <Text fontWeight="700" color="darkBlue.500">
            <DynamicContent contentKey="products-grampeador-column1-title" />
          </Text>

          <List styleType="#" pl="30px" mt="6px" fontSize="20px">
            <DynamicContent contentKey="products-grampeador-column1-items" />
          </List>
        </Flex>

        <Flex flexDir="column" flex="1">
          <Text fontWeight="700" color="darkBlue.500">
            <DynamicContent contentKey="products-grampeador-column2-title" />
          </Text>

          <List styleType="#" pl="30px" mt="6px" fontSize="20px">
            <DynamicContent contentKey="products-grampeador-column2-description" />
          </List>
        </Flex>
      </Flex>
    </>
  );
};

export default GrampeadoresTabPanel;
