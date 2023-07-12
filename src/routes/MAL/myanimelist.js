import '../../App.css';
import AppHeader from '../../components/appheader';
import {mal} from '../../imgs/index';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MyAnimeList() {    //#3054a4 = mal color
    const [cardMode, setCardMode] = useState(false);
    const [input, setInput] = useState('');
    const [status, setStatus] = useState('');
    const [scoreSort, setScoreSort] = useState('');

    useEffect(() => {
        setCardMode(true);
        setInput('');
        setStatus('All');
        setScoreSort('None');
    }, [])


    useEffect(() => {
        function changeCardStyle() {
            let malb = document.getElementById('malbody');
            let button = document.getElementById('row-col');
            if (cardMode === false && malb != null) {
                malb.className = 'nocard';
                button.className = 'row-mode';
            }
            else if (cardMode === true && malb != null) {
                malb.className = 'malbody';
                button.className = 'col-mode';
            }
        }
        changeCardStyle();
    }, [cardMode])

    function toggleCardMode() {
        setCardMode(!cardMode);
    }


    return (
        <div id="juicypika">
            <AppHeader name='MyAnimeList' img={mal} link={'/mal/search'}/>
            <div className='body'>
                <div id="mal-search-header">
                    <div className='mal-toggle'>
                        <button id='row-col' className='row-mode' onClick={() => {
                                toggleCardMode();
                                }}></button>
                    </div>
                    <div className='mal-header'>
                        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search for anime I may have watched'></input>
                    </div>
                    <div className='filters'>
                        <select defaultValue={'DEFAULT'} id='filter-by' onChange={(e) => setStatus(e.target.value)}>
                            <option value="DEFAULT" disabled hidden>Status</option>
                            <option value="watching">Watching</option>
                            <option value="plan_to_watch">Plan to Watch</option>
                            <option value="completed">Completed</option>
                            <option value="dropped">Dropped</option>
                            <option value="All">All</option>
                        </select>
                        <select defaultValue={'DEFAULT'} id='sort-score' onChange={(e) => setScoreSort(e.target.value)}>
                            <option value="DEFAULT" disabled hidden>Score</option>
                            <option value="highlow">Descending</option>
                            <option value="lowhigh">Ascending</option>
                        </select>
                    </div>
                </div>
                <Outlet context={[cardMode, input, status, scoreSort]}/>
            </div>
        </div>
    );
}

export default MyAnimeList;
