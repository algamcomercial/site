// src/pages/index.tsx
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Header from "@/app/components/Header";
import BigBanner from "@/app/components/BigBanner";
import Ethicon from "@/app/components/Ethicon";
import ProductsHome from "@/app/components/ProductsHome";
import DownloadCatalog from "@/app/components/DownloadCatalog";
import Testimonial from "@/app/components/Testimonial";
import WhatsAppFooter from "@/app/components/WhatsAppFooter";
import Footer from "@/app/components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Algam</title>
      </Head>
      <Flex direction="column">
        <Header />
        <BigBanner />
        <Ethicon />
        <ProductsHome />
        <DownloadCatalog />
        <Testimonial />
        <WhatsAppFooter />
        <Footer />
      </Flex>
    </>
  );
};

export default Home;
