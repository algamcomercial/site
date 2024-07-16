import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Input,
  Textarea,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState, ChangeEvent, useRef } from "react";
import ReactInputMask from "react-input-mask";
import Header from "@/app/components/Header";
import WhatsAppFooter from "@/app/components/WhatsAppFooter";
import Footer from "@/app/components/Footer";
import WhitePage from "@/app/components/WhitePage";
import Head from "next/head";

type FormType = "Suporte" | "Comercial" | "Financeiro" | "Autodenúncia";

const isValidEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const isValidPhone = (phone: string) => {
  const re = /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/;
  return re.test(phone);
};

const ChakraInputMask = ({
  mask,
  value,
  onChange,
  placeholder,
  size,
}: {
  mask: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  size?: string;
}) => (
  <ReactInputMask mask={mask} value={value} onChange={onChange}>
    <Input placeholder={placeholder} size={size} />
  </ReactInputMask>
);

const Contact = () => {
  const [selectedForm, setSelectedForm] = useState<FormType>("Suporte");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    subject: "",
    description: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToFormRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (form: FormType) => {
    setSelectedForm(form);
    clearErrors();
    resetForm();
    scrollToFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clearErrors = () => {
    setErrors({
      email: "",
      phone: "",
      subject: "",
      description: "",
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setDescription("");
    setFormSubmitted(false);
  };

  const handleSubmit = async () => {
    const newErrors = {
      email: "",
      phone: "",
      subject: "",
      description: "",
    };

    if (selectedForm !== "Autodenúncia") {
      if (!isValidEmail(email)) {
        newErrors.email = "Por favor, insira um e-mail válido.";
      }
      if (!isValidPhone(phone)) {
        newErrors.phone = "Por favor, insira um telefone válido.";
      }
    }

    if (subject.length < 3) {
      newErrors.subject = "O assunto deve ter pelo menos 3 letras.";
    }

    if (description.length < 3) {
      newErrors.description = "A descrição deve ter pelo menos 3 letras.";
    }

    setErrors(newErrors);

    if (
      !newErrors.email &&
      !newErrors.phone &&
      !newErrors.subject &&
      !newErrors.description
    ) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            subject,
            description,
          }),
        });

        if (response.ok) {
          setSubmissionMessage("Formulário enviado com sucesso!");
          setFormSubmitted(true);
        } else {
          setSubmissionMessage("Erro ao enviar o formulário.");
          setFormSubmitted(true);
        }
      } catch (error) {
        setSubmissionMessage("Erro ao enviar o formulário.");
        setFormSubmitted(true);
      }
    }
  };

  const renderForm = () => (
    <Box
      as="form"
      mt={4}
      onSubmit={(e: any) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        placeholder="Nome"
        mb={2}
        size="lg"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Flex mb={2} direction={{ base: "column", md: "row" }} gap={2}>
        <Box flex="1">
          <Input
            placeholder="E-mail"
            size="lg"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          {errors.email && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.email}
            </Text>
          )}
        </Box>
        <Box flex="1">
          <ChakraInputMask
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            placeholder="Telefone"
            size="lg"
          />
          {errors.phone && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.phone}
            </Text>
          )}
        </Box>
      </Flex>
      <Flex mb={2} direction="column">
        <Input
          placeholder="Assunto"
          size="lg"
          value={subject}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSubject(e.target.value)
          }
        />
        {errors.subject && (
          <Text color="red.500" fontSize="sm" mt={1}>
            {errors.subject}
          </Text>
        )}
      </Flex>
      <Flex mb={2} direction="column">
        <Textarea
          placeholder="Descreva aqui sua dúvida"
          size="lg"
          height="200px"
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />
        {errors.description && (
          <Text color="red.500" fontSize="sm" mt={1}>
            {errors.description}
          </Text>
        )}
      </Flex>
      <Button colorScheme="blue" size="lg" onClick={handleSubmit}>
        Enviar Formulário
      </Button>
    </Box>
  );

  return (
    <Flex
      bgImage="url('/images/bg-glow.svg')"
      bgSize="auto"
      bgPosition="center -300px"
      minHeight="100vh"
      direction="column"
    >
      <Head>
        <title>Contato - Algam</title>
      </Head>
      <Header />
      <WhitePage>
        <Flex
          flex="1"
          gap="8"
          alignItems="center"
          direction={{ base: "column", lg: "row" }}
        >
          <Flex flexDirection="column" width={{ base: "100%", lg: "45%" }}>
            <Heading
              as="h1"
              fontSize={{ base: "9vw", md: "42px", lg: "46px" }}
              lineHeight="100%"
            >
              Entre em{" "}
              <Text
                as="span"
                color="blue.500"
                fontSize={{ base: "9vw", md: "42px", lg: "46px" }}
              >
                Contato
              </Text>
            </Heading>

            <Text
              mt={2}
              fontSize={{ base: "18px", md: "20px" }}
              fontWeight="bold"
            >
              Tem alguma dúvida ou precisa de mais informações? <br />
              <br />
            </Text>

            <Text mt={2} fontSize={{ base: "18px", md: "20px" }}>
              Nossa equipe está pronta para ajudar. Preencha o formulário abaixo
              ou utilize nossos canais de atendimento. Será um prazer falar com
              você!
            </Text>
          </Flex>

          <Flex
            p={4}
            border="20px solid"
            borderColor="lightBlue.500"
            borderRadius={{ base: "70px", md: "200px" }}
            flexDirection="column"
            width={{ base: "100%", lg: "50%" }}
            px={{ base: "20px", md: "42px" }}
            pr="32px"
            py="34px"
            boxSizing="border-box"
            gap="4"
            mt={{ base: 4, lg: 0 }}
          >
            <Flex>
              <Image
                src="/images/icon-map.svg"
                boxSize="24px"
                mr={2}
                alt="Endereço Algam"
                mt="-2px"
              />
              <Flex flexDirection="column">
                <Text
                  fontWeight="bold"
                  color="darkBlue.500"
                  fontSize={{ base: "18px", md: "20px" }}
                >
                  Algam Comercial Ltda
                </Text>

                <Text fontSize={{ base: "18px", md: "20px" }}>
                  Rua Amparo, 9 - Loja 03, 04 e 05
                </Text>
                <Text fontSize={{ base: "18px", md: "20px" }}>
                  Sala 201 A 204 - Alto Barroca - BH - MG
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Image
                src="/images/icon-phone.svg"
                boxSize="24px"
                mr={2}
                alt="WhatsApp Algam"
                mt="-2px"
              />
              <Link href="https://wa.me/5531984067075" isExternal>
                <Text fontSize={{ base: "18px", md: "20px" }}>
                  (31) 98406-7075 (WhatsApp)
                </Text>
              </Link>
            </Flex>

            <Flex>
              <Image
                src="/images/icon-email.svg"
                boxSize="24px"
                mr={2}
                alt="E-mail Algam"
                mt="-2px"
              />
              <Link href="mailto:medical@algam.com.br">
                <Text fontSize={{ base: "18px", md: "20px" }}>
                  medical@algam.com.br
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          mt={20}
          gap="40px"
          w="100%"
          direction={{ base: "column", lg: "row" }}
        >
          <Flex
            minWidth="296px"
            gap="6px"
            flexDirection="column"
            width={{ base: "100%", lg: "auto" }}
          >
            {["Suporte", "Comercial", "Financeiro", "Autodenúncia"].map(
              (item) => (
                <Flex
                  key={item}
                  cursor="pointer"
                  fontSize={{ base: "22px", md: "24px" }}
                  border="solid 4px"
                  borderRadius="100px"
                  borderColor={selectedForm === item ? "blue.500" : "gray.100"}
                  color={selectedForm === item ? "blue.500" : "gray.500"}
                  fontFamily="Comfortaa"
                  fontWeight="bold"
                  h="56px"
                  alignItems="center"
                  px="26px"
                  pr="16px"
                  pt="5px"
                  onClick={() => handleMenuClick(item as FormType)}
                  justifyContent="space-between"
                >
                  <Flex>{item}</Flex>
                  {selectedForm === item ? (
                    <Image
                      src="/images/arrow-icon-blue.svg"
                      mt="-4px"
                      alt={`Ir para ${item}`}
                    />
                  ) : (
                    <></>
                  )}
                </Flex>
              )
            )}
          </Flex>
          <Box pl={{ lg: 4 }} flex="1">
            <Box ref={scrollToFormRef} height="20px" />
            <Heading
              as="h2"
              fontSize="28px"
              mb={4}
              color="darkBlue.500"
              letterSpacing="-1px"
            >
              Fale com o {selectedForm}
            </Heading>
            {!formSubmitted ? (
              renderForm()
            ) : (
              <Text fontSize="20px" color="darkBlue.500">
                {submissionMessage}
              </Text>
            )}
          </Box>
        </Flex>
      </WhitePage>
      <WhatsAppFooter />
      <Footer />
    </Flex>
  );
};

export default Contact;
