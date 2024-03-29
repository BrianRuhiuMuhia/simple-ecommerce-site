import "./styles/item-page.css"
export default function Item(props)
{
    const data=JSON.parse(localStorage.getItem("data"))
    const urlPath = window.location.pathname;
    const id = urlPath.split('/').pop();
const pageItem=data.find((item)=>{
    return parseInt(item['id'])===parseInt(id)
})
    return (
        <div className="item">
 <div className="item-page">
            <div>
            <img  className="page-image" src={pageItem['image']}></img>
            </div>
            <div className="page-content">
                <span className="title">Title:{pageItem['title']}</span>
                <span className="category">Category:{pageItem['category']}</span>
                <span>Description:{pageItem["description"]}</span>
                <span>Price:{pageItem['price']}</span>
                <button className="item-btn" onClick={()=>{
                    const localData=JSON.parse(localStorage.getItem("cart"))
                for(let item of localData)
                {
if(item['id']===pageItem['id'])
{
    return
}
                }

const newLocalData=[...localData,pageItem]
localStorage.setItem("cart",JSON.stringify(newLocalData))
                }}>Add To Cart</button>
            </div>
        </div>
       
    
            
        </div>
    )
}