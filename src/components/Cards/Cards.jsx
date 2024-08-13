import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Cards = ({handleBtn}) => {
    const [cards,setCards] = useState([])

    useEffect(()=>{
        fetch('datas.json')
        .then(res=>res.json())
        .then(data=> setCards(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-6 ">
            {
                cards.map(card=><Card handleBtn={()=>handleBtn(card)} key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;