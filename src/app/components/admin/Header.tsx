// components/Header.tsx
import { Flex, Heading } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Flex bg="darkBlue.500" color="white" px="6" py="4">
      <Heading size="md">{title}</Heading>
    </Flex>
  );
};

export default Header;
