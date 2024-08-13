
const Card = ({card,handleBtn}) => {
    
    return (
        <div>
            <div className=" bg-[#FFF] border-2 flex flex-col justify-left p-4 rounded-lg">
                <img className="w-full" src={card.cover} alt="" />
                <h1 className="text-lg font-semibold text-left py-4">{card.title}</h1>
                <p className="text-[#1C1B1B99] text-sm font-normal leading-[24px]">{card.description}</p>
                <div className="flex justify-center gap-10 text-[#1C1B1B99] text-base font-medium py-4">
                    <p><span> <i className="text-black pr-3 fa-solid fa-dollar-sign"></i></span>Price : {card.price}</p>
                    <p><span ><i className="text-black pr-3 fa-solid fa-book-open"></i></span>Credit : {card.credit}hr</p>
                </div>
                <button onClick={()=>handleBtn(card)} className="text-white w-full bg-[#2F80ED] py-2 rounded-lg text-lg font-semibold">Select</button>
            </div>
        </div>
    );
};

export default Card;