import SimpleImageSlider from "react-simple-image-slider";
import {useState} from 'react'
import getData from "./ApiCall";
export default function ImageSlider(props)
{
  const [images,setImages]=useState([])
  
  function getImages(array)
  {
array.forEach((item)=>{
  setImages((prev)=>{
return [...prev,item["image"]]
  })
})
  }
  if(images.length<=0 && props.data.length>0)
  {
    let array=props.data.slice(0,5)
    getImages(array)
  }
    return(<div>
    <SimpleImageSlider
      width={900}
      height={504}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  </div>)
}