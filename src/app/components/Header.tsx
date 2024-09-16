import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasPosts, setHasPosts] = useState(false);

  useEffect(() => {
    const checkForPosts = async () => {
      try {
        const response = await fetch("/api/getPosts?limit=1");
        const posts = await response.json();
        setHasPosts(posts.length > 0);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    checkForPosts();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box as="header" py={{ base: 2, md: 4 }}>
      <Container maxW="980px">
        <Flex
          align="center"
          justify={{ base: "start", md: "space-between" }}
          gap={{ base: 2, md: 10 }}
          py="10px"
        >
          <IconButton
            aria-label="Open Menu"
            icon={<Menu color="#AAA" size="32" />}
            onClick={toggleMenu}
            display={{ base: "block", md: "none" }}
            background="none"
            _hover={{ background: "none" }}
          />

          <Box>
            <Link href="/">
              <Image src="/images/logo.svg" alt="Logo" />
            </Link>
          </Box>

          <Flex
            gap={10}
            flex="1"
            justify="start"
            ml={{ base: 4, md: 8 }}
            display={{ base: "none", md: "flex" }}
          >
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/empresa">A empresa</MenuItem>
            <MenuItem href="/produtos">Produtos</MenuItem>
            {hasPosts && <MenuItem href="/blog">Blog</MenuItem>}
            <MenuItem href="/contato">Contato</MenuItem>
          </Flex>
        </Flex>
      </Container>

      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="900"
        background="rgba(0, 0, 0, 0.5)"
        display={isMenuOpen ? "block" : "none"}
        onClick={toggleMenu}
      />

      <Box
        position="fixed"
        top="0"
        left="0"
        width="85%"
        height="100%"
        zIndex="1000"
        background="white"
        padding="20px"
        transform={isMenuOpen ? "translateX(0)" : "translateX(-100%)"}
        opacity={isMenuOpen ? 1 : 0}
        transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <Flex justify="space-between" align="center">
          <Image src="/images/logo.svg" alt="Logo" />
          <IconButton
            aria-label="Close Menu"
            icon={<X size="32" color="#AAA" />}
            onClick={toggleMenu}
            background="none"
            _hover={{ background: "none" }}
          />
        </Flex>

        <Flex
          direction="column"
          gap={6}
          mt={10}
          align="center"
          justify="center"
        >
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/empresa">A empresa</MenuItem>
          <MenuItem href="/produtos">Produtos</MenuItem>
          {hasPosts && <MenuItem href="/blog">Blog</MenuItem>}
          <MenuItem href="/contato">Contato</MenuItem>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
