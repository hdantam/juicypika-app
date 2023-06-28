import '../../App.css';
import AppHeader from '../../components/appheader';
import {mal} from '../../imgs/index';
import { useEffect, useState } from 'react';
import MalCard from '../../components/malcard';

function AllAnime() {
    const [maldat, setmaldat] = useState([]);

    useEffect(() => {
        fetchAllAnime();
    }, []);


    async function fetchAllAnime() {
        try {
            let ret =  fetch('http://localhost:3007/animelist/all')
            .then(resp => resp.json())
            .then(resp => {
                setmaldat(resp.data);
            });
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div>
            <div id='box'>
                <div id='currently-watching'>
                    <h3>All</h3>
                </div>
            </div>
            <div id="malbody">
                {
                    maldat.map((obj) => {
                        return <MalCard key={obj.node.id} id={obj.node.id} title={obj.node.title} img={obj.node.main_picture.medium} status={obj.list_status.status} score={obj.list_status.score} show='all'/>
                    })
                }
            </div>
        </div>
    );
}

export default AllAnime;
