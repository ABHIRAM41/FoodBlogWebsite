import React from "react";
import {Button} from '@chakra-ui/react';
const Cards = ({card}) => {
  return (
    <div className="cards">
      <div>
        <img src={card.img} />
      </div>
      <div className="cardcontent">
        <h4 >{card.title}</h4>
        <p>
        {card.content}
        </p>
        <Button className="buttonr" borderRadius={25} my="30px">Read More</Button>
      </div>
    </div>
  );
};
export default Cards;
