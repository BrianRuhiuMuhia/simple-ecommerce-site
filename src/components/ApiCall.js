const url="https://fakestoreapi.com/products"
const options={method:"GET"}
const cachedData="cachedData"
async function fetchData()
{
const result=await fetch(url,options)
const data=await result.json()
return data
}
function getData()
{
    let cached=JSON.parse(localStorage.getItem(cachedData))
    if(!Array.isArray(cached))
    {
            fetchData().then((result)=>{
                localStorage.setItem(cachedData,JSON.stringify(result))
            })
            
       let data=JSON.parse(localStorage.getItem(cachedData))
       
        return data
    }
    return cached
   
}
export default getData