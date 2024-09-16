// Components/CustomTab.tsx
import { Tab, Box, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";

const CustomTab = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return (
    <Tooltip label={label} placement="top" hasArrow>
      <Tab
        w="70px"
        h="70px"
        border="7px solid"
        borderColor="gray.100"
        borderRadius="50%"
        _selected={{
          w: "90px",
          h: "90px",
          mx: "10px",
          border: "10px solid",
          borderColor: "lightBlue.500",
          transform: "scale(1.2)",
          p: "15px",
        }}
      >
        <Box as="span" fontSize="30px">
          {children}
        </Box>
      </Tab>
    </Tooltip>
  );
};

export default CustomTab;
