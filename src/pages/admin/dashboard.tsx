// pages/admin/dashboard.tsx
import Header from "@/app/components/admin/Header";
import SidebarMenu from "@/app/components/admin/SidebarMenu";
import { Box, Flex, Text } from "@chakra-ui/react";

const DashboardPage = () => {
  return (
    <Flex minH="100vh" bg="gray.100">
      <SidebarMenu />

      <Box flex="1">
        <Header title="Dashboard" />

        <Box p={6}>
          <Text>Bem-vindo ao painel de controle!</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardPage;
