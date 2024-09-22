import {
  Flex,
  Container,
  Heading,
  Text,
  useTheme,
  Button,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DynamicContent from "./DynamicContent";
import Link from "next/link";

type Article = {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image: string;
  category_id: number;
  slug: string;
};

const Blog = () => {
  const theme = useTheme();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "/api/getPosts?limit=1&pusblished=true&highlight=true"
      );
      const data = await res.json();
      setArticles(data);
    };

    fetchPosts();
  }, []);

  const getCategoryIcon = (categoryId: number) => {
    switch (categoryId) {
      case 1:
        return "humanization-icon.svg";
      case 2:
        return "excellence-icon.svg";
      case 3:
        return "expertise-icon.svg";
      default:
        return "default-icon.svg"; // Ícone padrão caso a categoria não seja identificada
    }
  };

  return (
    <Container maxW="980px" w="100%" justifyContent="space-between">
      {articles.length &&
        articles.map((article) => (
          <Flex
            key={article.id}
            direction="column"
            alignItems="center"
            my="100px"
            mb={{ base: 0, md: "100px" }}
            px={{ base: 0, md: "20px" }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "36px", md: "56px" }}
              color={theme.colors.darkBlue["500"]}
              pb="4px"
              mb="40px"
            >
              <DynamicContent contentKey="home-blog-title" />
            </Heading>

            <Flex
              gap={{ base: "20px", md: "40px" }}
              alignItems="center"
              flexDir={{ base: "column", md: "row" }}
            >
              <Flex
                w={{ base: "100%", md: "408px" }}
                h="282px"
                bgImage={`url(${article.image})`}
                bgSize="cover"
                bgPosition="center"
                borderRadius="200px"
                position="relative"
              >
                <Flex
                  w="112px"
                  h="112px"
                  bg="white"
                  borderRadius="50%"
                  zIndex="1"
                  align="center"
                  justify="center"
                  position="absolute"
                  right="0"
                  bottom="0"
                >
                  <Image
                    h="65px"
                    src={`/images/${getCategoryIcon(article.category_id)}`}
                    alt={`Icone da categoria`}
                  />
                </Flex>
              </Flex>

              <Flex
                w={{ base: "100%", md: "50%" }}
                flexDir="column"
                textAlign={{ base: "center", md: "left" }}
                alignItems={{ base: "center", md: "start" }}
              >
                <Text
                  w="100%"
                  fontSize="32px"
                  lineHeight="110%"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {article.title}
                </Text>

                <Text color="darkBlue.500" fontSize="18px" mt="10px" w="100%">
                  {new Date(article.created_at).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </Text>

                <Link href={`/blog/${article.slug}`} passHref>
                  <Button
                    colorScheme="blue"
                    borderRadius="40px"
                    mt="20px"
                    px="30px"
                  >
                    Ler artigo
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        ))}
    </Container>
  );
};

export default Blog;
