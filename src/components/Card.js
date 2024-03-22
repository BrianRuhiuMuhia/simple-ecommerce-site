import "./styles/card.css"
export default function Card(props)
{
    return (<div className="card">
        <img src={props.item['image']} className="card-image"></img>
        <div className="card-content">
        <span className="card-title">{props.item['title'].substring(0,20)}</span>
        <span className="card-price">price:{props.item['price']}</span>
       
        <button className="card-btn" onClick={()=>{
            props.setCartItems((prev)=>{
                for(let item of props.cart)
                {
                    if(item["id"]===props.id)
                    return prev
                }
return [...prev,props.item]
            })
        }}>Add To Cart</button>
        </div>
    </div>)
}