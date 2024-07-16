// pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../chakra";
import { AppProps } from "next/app";
import "../styles/global.css";
import WhatsappIcon from "@/app/components/WhatsappIcon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <WhatsappIcon />
    </ChakraProvider>
  );
}

export default MyApp;
