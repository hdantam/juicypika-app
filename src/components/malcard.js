import React, { useContext, useEffect } from "react";
import '../App.css';
import { useOutletContext } from "react-router-dom";
import { capitalize, removeUnderscores } from "./helperfunctions";


function MalCard(props) {
    const title = props.title;
    const img = props.img;
    const id = props.id;
    const score = props.score;
    const status = props.status;


    const [cardMode, setCardMode] = useOutletContext();

    useEffect(() => {
    }, [cardMode])

    return(
        <div id="mal-card" className={cardMode?'mal-card':'no-card'}>
            <img id='mal-img' src={img} alt={title}></img>
            <div id='mal-title-small' className={cardMode?'mal-title-small':'mal-title-small-nocard'}>
                <p><b>{title}</b></p>
            </div>
            {score !== 0 && <p id='mal-score'>Score: {score}</p>}
            {score === 0 && <p id='mal-score'>Unscored</p>}
            <p id='mal-status'>{capitalize(removeUnderscores(status))}</p>
        </div>
    );
}

export default MalCard;