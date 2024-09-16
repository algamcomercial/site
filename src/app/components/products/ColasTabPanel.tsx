// Components/ColasTabPanel.tsx
import { Heading, Text } from "@chakra-ui/react";
import DynamicContent from "@/app/components/DynamicContent";

const ColasTabPanel = () => {
  return (
    <>
      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-dermabond-title" />
      </Heading>

      <Text mb="20px">
        <DynamicContent contentKey="products-dermabond-description" />
      </Text>

      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-dermabondprineo-title" />
      </Heading>

      <Text mb="80px">
        <DynamicContent contentKey="products-dermabondprineo-description" />
      </Text>
    </>
  );
};

export default ColasTabPanel;
