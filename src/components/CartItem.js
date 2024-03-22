import "./styles/cart-item.css"

export default function CartItem(props)
{
    return (
        <div className="cart-item">
<img src={props.image} className='cart-item-img'></img>
<div className="cart-item-content" >
    <span>{props.title}</span>
    <span>price:{props.price}</span>
</div>
<button className="remove-btn" onClick={()=>{
    props.setCartItems((prev)=>{
return prev.filter((item)=>{
    return item['id']!==props.id
})
    })
}}>Remove</button>
        </div>
    )
}