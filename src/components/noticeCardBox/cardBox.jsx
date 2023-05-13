import {CardBoxWrapper} from './cardBoxStyle';
import React from "react";

const CardBox = (props) => {
  return (
    <CardBoxWrapper>
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-message">{props.message}</p>
        <span className="card-date">{props.date}</span>
      </div>
{props.children}

    </CardBoxWrapper>
  );
};



export default CardBox;
