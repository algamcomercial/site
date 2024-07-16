import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    50: "#e3f2ff",
    100: "#b9d4ff",
    200: "#8db6ff",
    300: "#6098ff",
    400: "#337aff",
    500: "#005BD2", // Cor principal
    600: "#004bb3",
    700: "#003a94",
    800: "#002a75",
    900: "#001956",
  },
  lightBlue: {
    50: "#e3f2ff",
    100: "#b3d4ff",
    200: "#81b5ff",
    300: "#4e96ff",
    400: "#1b76ff",
    500: "#117DF5", // A cor principal
    600: "#0047b4",
    700: "#003182",
    800: "#001b50",
    900: "#00061f",
  },
  darkBlue: {
    50: "#e3eaf6",
    100: "#b6c3e1",
    200: "#8a9ccc",
    300: "#5d75b8",
    400: "#3050a3",
    500: "#00245E", // Cor principal
    600: "#001e4e",
    700: "#00183e",
    800: "#00122e",
    900: "#000c1e",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Comfortaa', sans-serif`,
    body: `'Sofia Sans', sans-serif`,
  },
  components: {
    Heading: {
      sizes: {
        h1: {
          fontSize: "48px",
          fontWeight: "bold",
          letterSpacing: "-3px",
          color: "darkBlue.500",
          pb: "20px",
        },
      },
      defaultProps: {
        size: "h1",
      },
    },
    Text: {
      baseStyle: {
        fontSize: "20px",
        color: "gray.500",
      },
    },
  },
});

export default theme;
