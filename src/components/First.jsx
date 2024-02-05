import React from "react";
import logo from "../images/logo.png";
import pizza from "../images/pizza.png";
import sidep from "../images/sidep.png";
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

export const First = () => {
  return (
    <Grid templateColumns="repeat(2,1fr)">
      <GridItem
        order={{ base: 2, md: 1 }}
        colSpan={{ base: 2, md: 1 }}
        align={"center"}
        ml={{lg:"-175px"}}
      >
        <Box
          display={{ base: "none", md: "block" }}
          textAlign={{ md: "center" }}
          width={{md:"350px"}}
          my={"50px"}
        >
          <img src={logo} alt="Logo" />
        </Box>
        <Box
          textAlign={{ base: "center", md: "start" }}
          width={{ base: "290px", sm: "350px" }}
          my={{base:"200px",md:"140px"}}
        >
          <Heading
            as="h1"
            color="#0E2368"
            fontSize={{ base: "2.7rem", md: "3.5rem" }}
          >
            Discover the{" "}
            <Text as="span" color="#E23744">
              Best
            </Text>{" "}
            Food and Drinks
          </Heading>
          <Text my={"30px"}>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>

          <Button bg="#E23744" borderRadius={35} width={"175px"} h={"55px"} color={"white"}>
            Explore more!
          </Button>
        </Box>
      </GridItem>

      <GridItem order={{ base: 1, md: 2 }} colSpan={{ base: 2, md: 1 }}>
        <Image
          position={"relative"}
          visibility="hidden"
          src={pizza}
          alt="pizza"
        />
        <Image
          position={"absolute"}
          top={0}
          right={0}
          src={pizza}
          alt="pizza"
        />

        <Image
          position={"absolute"}
          top={0}
          right={0}
          src={sidep}
          alt="design"
        />
      </GridItem>
    </Grid>
  );
};
