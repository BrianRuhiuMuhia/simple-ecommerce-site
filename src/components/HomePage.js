import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Card from "./Card"
import getData from "./ApiCall"
import {useState,useEffect} from "react"
import "./styles/homepage.css"
export default function HomePage()
{
    const [cart,setCartItems]=useState([])
    const [prevData,setPrevData]=useState([])
    let cards=[]
    const [data,setData]=useState([])
useEffect(()=>{
    if(Array.isArray(data))
    {
        setData(getData())
        setPrevData(getData())
     
    }
    

},[])
if(!Array.isArray(data))
{

return (
        <div className="page-loader">
                <div className="spinner"></div>
              </div>
            )
}
else{

  cards=data.map((item)=>{
return <Card key={item["id"]} id={item['id']} item={item} cart={cart} setCartItems={setCartItems}/>
  })

    
}
    return(
        <div className="home-page">
            <Navbar cart={cart} setCartItems={setCartItems} setData={setData} data={data} prev={prevData}/>
            <Main cards={cards} data={data} />
        </div>
    )
}