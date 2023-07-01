import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {capitalize}  from "./helperfunctions";

function AnimeInfo() {
    const navigate = useNavigate();
    const mal = useLoaderData();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, [])


    function onDismiss() {
        document.body.style.overflow = 'scroll';
        navigate('/mal/search');
    }


    return (
        <div className="modalDiv">
            <div className="modal">
                <button onClick={() => onDismiss()}>Close</button>
                <div className="anime-info">
                    <div id='anime-info-top'>
                        <div id='title-alt'>
                            <h2>{mal.data().title}</h2>
                            <p style={{fontSize: '10px'}}>Alternate titles: {`${mal.data().alternative_titles.en}, ${mal.data().alternative_titles.ja}`}</p>
                        </div>
                        <div id='mal-mean-score'>
                            <h3>MAL Score</h3>
                            <h3>{mal.data().malscore}</h3>
                        </div>
                        <div id='my-score'>
                            <h3>My Score</h3>
                            <h3>{mal.data().list_status.score}</h3>
                        </div>
                        <div id='misc-info'>
                            <h4>{capitalize(mal.data().start_season)}</h4>
                            <h4>Status: {capitalize(mal.data().list_status.status.replace("_", " "))}</h4>
                            <h4>Episodes: {mal.data().num_episodes}</h4>
                        </div>
                    </div>
                    <div id='mal-image-synopsis'>
                        <img id='head-img' src={mal.data().main_picture.medium} alt="anime-image"></img>
                        <h4 id='synopsis'>{mal.data().synopsis}</h4>
                    </div>


                </div>
            </div>
        </div>

    );
}

export default AnimeInfo;