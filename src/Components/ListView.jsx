import ShopItem from "./ShopItem";

function ListView(prop){
    
    return(
            prop.items.map((item,index) => <ShopItem item={item} key={index}/>)
    )
}

export default ListView;