import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { setCookie, parseCookies } from "nookies";
import { supabase } from "../../lib/supabaseClient"; // Certifique-se de ajustar o caminho conforme necessário

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Verifica se o usuário já está autenticado ao montar o componente
  useEffect(() => {
    const { "sb-access-token": token } = parseCookies();

    if (token) {
      // Verifica se o token é válido
      const checkAuth = async () => {
        const { data: user, error } = await supabase.auth.getUser(token);
      };

      checkAuth();
    }
  }, [router]);

  const handleLogin = async () => {
    setError(null);
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error);
        return;
      }

      const data = await response.json();
      console.log(data);

      // Salva o token como cookie
      setCookie(null, "sb-access-token", data.access_token, {
        maxAge: 30 * 24 * 60 * 60, // 30 dias
        path: "/",
      });

      // Redireciona para o dashboard após o login bem-sucedido
      router.push("/admin/dashboard");
    } catch (error) {
      setError("Ocorreu um erro inesperado.");
    }
  };

  return (
    <VStack spacing={4}>
      <Box>
        <Text>Email:</Text>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
      </Box>
      <Box>
        <Text>Senha:</Text>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
      </Box>
      {error && <Text color="red.500">{error}</Text>}
      <Button onClick={handleLogin}>Login</Button>
    </VStack>
  );
};

export default AdminLoginPage;
