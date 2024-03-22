import "./styles/cart.css"
import CartItem from "./CartItem"
import {useState,useEffect} from 'react'
export default function Cart(props)
{
    const [total,setTotal]=useState(0)
    let price=0
    const items=props.cart.map((item)=>{
        price+=Number(item['price'])
        return <CartItem key={item["id"]}  id={item['id']}
        image={item["image"]} title={item['title']} price={item['price']} setCartItems={props.setCartItems}/>
    })
    useEffect(()=>{
        setTotal(price)
    },[price])
return (<div className="cart">
<h1 className="cart-heading">Your Cart</h1>
<div>
    {items}
</div>
Total:{items.length>0? total:0}
</div>)
}