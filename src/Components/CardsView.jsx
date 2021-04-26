import ShopCard from "./ShopCard";

function CardsView(prop){
    
    return(
        <div className={"cards"}>
            {prop.cards.map((item,index) => <ShopCard item={item} key={index}/>)}
        </div> 
    )

}

export default CardsView;