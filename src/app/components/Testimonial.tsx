// src/app/components/Testimonial.tsx
import { useState, useEffect } from "react";
import { Box, Flex, Text, Container } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: `"Quero agradecer a todos que fazem parte da equipe Algam pelo atendimento eficaz e pelos produtos médicos de alta qualidade. Recomendo a Algam sempre para profissionais da área da saúde, em virtude da excelência e competência dessa empresa."`,
    author: "Dra. Ana Paula P. Barros",
    position: "Clínica Ana Barros",
  },
  {
    quote: `"Já compro fios na Algam há anos. Sempre foram muito gentis e entregam no prazo combinado. Muito satisfeita com todo o trabalho da equipe."`,
    author: "Dra. Euzebia Reguete Nunes",
    position: "Cirurgiã Dentista",
  },
  // Adicione mais depoimentos conforme necessário
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // 10000ms = 10s

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      bgImage="url('/images/bg-depoimento.svg')"
      bgSize="4500px"
      bgRepeat="repeat"
      bgPos="bottom"
      w="100%"
      h="618px"
      alignItems="center"
      mt={{ base: "-200px", md: -16 }}
      px="20px"
    >
      <Container maxW="680px" p={4} pt="270px" position="relative">
        <Flex w="100%" h="300px" alignItems="center" justifyContent="center">
          <AnimatePresence>
            {testimonials.map((testimonial, index) =>
              index === currentIndex ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  style={{ position: "absolute", width: "100%" }}
                >
                  <Text
                    fontSize={{ base: "5vw", md: "25px" }}
                    textAlign="center"
                    mb={4}
                    color="gray.500"
                    lineHeight="120%"
                  >
                    {testimonial.quote}
                  </Text>
                  <Flex alignItems="center" justifyContent="center">
                    <Box
                      textAlign="center"
                      color="darkBlue.500"
                      lineHeight="130%"
                    >
                      <Text
                        fontWeight="bold"
                        fontSize="20px"
                        color="darkBlue.500"
                      >
                        {testimonial.author}
                      </Text>
                      <Text fontSize="20px">{testimonial.position}</Text>
                    </Box>
                  </Flex>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Testimonial;
