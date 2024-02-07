import React from "react";
import {Button,Text} from '@chakra-ui/react';
const Cards = ({card}) => {
  return (
    <div className="cards">
      <div>
        <img src={card.img} />
      </div>
      <div className="cardcontent">
        <Text as={'h4'} color={"#0E2368"} fontWeight={700}>{card.title}</Text>
        <p>
        {card.content}
        </p>
        <Button className="buttonr"  borderRadius={25} my="30px">Read More</Button>
      </div>
      
    </div>
  );
};
export default Cards;
