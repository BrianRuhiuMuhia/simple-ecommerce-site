import ImageSlider from "./ImageSlider"
import "./styles/spinner.css"
import "./styles/main.css"
export default function Main(props)
{

    return (<main className="main">
        <div className="img-slider">
        <ImageSlider data={props.data}/>
        </div>
        <div className="cards">
{props.cards}

        </div>
    </main>)
}