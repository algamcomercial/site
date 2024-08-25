import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Image, Heading, Button } from "@chakra-ui/react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhitePage from "@/app/components/WhitePage";
import Head from "next/head";

interface Article {
  id: number;
  created_at: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  category_id: number;
  category_name: string;
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [latestArticle, setLatestArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/getPosts?limit=11");
        const data: Article[] = await response.json();

        if (data.length > 0) {
          setLatestArticle(data[0]);
          setArticles(data.slice(1)); // O restante será exibido abaixo
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const getCategoryIcon = (categoryId: number): string => {
    switch (categoryId) {
      case 1:
        return "humanization-icon.svg";
      case 2:
        return "excellence-icon.svg";
      case 3:
        return "expertise-icon.svg";
      default:
        return "default-icon.svg";
    }
  };

  return (
    <Flex
      bgImage="url('/images/bg-glow.svg')"
      bgSize="auto"
      bgPosition="center -300px"
      minHeight="100vh"
      direction="column"
    >
      <Head>
        <title>Blog - Algam</title>
      </Head>
      <Header />
      <WhitePage borderBottomRadius="0" px="80px">
        <Flex w="100%" align="center" justify="center" flexDir="column">
          <Flex
            w="100%"
            maxW="650px"
            align="center"
            justify="center"
            flexDir="column"
          >
            <Heading as="h1">
              Blog{" "}
              <Box as="span" color="lightBlue.500">
                Algam
              </Box>
            </Heading>

            <Text textAlign="center" mt="8px">
              Nossa equipe está pronta para ajudar. Preencha o formulário abaixo
              ou utilize nossos canais de atendimento. Será um prazer falar com
              você!
            </Text>
          </Flex>

          {latestArticle && (
            <Flex w="100%" borderRadius="20px" overflow="hidden" mt="40px">
              <Flex w="39%" bg="blue.500" flexDir="column" p="46px" gap="20px">
                <Text color="whiteAlpha.600">
                  {latestArticle.category_name}
                </Text>

                <Heading
                  as="h2"
                  color="white"
                  fontSize="30px"
                  fontWeight="500"
                  lineHeight="100%"
                  letterSpacing="-0.5px"
                  pb="0"
                >
                  {latestArticle.title}
                </Heading>

                <Text color="whiteAlpha.600">
                  {new Date(latestArticle.created_at).toLocaleDateString(
                    "pt-BR",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </Text>
              </Flex>
              <Flex
                maxW="61%"
                w="100%"
                bgImage={`url(${latestArticle.image})`}
                bgSize="cover"
                bgPosition="center"
                position="relative"
              >
                <Flex
                  w="100%"
                  h="100%"
                  bgColor="darkBlue.500"
                  opacity={0.4}
                  position="absolute"
                ></Flex>

                <Flex
                  w="112px"
                  h="112px"
                  bg="white"
                  borderRadius="50%"
                  zIndex="1"
                  position="absolute"
                  bottom="20px"
                  right="20px"
                  align="center"
                  justify="center"
                >
                  <Image
                    h="65px"
                    src={`/images/${getCategoryIcon(
                      latestArticle.category_id
                    )}`}
                    alt={latestArticle.category_name}
                  />
                </Flex>
              </Flex>
            </Flex>
          )}

          <Flex mt="80px" flexDir="column" align="center">
            <Heading
              as="h2"
              fontSize="28px"
              color="darkBlue.500"
              letterSpacing="-1px"
              mb="30px"
            >
              Últimos Artigos
            </Heading>

            <Flex flexDir="column" gap="70px">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  date={new Date(article.created_at).toLocaleDateString(
                    "pt-BR",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                  imageSrc={article.image}
                  altText={article.title}
                  categoryName={article.category_name}
                  link={`/articles/${article.slug}`}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </WhitePage>
      <Footer />
    </Flex>
  );
};

interface ArticleCardProps {
  title: string;
  date: string;
  imageSrc: string;
  altText: string;
  categoryName: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  date,
  imageSrc,
  altText,
  categoryName,
  link,
}) => {
  return (
    <Flex gap="30px" alignItems="center">
      <Flex
        minW="400px"
        w="400px"
        h="280px"
        borderRadius="400px"
        bgImage={`url(${imageSrc})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        position="relative"
      >
        <Flex
          w="100%"
          h="100%"
          bgColor="darkBlue.500"
          borderRadius="400px"
          opacity={0.4}
          position="absolute"
        ></Flex>

        <Flex
          w="112px"
          h="112px"
          bg="white"
          borderRadius="50%"
          zIndex="1"
          position="absolute"
          bottom="0px"
          right="0px"
          align="center"
          justify="center"
        >
          <Image h="65px" src="/images/humanization-icon.svg" alt={altText} />
        </Flex>
      </Flex>

      <Flex w="430px" flexDir="column" gap="14px" align="start">
        <Text fontSize="14px" color="darkBlue.500">
          {categoryName}
        </Text>

        <Text fontSize="32px" lineHeight="110%">
          {title}
        </Text>

        <Text fontSize="18px" color="darkBlue.500">
          {date}
        </Text>

        <Button
          as="a"
          href={link}
          colorScheme="blue"
          borderRadius="40px"
          px="25px"
        >
          Ler artigo
        </Button>
      </Flex>
    </Flex>
  );
};

export default Blog;
