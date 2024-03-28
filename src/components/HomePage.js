import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Card from "./Card"
import {useState,useEffect} from "react"
import "./styles/homepage.css"
export default function HomePage()
{
const url="https://fakestoreapi.com/products/"
const options={method:"GET"}
async function fetchData()
{
const result=await fetch(url,options)
const data=await result.json()
return data
}

    const [cart,setCartItems]=useState([])
    let cards=[]
    const [data,setData]=useState([])
    const [search,setSearch]=useState("")
useEffect(()=>{
        fetchData().then((result)=>{
            setData(result)
        })
},[])
if(Array.isArray(data))
{
  cards=data.filter((item)=>{
return item["title"].toLowerCase().includes(search.toLowerCase())
  }).map((item)=>{
    return <Card key={item["id"]} id={item['id']} item={item} cart={cart} setCartItems={setCartItems}/>})
}
else{
    return (
    <div className="page-loader">
      <div className="spinner"></div></div>
    )
}
let cartData=JSON.parse(localStorage.getItem("cart"))
if(cartData!=null)
{
   if(cartData.length>0 && cart.length<=0)
{
    setCartItems(cartData)
} 
}
    return(
        <div className="home-page">
            <Navbar cart={cart} setCartItems={setCartItems} setData={setData} data={data} setSearch={setSearch}/>
            <Main cards={cards} data={data} search={search} />
        </div>
    )
}