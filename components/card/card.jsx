import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from '../card/card.module.css'
import image from '../../assets'


const card = ({candidatesArray, giveVote }) => {
  return(
    <div className={Style.card}>
      {candidatesArray.map((el, i) => (
        <div key={i + 1} className= {Style.card_box}>

          <div className= {Style.image}>
            <img src= {el[3]} alt="profile"/>
          </div>
          <div className={Style.card_info}>
            <h2>
              {el[1]} #{el[2].toNumber() }
            </h2>
            <p>{el[0].toNumber()}</p>
            <p>Address: {el[6].slice(0, 30)}...</p>
            <p className={Style.total}>Total Vote</p>
          </div>

          <div className={Style.card_vote}>
            <p>{el[4].toNumber()}</p>
          </div>
          <div className={Style.card_button}>
            <button onClick={() => giveVote({id: el[2].toNumber(), address: el[6]})}> Give Vote</button>

          </div>

        </div>
      ))}
    </div>
  )
};

export default card;

