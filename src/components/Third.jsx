import React, { useState } from "react";
import {Box,Text, Flex, Heading, SimpleGrid,Grid, GridItem} from '@chakra-ui/react';
import dish1 from "../images/dish1.png";
import dish2 from "../images/dish2.png";
import dish3 from "../images/dish3.png";
import dish4 from "../images/dish4.png";
import dish5 from "../images/dish5.png";
import dish6 from "../images/dish6.png";

import ll from "../images/ll.png";
import ld from "../images/ld.png";
import rl from "../images/rl.png";
import rd from "../images/rd.png";

import Cards from "./Cards";

export const Third = () => {
    const [num, setNum] = useState(0);
    const [n, setN] = useState(0);

    const cardDetails = [
        {
        img: dish1,
        title: "Grilled  Tomatoes at Home",
        content:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
        img: dish2,
        title: "Snacks for Travel",
        content:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
        img: dish3,
        title: "Post-workout Recipes",
        content:
            "Delicious PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
        img: dish4,
        title: "How To Grill Corn",
        content:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
        img: dish5,
        title: "Crunchwrap Supreme",
        content:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
        img: dish6,
        title: "Broccoli Cheese Soup",
        content:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Loremm Ipsum has been the industry's standard...",
        },
    ];
  return (
    <Box mx={{xl:"250px",lg:"150px",md:"100px",base:"0px"}} display={"flex"} alignItems={"center"}  flexDir={"column"}>
    <Text fontSize={"3rem"} color={"#0E2368"} my={"50px"} mt={"80px"}>Latest Articles</Text>
    <Grid templateColumns='repeat(3, 1fr)' gap={20}>
        <GridItem colSpan={{base:3,md:1}}>
            <Cards card={cardDetails[0 + n]} />
        </GridItem><GridItem colSpan={{base:3,lg:1}}>
            <Cards card={cardDetails[1 + n]} />
        </GridItem><GridItem colSpan={{base:3,xl:1}}>
            <Cards card={cardDetails[2 + n]} />
        </GridItem>
    </Grid>
    <Flex justify={"center"} my="50px" gap={"10px"}>
        <div className=""><button className='butto' onClick={num==1? ()=>{setNum(num==0?1:0); setN(n==0?3:0) }:{}}>{num == 0 ? <img src={ll} /> : <img src={ld} />}</button></div>
        <div className="">{num + 1}/2</div>
        <div className=""><button className='butto' onClick={num==0?()=>{setNum(num==1?0:1); setN(n==0?3:0) }:{}}>{num == 1 ? <img src={rl} /> : <img src={rd} />}</button></div>
      </Flex>
    </Box>
  )
}
