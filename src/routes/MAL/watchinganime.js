import '../../App.css';
import { useEffect, useState } from 'react';
import MalCard from '../../components/malcard';

function WatchingAnime() {
    const [maldat, setmaldat] = useState([]);

    useEffect(() => {
        fetchCurrentlyWatching();
    }, []);



    async function fetchCurrentlyWatching() {
        try {
            let ret =  fetch('http://localhost:3007/animelist')
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
                        <h3>Watching</h3>
                    </div>
                </div>
                <div id="malbody">
                    {
                        maldat.map((obj) => {
                            return <MalCard key={obj.node.id} id={obj.node.id} title={obj.node.title} img={obj.node.main_picture.medium} status={obj.list_status.status} score={obj.list_status.score} show={'watching'}/>
                        })
                    }
                </div>
            </div>
    );
}

export default WatchingAnime;
