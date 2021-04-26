function ShopCard (prop){
    
    const item = prop.item;
    return(
    <div className="card">
        <img src={item.img} alt="" className={"card-img"}/>
        <div className="name">{item.name}</div>
        <div className="color">{item.color}</div>
        <div className="price">${item.price}</div>
        <button>add to card</button>
    </div>
    )
}

export default ShopCard;