import React from "react";
import { useState, useEffect } from "react";
import './componentcss/malcard.css'


function MalCard(props) {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [id, setId] = useState(0);
    const [score, setScore] = useState(0);
    const [status, setStatus] = useState('');
    const [show, setShow] = useState('');
    const [cardType, setCardType] = useState('row');


    useEffect(() => {
        setTitle(props.title);
        setImg(props.img);
        setId(props.id);
        setScore(props.score);
        setStatus(props.status);
        setShow(props.show);
        setCardType(props.type);
    }, [props.title, props.img, props.id, props.score, props.status, props.show]);


    return(
        <div id="mal-card">
            <a href={`https://myanimelist.net/anime/${id}`}><img id='mal-img' src={img} alt={title}></img></a>
            <p id='mal-title-small'><b>{title}</b></p>
            {score != 0 && <p>Score: {score}</p>}
            {score == 0 && show == 'all' && <p>Unscored</p>}
            {show == 'all' && <p>Status: {status}</p>}
        </div>
    );
}

export default MalCard;