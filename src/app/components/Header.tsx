import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

interface MenuItemProps {
  href: string;
  children: ReactNode;
}

const MenuItem = ({ href, children }: MenuItemProps) => {
  const router = useRouter();
  const isActive =
    href === "/" ? router.pathname === href : router.pathname.startsWith(href);

  return (
    <Box textAlign="center">
      <Link
        href={href}
        fontSize="22px"
        color={isActive ? "blue.500" : "gray.500"}
        _hover={{ color: "blue.700" }}
        fontWeight={isActive ? "bold" : "normal"}
        display="block"
        position="relative"
      >
        {children}
        {isActive && (
          <Image
            src="/images/smile.svg"
            alt="Smile"
            position="absolute"
            bottom="-4px"
            left="50%"
            transform="translateX(-50%)"
          />
        )}
      </Link>
    </Box>
  );
};

const Header = () => {
  const [hasPosts, setHasPosts] = useState(false);

  useEffect(() => {
    const checkForPosts = async () => {
      try {
        const response = await fetch("/api/getPosts?limit=1"); // Fazendo a requisição ao endpoint
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setHasPosts(true);
          }
        } else {
          console.error("Failed to fetch posts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    checkForPosts();
  }, []);

  return (
    <Box as="header" py={{ base: 2, md: 4 }}>
      <Container maxW="980px">
        <Flex
          align="center"
          justify="space-between"
          gap={{ base: 6, md: 10 }}
          py="10px"
        >
          <Box>
            <Link href="/">
              <Image src="/images/logo.svg" alt="Logo" />
            </Link>
          </Box>
          <Flex gap={10} flex="1" justify="start" ml={{ base: 4, md: 8 }}>
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/empresa">A empresa</MenuItem>
            <MenuItem href="/produtos">Produtos</MenuItem>
            {hasPosts && <MenuItem href="/blog">Blog</MenuItem>}
            <MenuItem href="/contato">Contato</MenuItem>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
