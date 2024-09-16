// Components/CeraTabPanel.tsx
import { Heading, Text } from "@chakra-ui/react";
import DynamicContent from "@/app/components/DynamicContent";

const CeraTabPanel = () => {
  return (
    <>
      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-cera-title" />
      </Heading>

      <Text mb="80px">
        <DynamicContent contentKey="products-cera-description" />
      </Text>
    </>
  );
};

export default CeraTabPanel;
