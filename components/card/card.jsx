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
              {el[2]} #{el[0].toNumber() }
            </h2>
            <p>Age: {el[1].toNumber()}</p>
            <p>{el[4]}</p>
            <p>Wallet Address: {el[6].slice(0, 25)}...</p>
            <p className={Style.total}>Total Vote</p>
          </div>

          <div className={Style.card_vote}>
            <p>{el[5].toNumber()}</p>
          </div>
          <div className={Style.card_button}>
            <button onClick={() => giveVote({id: el[1].toNumber(), address: el[6]})}> Give Vote</button>

          </div>

        </div>
      ))}
    </div>
  )
};

export default card;

