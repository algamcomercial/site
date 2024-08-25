// pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../chakra";
import { AppProps } from "next/app";
import "../styles/global.css";
import WhatsappIcon from "@/app/components/WhatsappIcon";
import { useRouter } from "next/router";
import { withAuth } from "../lib/withAuth"; // Ajuste o caminho se necessário

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");

  // Protege todas as rotas dentro de `/admin`
  const ProtectedComponent = isAdminRoute ? withAuth(Component) : Component;

  return (
    <ChakraProvider theme={theme}>
      <ProtectedComponent {...pageProps} />
      <WhatsappIcon />
    </ChakraProvider>
  );
}

export default MyApp;
