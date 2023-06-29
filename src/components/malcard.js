import React, { useContext, useEffect } from "react";
import '../App.css';
import { useOutletContext } from "react-router-dom";


function MalCard(props) {
    const title = props.title;
    const img = props.img;
    const id = props.id;
    const score = props.score;
    const status = props.status;


    const [cardMode, setCardMode] = useOutletContext();

    useEffect(() => {
        //console.log(`cardMode in malcard is:${cardMode}`);
    }, [cardMode])



    return(
        <div id="mal-card" className={cardMode?'mal-card':'no-card'}>
            <a href={`https://myanimelist.net/anime/${id}`}><img id='mal-img' src={img} alt={title}></img></a>
            <div id='mal-title-small' className={cardMode?'mal-title-small':'mal-title-small-nocard'}>
                <p><b>{title}</b></p>
            </div>
            {score !== 0 && <p id='mal-score'>Score: {score}</p>}
            {score === 0 && <p id='mal-score'>Unscored</p>}
            <p id='mal-status'>{status}</p>
        </div>
    );
}

export default MalCard;