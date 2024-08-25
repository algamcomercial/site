// src/app/components/Testimonial.tsx
import { useState, useEffect } from "react";
import { Box, Flex, Text, Container } from "@chakra-ui/react";
import DynamicContent from "./DynamicContent";

const testimonials = [
  {
    quoteKey: "testimonial1-quote",
    authorKey: "testimonial1-author",
    positionKey: "testimonial1-position",
  },
  {
    quoteKey: "testimonial2-quote",
    authorKey: "testimonial2-author",
    positionKey: "testimonial2-position",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in-up",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeProp({
        fade: "fade-out-up",
      });

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFadeProp({
          fade: "fade-in-up",
        });
      }, 500); // Tempo da animação de saída
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
        <Flex
          w="100%"
          h="300px"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Box
            key={currentIndex}
            className={fadeProp.fade}
            position="absolute"
            width="100%"
          >
            <Text
              fontSize={{ base: "5vw", md: "25px" }}
              textAlign="center"
              mb={4}
              color="gray.500"
              lineHeight="120%"
            >
              <DynamicContent
                contentKey={testimonials[currentIndex].quoteKey}
              />
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Box textAlign="center" color="darkBlue.500" lineHeight="130%">
                <Text fontWeight="bold" fontSize="20px" color="darkBlue.500">
                  <DynamicContent
                    contentKey={testimonials[currentIndex].authorKey}
                  />
                </Text>
                <Text fontSize="20px">
                  <DynamicContent
                    contentKey={testimonials[currentIndex].positionKey}
                  />
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Testimonial;
