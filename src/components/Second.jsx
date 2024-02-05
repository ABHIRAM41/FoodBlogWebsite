import React from 'react'
import {Box, Flex, Heading,Text, Image, Button} from '@chakra-ui/react';
import notadish from '../images/notadish.png';
export const Second = () => {
  return (
    <Flex
    mt={{md:"200px"}}
    justify={{base:"center",md:'space-evenly'}}
    align={"center"}
    bg={"#F8F8F8"}
    >
        <Box display={{base:"none",md:"inline-block"}}>
            <Image src={notadish} alt={"notadish"}/>
        </Box>
        <Box
         textAlign={{base:"center",md:"left"}}
        width={{base:"350px",md:"450px"}}
        my={{base:"150px",md:"0px"}}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        >
            <Heading as="h1" color={"#0E2368"}>
            About Us
            </Heading>
            <Text my={"30px"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
            </Text>
            <Flex justify={{base:"center",md:"start"}}>
            <Button bg={"#E23744"} borderRadius="25px" width={"135px"} h={"45px"}  color={"white"}>Read More</Button>
            </Flex>
        </Box>
    </Flex>
  )
}
