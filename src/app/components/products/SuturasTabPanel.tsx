// Components/SuturasTabPanel.tsx
import { Heading, Text, Flex, List } from "@chakra-ui/react";
import DynamicContent from "@/app/components/DynamicContent";

const SuturasTabPanel = () => {
  return (
    <>
      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-suturas-title" />
      </Heading>

      <Text>
        <DynamicContent contentKey="products-suturas-description" />
      </Text>

      <Flex mt="20px" w="100%" mb="50px">
        <Flex flexDir="column" flex="1">
          <Text fontWeight="700" color="darkBlue.500">
            <DynamicContent contentKey="products-column1-title" />
          </Text>

          <List styleType="#" pl="30px" mt="6px" fontSize="20px">
            <DynamicContent contentKey="products-column1-description" />
          </List>
        </Flex>

        <Flex flexDir="column" flex="1">
          <Text fontWeight="700" color="darkBlue.500">
            <DynamicContent contentKey="products-column2-title" />
          </Text>

          <List styleType="#" pl="30px" mt="6px" fontSize="20px">
            <DynamicContent contentKey="products-column2-description" />
          </List>
        </Flex>
      </Flex>

      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-suturasplus-title" />
      </Heading>

      <Text>
        <DynamicContent contentKey="products-suturasplus-description" />
      </Text>

      <Flex mt="20px" w="100%" mb="50px">
        <Flex flexDir="column" flex="1">
          <Text fontWeight="700" color="darkBlue.500">
            <DynamicContent contentKey="products-suturasplus-column1-title" />
          </Text>

          <List styleType="#" pl="30px" mt="6px" fontSize="20px">
            <DynamicContent contentKey="products-suturasplus-column1-description" />
          </List>
        </Flex>
      </Flex>

      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-stratafix-title" />
      </Heading>

      <Text>
        <DynamicContent contentKey="products-stratafix-description" />
      </Text>

      <Flex mt="20px" w="100%" mb="50px">
        <Flex flexDir="column" flex="1">
          <Text fontWeight="700" color="darkBlue.500">
            <DynamicContent contentKey="products-stratafix-column1-title" />
          </Text>

          <List styleType="#" pl="30px" mt="6px" fontSize="20px">
            <DynamicContent contentKey="products-stratafix-column1-description" />
          </List>
        </Flex>

        <Flex flexDir="column" flex="1">
          <Text fontWeight="700" color="darkBlue.500">
            <DynamicContent contentKey="products-stratafix-column2-title" />
          </Text>

          <List styleType="#" pl="30px" mt="6px" fontSize="20px">
            <DynamicContent contentKey="products-stratafix-column2-description" />
          </List>
        </Flex>
      </Flex>
    </>
  );
};

export default SuturasTabPanel;
