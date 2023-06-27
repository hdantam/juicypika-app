import React from "react";
import { useState, useEffect } from "react";
import './componentcss/malcard.css'


function MalCard(props) {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [id, setId] = useState(0);

    useEffect(() => {
        setTitle(props.title);
        setImg(props.img);
        setId(props.id);
    }, []);


    return(
        <div id="mal-card">
            <a href={`https://myanimelist.net/anime/${id}`}><img id='mal-img' src={img} alt={title}></img></a>
            <h4 id='mal-title'>{title}</h4>
        </div>
    );
}

export default MalCard;