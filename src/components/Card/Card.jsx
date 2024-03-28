import { useState } from "react"
import "./Card.css"

export default function Card(props) {

    const [clicked, setClicked] = useState('')

    function handleClick(e) {
        console.log(e.target)
        //returns the element the function was fired on
        setClicked('clicked')
    }

    return(
        //Updates state to clicked and logs to console
        <div className={`Card ${props.isSelected}`} 
        onClick={() =>{
            props.handleSelected(props.id);
        }}>
            <h1>{props.name}</h1>
            <h3>Attack: {props.attack}</h3>
            <h3>Health: {props.health}</h3>
        </div>
    )
}