//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons"; 
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


function Timer(props){
	return (
        <div>
            <div className="counter">
                <div className="clock"><FontAwesomeIcon icon= {faClock} /></div>
                <div className="six">{props.digitSix % 10}</div>
                <div className="five">{props.digitFive % 10}</div>
                <div className="four">{props.digitFour % 10}</div>
                <div className="three">{props.digitThree % 10}</div>
                <div className="two">{props.digitTwo % 10}</div>
                <div className="one">{props.digitOne % 10}</div>
            </div>
            <button className="btn" onClick={onClickReset}>
                Reset
            </button>
            <button className="btn" onClick={onClickPause}>
                Pause
            </button>
            <button className="btn" onClick={onClickResume}>
                Resume
            </button>
        </div>
	);
}

Timer.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
}

const onClickReset = () => {
    counter = 0;
}

const onClickPause = () =>{
    aux = counter
    clearInterval(interval)
    counter = 0;
}

const onClickResume = () =>{
    counter = aux;
    interval
}

let counter = 0;
let aux = 0;
const interval = setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;

    ReactDOM.render(<Timer digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>
    , document.querySelector("#app"));
},1000);

//render your react application

