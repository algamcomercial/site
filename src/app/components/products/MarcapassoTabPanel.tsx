// Components/MarcapassoTabPanel.tsx
import { Heading, Text } from "@chakra-ui/react";
import DynamicContent from "@/app/components/DynamicContent";

const MarcapassoTabPanel = () => {
  return (
    <>
      <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
        <DynamicContent contentKey="products-marcapasso-title" />
      </Heading>

      <Text mb="80px">
        <DynamicContent contentKey="products-marcapasso-description" />
      </Text>
    </>
  );
};

export default MarcapassoTabPanel;
