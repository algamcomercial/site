import {
  Flex,
  Image,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Select,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhitePage from "@/app/components/WhitePage";
import Head from "next/head";
import { useState } from "react";
import DownloadCatalog from "@/app/components/DownloadCatalog";
import DynamicContent from "@/app/components/DynamicContent";
import CustomTab from "@/app/components/products/CustomTab";
import SuturasTabPanel from "@/app/components/products/SuturasTabPanel";
import HemostaticosTabPanel from "@/app/components/products/HemostaticosTabPanel";
import MarcapassoTabPanel from "@/app/components/products/MarcapassoTabPanel";
import CeraTabPanel from "@/app/components/products/CeraTabPanel";
import DrenosTabPanel from "@/app/components/products/DrenosTabPanel";
import ColasTabPanel from "@/app/components/products/ColasTabPanel";
import GrampeadoresTabPanel from "@/app/components/products/GrampeadoresTabPanel";

const Products = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTab(parseInt(event.target.value));
  };

  const tabOptions = [
    "Suturas, Suturas Plus e Stratafix",
    "Hemostáticos Adjuvantes",
    "Marcapasso",
    "Cera para Osso",
    "Drenos e Reservatórios",
    "Colas (Dermabond e Dermabond Píneo)",
    "Grampeadores e Telas para Hérnias",
  ];

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
            mt={{ base: "220px", md: "280px" }}
            justify="center"
            w="100%"
            flexDir="column"
            maxW="650px"
          >
            <Heading
              as="h1"
              lineHeight="100%"
              fontSize={{ base: "32px", md: "44px" }}
              textAlign={"center"}
            >
              <DynamicContent contentKey="products-title" />
            </Heading>

            <Text mt="8px">
              <DynamicContent contentKey="products-description" />
            </Text>

            {isMobile ? (
              <>
                <Select
                  mt="54px"
                  value={selectedTab}
                  onChange={handleSelectChange}
                >
                  {tabOptions.map((option, index) => (
                    <option key={index} value={index}>
                      {option}
                    </option>
                  ))}
                </Select>

                <Box w="100%" mt="30px">
                  {selectedTab === 0 && <SuturasTabPanel />}
                  {selectedTab === 1 && <HemostaticosTabPanel />}
                  {selectedTab === 2 && <MarcapassoTabPanel />}
                  {selectedTab === 3 && <CeraTabPanel />}
                  {selectedTab === 4 && <DrenosTabPanel />}
                  {selectedTab === 5 && <ColasTabPanel />}
                  {selectedTab === 6 && <GrampeadoresTabPanel />}
                </Box>
              </>
            ) : (
              <Tabs
                variant="unstyled"
                mt="54px"
                index={selectedTab}
                onChange={setSelectedTab}
              >
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
                    <Image
                      src="/images/dreno.svg"
                      alt="Drenos e Reservatórios"
                    />
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
                  <TabPanel>
                    <SuturasTabPanel />
                  </TabPanel>
                  <TabPanel>
                    <HemostaticosTabPanel />
                  </TabPanel>
                  <TabPanel>
                    <MarcapassoTabPanel />
                  </TabPanel>
                  <TabPanel>
                    <CeraTabPanel />
                  </TabPanel>
                  <TabPanel>
                    <DrenosTabPanel />
                  </TabPanel>
                  <TabPanel>
                    <ColasTabPanel />
                  </TabPanel>
                  <TabPanel>
                    <GrampeadoresTabPanel />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            )}
          </Flex>

          <DownloadCatalog />
        </Flex>
      </WhitePage>
      <Footer />
    </Flex>
  );
};

export default Products;
