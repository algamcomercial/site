import {
  Flex,
  Box,
  Text,
  Image,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  List,
  ListItem,
  Tooltip,
} from "@chakra-ui/react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhitePage from "@/app/components/WhitePage";
import Head from "next/head";
import { ReactNode } from "react";
import DownloadCatalog from "@/app/components/DownloadCatalog";
import DynamicContent from "@/app/components/DynamicContent";

// Modifique o componente CustomTab para aceitar o label como prop
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

const Products = () => {
  return (
    <Flex
      bgImage="url('/images/bg-glow.svg')"
      bgSize="auto"
      bgPosition="center -300px"
      minHeight="100vh"
      direction="column"
    >
      <Head>
        <title>Nossos Produtos - Algam</title>
      </Head>
      <Header />
      <WhitePage borderBottomRadius="0">
        <Flex justify="center" flexDir="column" align="center">
          <Flex
            position="absolute"
            top="0"
            left="0"
            width="100%"
            bgImage="url('/images/red-smile.svg')"
            bgSize="110%"
            bgRepeat="no-repeat"
            bgPosition="center bottom"
            h={{ base: "auto", md: "300px" }}
            mt="80px"
            zIndex="1"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="center"
              gap={10}
              maxWidth="980px"
              width="100%"
              mx="auto"
              h="100%"
              pb={{ base: "60px", md: "70px" }}
              pt={{ base: "40px" }}
              px="20px"
            >
              <Image
                src="/images/ethicon.png"
                alt="Ethicon Logo"
                minWidth="278px"
                maxWidth={{ base: "100%", md: "278px" }}
                order={{ base: 2, md: 1 }}
                mb={{ base: "20px", md: "0" }}
              />
            </Flex>
          </Flex>

          <Flex
            mt="280px"
            justify="center"
            w="100%"
            flexDir="column"
            maxW="650px"
            textAlign="center"
          >
            <Heading as="h1">
              <DynamicContent contentKey="products-title" />
            </Heading>

            <Text textAlign="center" mt="8px">
              <DynamicContent contentKey="products-description" />
            </Text>

            <Tabs align="center" variant="unstyled" mt="54px">
              <TabList gap="15px" alignItems="center">
                <CustomTab label="Suturas, Suturas Plus e Stratafix">
                  <Box as="span" fontSize="30px">
                    <Image
                      src="/images/sutura.svg"
                      alt="Suturas, Suturas Plus e Stratafix"
                    />
                  </Box>
                </CustomTab>
                <CustomTab label="Hemostáticos Adjuvantes">
                  <Box as="span" fontSize="30px">
                    <Image
                      src="/images/hemostatico.svg"
                      alt="Hemostáticos Adjuvantes"
                    />
                  </Box>
                </CustomTab>
                <CustomTab label="Marcapasso">
                  <Image
                    src="/images/marcapasso.svg"
                    alt="Fios de Marcapasso"
                  />
                </CustomTab>
                <CustomTab label="Cera para Osso">
                  <Image src="/images/cera.svg" alt="Cera para Osso" />
                </CustomTab>
                <CustomTab label="Drenos e Reservatórios">
                  <Image src="/images/dreno.svg" alt="Drenos e Reservatórios" />
                </CustomTab>
                <CustomTab label="Colas (Dermabond e Dermabond Píneo)">
                  <Image
                    src="/images/cola.svg"
                    alt="Colas (Dermabond e Dermabond Píneo)"
                  />
                </CustomTab>
                <CustomTab label="Grampeadores e Telas para Hérnias">
                  <Image
                    src="/images/grampeador.svg"
                    alt="Grampeadores e Telas para Hérnias"
                  />
                </CustomTab>
              </TabList>

              <TabPanels w="100%" mt="30px">
                <TabPanel w="100%" textAlign="left">
                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-suturas-title" />
                  </Heading>

                  <Text>
                    <DynamicContent contentKey="products-suturas-description" />
                  </Text>

                  <Flex mt="20px" w="100%" mb="50px">
                    <Flex flexDir="column" flex="1">
                      <Text fontWeight="700" color="darkBlue.500">
                        <DynamicContent contentKey="products-column1-title" />
                      </Text>

                      <List styleType="#" pl="30px" mt="6px" fontSize="20px">
                        <DynamicContent contentKey="products-column1-description" />
                      </List>
                    </Flex>

                    <Flex flexDir="column" flex="1">
                      <Text fontWeight="700" color="darkBlue.500">
                        <DynamicContent contentKey="products-column2-title" />
                      </Text>

                      <List styleType="#" pl="30px" mt="6px" fontSize="20px">
                        <DynamicContent contentKey="products-column2-description" />
                      </List>
                    </Flex>
                  </Flex>

                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-suturasplus-title" />
                  </Heading>

                  <Text>
                    <DynamicContent contentKey="products-suturasplus-description" />
                  </Text>

                  <Flex mt="20px" w="100%" mb="50px">
                    <Flex flexDir="column" flex="1">
                      <Text fontWeight="700" color="darkBlue.500">
                        <DynamicContent contentKey="products-suturasplus-column1-title" />
                      </Text>

                      <List styleType="#" pl="30px" mt="6px" fontSize="20px">
                        <DynamicContent contentKey="products-suturasplus-column1-description" />
                      </List>
                    </Flex>
                  </Flex>

                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-stratafix-title" />
                  </Heading>

                  <Text>
                    <DynamicContent contentKey="products-stratafix-description" />
                  </Text>

                  <Flex mt="20px" w="100%" mb="50px">
                    <Flex flexDir="column" flex="1">
                      <Text fontWeight="700" color="darkBlue.500">
                        <DynamicContent contentKey="products-stratafix-column1-title" />
                      </Text>

                      <List styleType="#" pl="30px" mt="6px" fontSize="20px">
                        <DynamicContent contentKey="products-stratafix-column1-description" />
                      </List>
                    </Flex>

                    <Flex flexDir="column" flex="1">
                      <Text fontWeight="700" color="darkBlue.500">
                        <DynamicContent contentKey="products-stratafix-column2-title" />
                      </Text>

                      <List styleType="#" pl="30px" mt="6px" fontSize="20px">
                        <DynamicContent contentKey="products-stratafix-column2-description" />
                      </List>
                    </Flex>
                  </Flex>
                </TabPanel>

                <TabPanel w="100%" textAlign="left">
                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-hemostaticos-title" />
                  </Heading>

                  <Text>
                    <DynamicContent contentKey="products-hemostaticos-description" />
                  </Text>

                  <List
                    styleType="#"
                    pl="30px"
                    mt="26px"
                    fontSize="20px"
                    gap="8px"
                    display="flex"
                    flexDirection="column"
                    mb="50px"
                  >
                    <DynamicContent contentKey="products-hemostaticos-items" />
                  </List>

                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-spongostan-title" />
                  </Heading>

                  <Text>
                    <DynamicContent contentKey="products-spongostan-description" />
                  </Text>

                  <Heading
                    as="h2"
                    fontSize="26px"
                    letterSpacing="-1.5px"
                    mt="40px"
                  >
                    <DynamicContent contentKey="products-spongonstanpo-title" />
                  </Heading>

                  <Text mb="20px">
                    <DynamicContent contentKey="products-spongonstanpo-description" />
                  </Text>

                  <Heading
                    as="h2"
                    fontSize="26px"
                    letterSpacing="-1.5px"
                    mt="40px"
                  >
                    <DynamicContent contentKey="products-surgiflo-title" />
                  </Heading>

                  <Text mb="20px">
                    <DynamicContent contentKey="products-surgiflo-description" />
                  </Text>
                </TabPanel>

                <TabPanel w="100%" textAlign="left">
                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-marcapasso-title" />
                  </Heading>

                  <Text mb="80px">
                    <DynamicContent contentKey="products-marcapasso-description" />
                  </Text>
                </TabPanel>

                <TabPanel w="100%" textAlign="left">
                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-cera-title" />
                  </Heading>

                  <Text mb="80px">
                    <DynamicContent contentKey="products-cera-description" />
                  </Text>
                </TabPanel>

                <TabPanel w="100%" textAlign="left">
                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-dreno-title" />
                  </Heading>

                  <Text mb="40px">
                    <DynamicContent contentKey="products-dreno-description" />
                  </Text>

                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-reservatorio-title" />
                  </Heading>

                  <List
                    styleType="#"
                    pl="30px"
                    fontSize="20px"
                    gap="8px"
                    display="flex"
                    flexDirection="column"
                    mb="80px"
                  >
                    <DynamicContent contentKey="products-reservatorio-description" />
                  </List>
                </TabPanel>

                <TabPanel w="100%" textAlign="left">
                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-dermabond-title" />
                  </Heading>

                  <Text mb="20px">
                    <DynamicContent contentKey="products-dermabond-description" />
                  </Text>

                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-dermabondprineo-title" />
                  </Heading>

                  <Text mb="80px">
                    <DynamicContent contentKey="products-dermabondprineo-description" />
                  </Text>
                </TabPanel>

                <TabPanel w="100%" textAlign="left">
                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-grampeador-title" />
                  </Heading>

                  <Text mb="40px">
                    <DynamicContent contentKey="products-grampeador-description" />
                  </Text>

                  <Heading as="h2" fontSize="26px" letterSpacing="-1.5px">
                    <DynamicContent contentKey="products-telas-title" />
                  </Heading>

                  <Text mb="20px">
                    <DynamicContent contentKey="products-telas-description" />
                  </Text>

                  <Flex mt="20px" w="100%" mb="80px">
                    <Flex flexDir="column" flex="1">
                      <Text fontWeight="700" color="darkBlue.500">
                        <DynamicContent contentKey="products-grampeador-column1-title" />
                      </Text>

                      <List styleType="#" pl="30px" mt="6px" fontSize="20px">
                        <DynamicContent contentKey="products-grampeador-column1-items" />
                      </List>
                    </Flex>

                    <Flex flexDir="column" flex="1">
                      <Text fontWeight="700" color="darkBlue.500">
                        <DynamicContent contentKey="products-grampeador-column2-title" />
                      </Text>

                      <List styleType="#" pl="30px" mt="6px" fontSize="20px">
                        <DynamicContent contentKey="products-grampeador-column2-description" />
                      </List>
                    </Flex>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>

          <DownloadCatalog />
        </Flex>
      </WhitePage>
      <Footer />
    </Flex>
  );
};

export default Products;
