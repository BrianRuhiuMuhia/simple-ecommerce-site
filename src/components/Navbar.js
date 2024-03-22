import { IoPersonCircle } from "react-icons/io5"
import { IoHelpCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa"
import Modal from "./Modal";
import Cart from "./Cart";
import {useState,useRef} from "react"
import "./styles/navbar.css"
export default function Navbar(props)
{
const myRef = useRef(null);
const [isActiveAccount,setIsActiveAccount]=useState(false)
const [isActiveHelp,setIsActiveHelp]=useState(false)
const [isCartActive,setIsCartActive]=useState(false)
    return <nav className="nav-bar">
        <h2 className="nav-bar_header">FiloMart</h2>
        <div className="nav-bar_links">
        <div className="nav-bar_links-content">
        <IoPersonCircle size="30" />
        <div className="nav-bar_links-content-btns">
        <button  className="nav-bar-btns" onClick={()=>{
            setIsActiveAccount(!isActiveAccount)
        }}>Account</button>
        {(isActiveAccount && !isActiveHelp) && <Modal/>}
        </div>
        </div>
        <div className="nav-bar_links-content">
        <IoHelpCircle size="30" />
        <div className="nav-bar_links-content-btns">
        <button className="nav-bar-btns" onClick={()=>{
            setIsActiveHelp(!isActiveHelp)
        }}>Help</button>
        {(isActiveHelp && !isActiveAccount) && <Modal/>}
        
        </div>
        </div>
        <div className="nav-bar_links-content">
        <FaShoppingCart size="30" />
        <div className="nav-bar_links-content-btns">
        <button  className="nav-bar-btns"onClick={()=>{
            setIsCartActive(!isCartActive)
        }}>Cart {props.cart.length<=0 ? 0:props.cart.length}</button>
        {isCartActive && <Cart cart={props.cart} setCartItems={props.setCartItems}/>}
        </div>
         
        </div>
        </div>
       
    </nav>
}