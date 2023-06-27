import '../App.css';
import AppHeader from '../components/appheader';
import {mal} from '../imgs/index';
import { useEffect, useState } from 'react';
import MalCard from '../components/malcard';

function MyAnimeList() {
    const [maldat, setmaldat] = useState([]);

    useEffect(() => {
        try {
            let ret =  fetch('http://localhost:3007/animelist')
            .then(resp => resp.json())
            .then(resp => {
                //console.log(resp.data);
                setmaldat(resp.data);
            });
        } catch (e) {
            console.log(e);
        }
    }, []);


    return (
        <div id="juicypika">
            <AppHeader name='MyAnimeList' img={mal}/>
            <div className='body'>
                <div id='currently-watching'>
                    <h2>What I'm Currently Watching</h2>
                </div>
                <div id="malbody">
                    {
                        maldat.map((obj) => {
                            return <MalCard key={obj.node.id} id={obj.node.id} title={obj.node.title} img={obj.node.main_picture.medium}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default MyAnimeList;
