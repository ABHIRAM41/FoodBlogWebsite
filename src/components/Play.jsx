import React from 'react'
import {Grid, GridItem, Image} from '@chakra-ui/react';
import logo from '../images/logo.png';
import pizza from '../images/pizza.png';
import sidep from '../images/sidep.png';
export const Play = () => {
  return (
    <Grid templateColumns={"repeat(3,1fr)"}> 
    <GridItem bg={"red"}>
sled
    </GridItem>
    <GridItem bg={"blue"}>
        sd;
        <Image  src={logo} alt="Logo"/>
    </GridItem>
    <GridItem bg={"pink"} position={"relative"}> 
        <Image src={pizza} alt='pizza' />
        <Image src={sidep} alt='design'pos={"absolute"}  top={0} right={0} zIndex={2}/>
    </GridItem>
    </Grid>
  )
}
