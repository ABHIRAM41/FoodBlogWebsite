import React from 'react';
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import insta from "../images/insta.png";
import {Box,Image,Grid,GridItem,Text,Heading} from '@chakra-ui/react';
export const Forth = () => {
  return (
    <Box bg="#F8F8F8">
    <Box bg="#F8F8F8" px={{xl:"100px",lg:"120px",base:"50px"}}>
        <Grid templateColumns='repeat(4, 1fr)' gap={{xl:"20px"}}>
        
            <GridItem colSpan={{base:4,xl:1}}>
                <Box py={{base:"50px",xl:"100px"}} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Image src={logo} alt="logo"/>
                </Box>
            </GridItem>
            <GridItem colSpan={{base:4,xl:1}}>
            <Box py={{base:"25px",xl:"100px"}} width={{xl:"500px"}}>
            <Text fontSize={"1.2rem"} color={"#0E2368"} fontWeight={"600"} mb={"15px"}>
            Contact Us
            </Text>
            <Text mb="10px">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
            </Text>
            <Text mb="10px">
            example2020@gmail.com
            </Text>
            <Text mb="10px">
            (904) 443-0343
            </Text>
            </Box>
            </GridItem>
            <GridItem colSpan={{base:4,xl:1}}>
            <Box py={{base:"25px",xl:"100px"}}>
            <Text fontSize={"1.2rem"} color={"#0E2368"} fontWeight={"600"} mb={"15px"}>
                More
                </Text>
                <Text mb="10px">
                About Us
                </Text>
                <Text mb="10px">
                Products
                </Text>
                <Text mb="10px">
                Career
                </Text>
                <Text mb="10px">
                Contact Us
                </Text>
            </Box>
            </GridItem>
            <GridItem colSpan={{base:4,xl:1}} mb={{base:"100px",sm:"0px"}}>
            <Box py={{base:"30px",xl:"100px"}} pb={{base:"100px",xl:"100px"}}>
            <Box>
                <Text textAlign={"center"} fontSize={"1.2rem"} color={"#0E2368"} fontWeight={"600"} display={{ base: "none", lg: "block" }}>
                Social media
                </Text>
                <Text display={{ base: "block", lg: "none" }} textAlign={"center"} > © 2022 Food Truck Example </Text>
                <Box display={'flex'} justifyContent={"center"} alignItems={"center"}>
                <Box>
                <Image src={insta} alt="insta"/></Box><Box>
                <Image src={twitter} alt="twitter"/></Box><Box>
                <Image src={facebook} alt="facebook"/> </Box>
                </Box>
                </Box>
                <Box marginTop={{base:"0px",md:"30px"}} display={{ base: "none", lg: "block" }} >
                © 2022 Food Truck Example
            </Box>
            </Box>
            </GridItem>
        </Grid>
    </Box>
    </Box>
  )
}
