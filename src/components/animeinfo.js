import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {capitalize}  from "./helperfunctions";
import { removeUnderscores } from "./helperfunctions";
import { backButton } from "../imgs";

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

    /*
                        <div id='anime-info-top'>
                        <img id='anime-button' src={backButton} onClick={() => onDismiss()}></img>
                        <div id='title-alt'>
                            <h2>{mal.data().title}</h2>
                            <p style={{fontSize: '10px'}}>Alternate titles: {`${mal.data().alternative_titles.en}, ${mal.data().alternative_titles.ja}`}</p>
                        </div>

                        <div id='misc-info'>
                            <h4>{capitalize(mal.data().start_season)}</h4>
                            <h4>{capitalize(removeUnderscores(mal.data().list_status.status))}</h4>
                            <h4>Episodes: {mal.data().num_episodes}</h4>
                        </div>
                    </div>
                    <div id='mal-image-synopsis'>
                        <div id='head-img'>
                            <img src={mal.data().main_picture.medium} alt="anime-image"></img>
                        </div>
                        <h4 id='synopsis'>{mal.data().synopsis}</h4>
                    </div>

                    <div id='review'>
                        <h3>My Review</h3>
                        {mal.data().review == undefined?<p><i>No review written for this anime as of yet</i></p>:<p>{mal.data().review}</p>}
                    </div>*/


    return (
        <div className="modalDiv">
            <div className="modal">
                <div className="anime-info">
                    <div id='button-div'>
                        <img id='anime-button' src={backButton} onClick={() => onDismiss()}></img>
                    </div>
                    <div id='title-alt'>
                            <h2>{mal.data().title}</h2>
                            <p style={{fontSize: '10px'}}>Alternate titles: {`${mal.data().alternative_titles.en}, ${mal.data().alternative_titles.ja}`}</p>
                    </div>
                    <div id='head-img'>
                        <img src={mal.data().main_picture.medium} alt="anime-image"></img>
                        <div id='misc-info'>
                            <h4>Air Season: {capitalize(mal.data().start_season)}</h4>
                            <h4>Watch Status: {capitalize(removeUnderscores(mal.data().list_status.status))}</h4>
                            <h4>Total Episodes: {mal.data().num_episodes}</h4>
                        </div>
                    </div>
                    <div id='mal-score-anime'>
                        <p><b>
                            MAL Score:  {mal.data().malscore?mal.data().malscore:'No Score'}
                        </b></p>
                    </div>
                    <div id='my-score-anime'>
                        <p><b>My Score: {mal.data().list_status.score == 0?'Unscored':mal.data().list_status.score}</b></p>
                    </div>
                    <h4 id='synopsis'>{mal.data().synopsis}</h4>
                    <div id='review'>
                        <h3>My Review</h3>
                        {mal.data().review == undefined?<p><i>No review written for this anime as of yet</i></p>:<p>{mal.data().review}</p>}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AnimeInfo;