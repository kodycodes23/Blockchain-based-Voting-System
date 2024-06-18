import React from "react";
import Image from 'next/image';

import Style from '../card/card.module.css';
import images from '../../assets';
import cardStyle from './voterCard.module.css';


const voterCard = ({voterArray}) => {
  return (
    <div className={Style.card}>
      {voterArray.map((el, i) =>(
        <div className={Style.card_box}>
          <div className={Style.image}>
            <img src={el[6]} alt="Profile Photo"/>
          </div>
          <div className={Style.card_info}>
            <h2>
              {el[1]} #{el[0].toNumber}
            </h2>
            <p>Address:{el[3].slice(0, 10)}...</p>
            <p>Details</p>
            <p className={cardStyle.vote_Status}>
              {el[5] == true ? "You already Voted" : "Not Voted"}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default voterCard;
