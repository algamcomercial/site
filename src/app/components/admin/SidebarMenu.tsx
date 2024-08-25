import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  LucideHome,
  LucideLayoutDashboard,
  LucideEdit,
  LucideLogOut,
  LucideBuilding2,
  LucideBarcode,
  LucidePhone,
} from "lucide-react";
import { destroyCookie } from "nookies";

const SidebarMenu = () => {
  const router = useRouter();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LucideLayoutDashboard,
      route: "/admin/dashboard",
    },
    { name: "Home", icon: LucideHome, route: "/admin/home" },
    { name: "Empresa", icon: LucideBuilding2, route: "/admin/empresa" },
    { name: "Produtos", icon: LucideBarcode, route: "/admin/produtos" },
    { name: "Contato", icon: LucidePhone, route: "/admin/contato" },
    { name: "Blog", icon: LucideEdit, route: "/admin/blog" },
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Limpar o cookie no navegador
        destroyCookie(null, "sb-access-token", {
          path: "/",
        });

        // Redirecionar para a página de login após o signout
        router.push("/admin");
      } else {
        console.error("Erro ao fazer signout");
      }
    } catch (error) {
      console.error("Erro ao fazer signout:", error);
    }
  };

  return (
    <Box
      w="250px"
      bg="blue.500"
      color="white"
      p="10px"
      display="flex"
      flexDirection="column"
      height="100vh"
    >
      <VStack align="start" flexGrow={1} gap="5px">
        <Box p="10px">
          <Image src="/images/algam-white.svg" alt="Marca Algam" />
        </Box>

        {menuItems.map((item, index) => (
          <Flex
            key={index}
            align="center"
            w="full"
            cursor="pointer"
            px="10px"
            py="2px"
            borderRadius="4px"
            onClick={() => router.push(item.route)}
            _hover={{ bg: "lightBlue.600" }}
          >
            <item.icon size={18} />

            <Text ml={3} color="white" fontSize="18px">
              {item.name}
            </Text>
          </Flex>
        ))}
      </VStack>

      <Flex
        align="center"
        px="10px"
        py="2px"
        borderRadius="4px"
        w="full"
        cursor="pointer"
        onClick={handleLogout}
        _hover={{ bg: "lightBlue.600" }}
      >
        <LucideLogOut size={18} />
        <Text ml={3} color="white" fontSize="18px">
          Sair
        </Text>
      </Flex>
    </Box>
  );
};

export default SidebarMenu;
