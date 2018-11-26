import React from 'react';
import ReactDOM from 'react-dom';


export function randomInteger (min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

export class Color extends React.Component {

    render(){
        let color = this.props.match.params.color;
         if(color === "random") {
            let r = randomInteger(0,255);
            let g = randomInteger(0,255);
            let b = randomInteger(0,255);
            let a = Math.random();
            color = `rgba(${r},${g},${b},${a})`;
            encodeURIComponent(color);
        }
         return(
            <div style={{background:decodeURIComponent(color),width:"100vw",height:"100vh"}}></div>
        )
    }
}

export class Text extends React.Component{
    render(){
        let text = this.props.match.params.text;
        return(
            <div>
            <h1 style={{textAlign:"center", lineHeight: "90vh", verticalAlign: "middle"}}>{text}</h1>
            </div>
        )
    }
    
}