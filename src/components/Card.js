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
            }
            )
            const localData=JSON.parse(localStorage.getItem("cart"))
            if(Array.isArray(localData) && localData.length>0)
            {
                let isPresent=false
                for(let item of localData)
                {
                    if(item["id"]===props.id)
                    isPresent=true
                }
                if(!isPresent)
                {
                  const newLocalData=[...localData,props.item]
                localStorage.setItem("cart",JSON.stringify(newLocalData))  
                }
                
            }
            else{
                localStorage.setItem("cart",JSON.stringify([props.item]))
            }
        }}>Add To Cart</button>
        </div>
    </div>)
}