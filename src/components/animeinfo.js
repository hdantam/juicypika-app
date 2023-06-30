import React, { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function AnimeInfo() {
    const navigate = useNavigate();
    const location = useLocation();

    const mal = useLoaderData();

    const id  = location.state.object.node.id;
    const title = location.state.object.node.title;
    const img = location.state.object.node.main_picture.large;
    const status = location.state.object.list_status.status;
    const score = location.state.object.list_status.score;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, [])


    function onDismiss() {
        document.body.style.overflow = 'scroll';
        navigate(-1);
    }

    return (
        <div className="modalDiv">
            <div className="modal">
                <button onClick={() => onDismiss()}>Close</button>
                <div className="anime-info">
                    <div id='anime-info-top'>
                        <div id='title-alt'>
                            <h2>{title}</h2>
                            <p style={{fontSize: '10px'}}>Alternate titles: {`${mal.alternative_titles.en}, ${mal.alternative_titles.ja}`}</p>
                        </div>
                        <div id='mal-mean-score'>
                            <h3>MAL Score</h3>
                            <h3>{mal.mean}</h3>
                        </div>
                        <div id='my-score'>
                            <h3>My Score</h3>
                            <h3>{score}</h3>
                        </div>
                    </div>
                    <div id='mal-image-synopsis'>
                        <img id='head-img' src={img} alt="anime-image"></img>
                        <h4 id='synopsis'>{mal.synopsis}</h4>
                    </div>


                </div>
            </div>
        </div>

    );
}
export default AnimeInfo;