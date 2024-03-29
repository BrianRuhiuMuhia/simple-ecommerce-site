
import ImageSlider from "./ImageSlider"
import "./styles/spinner.css"
import "./styles/main.css"
export default function Main(props)
{

    return (<main className="main">
        <div className="img-slider">
        <ImageSlider data={props.data}/>
        </div>
        {props.cards.length>0 ?<div className="cards">           
{props.cards}
</div>:<h1>No Item</h1> }
  
    </main>)
}