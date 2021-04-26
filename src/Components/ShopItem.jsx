function ShopItem (prop){
    
    const item = prop.item;
    return(
    <div className="list">
        <img src={item.img} alt=""/>
        <div className="name">{item.name}</div>
        <div className="color">{item.color}</div>
        <div className="price">${item.price}</div>
        <button>add to card</button>
    </div>
    )
}

export default ShopItem;