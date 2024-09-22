import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhitePage from "@/app/components/WhitePage";
import Head from "next/head";
import WhatsAppFooter from "@/app/components/WhatsAppFooter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Article = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  category_id: number;
  category_name: string;
};

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchArticle = async () => {
        try {
          const response = await fetch(`/api/getPostBySlug?slug=${slug}`);
          if (!response.ok) {
            throw new Error(`Error fetching article: ${response.statusText}`);
          }

          const data = await response.json();
          setArticle(data);

          console.log(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchArticle();
    }
  }, [slug]);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (!article) {
    return <Text>Article não encontrado</Text>;
  }

  return (
    <Flex
      bgImage="url('/images/bg-glow.svg')"
      bgSize="auto"
      bgPosition="center -300px"
      minHeight="100vh"
      direction="column"
    >
      <Head>
        <title>Blog - {article.title}</title>
      </Head>
      <Header />

      <WhitePage borderBottomRadius="0" p="0px !important">
        <Flex flexDir="column" alignItems="center">
          <Flex w="100%" h={{ base: "300px", md: "465px" }}>
            <Flex
              bgImage={`url(${article.image})`}
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="center"
              borderTopRadius="20px"
              overflow="hidden"
              position="relative"
              justify="center"
            >
              <Flex
                bgGradient="linear(to-b, transparent 60%, lightBlue.500)"
                w="100%"
                h="100%"
                position="absolute"
              ></Flex>

              <Flex
                w="100%"
                maxW="900px"
                h="100%"
                zIndex="1"
                position="relative"
              >
                <Flex
                  position="absolute"
                  top="40px"
                  right="0px"
                  flexDir="column"
                  alignItems="center"
                  gap="10px"
                >
                  <Flex
                    w="112px"
                    h="112px"
                    bg="white"
                    borderRadius="50%"
                    zIndex="1"
                    align="center"
                    justify="center"
                  >
                    <Image
                      h="65px"
                      src={`/images/${getCategoryIcon(article.category_id)}`}
                      alt="Categoria"
                    />
                  </Flex>
                  <Text color="darkBlue.500">{article.category_name}</Text>
                </Flex>

                <Flex
                  flexDir="column"
                  gap={{ base: "6px", md: "16px" }}
                  bottom="25px"
                  position="absolute"
                  px={{ base: "20px", md: 0 }}
                >
                  <Text
                    fontWeight={900}
                    color="darkBlue.500"
                    fontSize={{ base: "14px", md: "20px" }}
                  >
                    Blog Algam
                  </Text>

                  <Heading
                    as="h1"
                    color="white"
                    lineHeight="100%"
                    fontSize={{ base: "30px", md: "40px" }}
                    fontWeight="500"
                  >
                    {article.title}
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            w="100%"
            maxW="650px"
            pt="40px"
            pb="40px"
            flexDir="column"
            gap="30px"
            px={{ base: "20px", md: "0" }}
          >
            <Text color="darkBlue.500" fontSize="16px">
              Publicado em{" "}
              {new Date(article.created_at).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Text>

            <Box
              dangerouslySetInnerHTML={{ __html: article.description }}
              color="darkBlue.500"
              fontSize="20px"
              lineHeight="1.7"
            />
          </Flex>
        </Flex>

        <WhatsAppFooter />
      </WhitePage>
      <Footer />
    </Flex>
  );
};

const getCategoryIcon = (category_id: number) => {
  switch (category_id) {
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

export default BlogPost;
