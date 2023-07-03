import { useEffect, useState } from 'react';
import '../../App.css';
import MalCard from '../../components/malcard';
import { useOutletContext } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { orderBy, query, getDoc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';



//#3054a4
function AllAnime() {
    const mal = useLoaderData();
    const [maldat, setMalDat] = useState([]);
    const cardMode = useOutletContext()[0];
    const input = useOutletContext()[1];
    const status = useOutletContext()[2];
    const scoreSort = useOutletContext()[3];
    const [sort, setSort] = useState(scoreSort);

    useEffect(() => {
        document.body.style.overflow = 'scroll';
    })

    useEffect(() => {
        setMalDat(mal.data().data);
        /*
        async function getmaldat() {
            await getDoc(doc(db, 'MyAnimeListTest', '1')).then(snap => {
                setMalDat(snap.data().data)
            })
        }
        getmaldat();*/
    }, [])

    useEffect(() => {
    }, [input, status])

    useEffect(() => {
        setSort(scoreSort);
        sortData();
    }, [scoreSort])

    async function sortData() {
        if (scoreSort == 'highlow') {
            /*
            const q = query(doc(db, 'MyAnimeList', '1'), orderBy('list_status.score', 'desc'))
            const querySnapshot = await getDoc(q);
            setMalDat(querySnapshot.data());

            */
            setMalDat(maldat.sort((a, b) => {
                return b.list_status.score - a.list_status.score;
            }))
        }
        else if (scoreSort == 'lowhigh') {
            /*
            const q = query(doc(db, 'MyAnimeList', '1'), orderBy('list_status.score', 'asc'))
            const querySnapshot = await getDoc(q);
            setMalDat(querySnapshot.data());
*/
            setMalDat(maldat.sort((a, b) => {
                return a.list_status.score - b.list_status.score;
            }))
        }
    }


    return (
        <div id = 'total-mal'>
            <div id='malbody' className={cardMode?"malbody":"nocard"}>
                {
                    maldat.map((obj) => {
                        if (input != '' && obj.title.toLowerCase().includes(input.toLowerCase()) && ((status!='All')?obj.list_status.status==status:true)) {
                            return <Link to={`/mal/search/${obj.id}`}><MalCard key={obj.id} id={obj.id} title={obj.title} img={obj.main_picture.medium} status={obj.list_status.status} score={obj.list_status.score} /></Link>
                        } 
                        else if (input == '' && ((status!='All')?obj.list_status.status==status:true)) {
                            return <Link to={`/mal/search/${obj.id}`}><MalCard key={obj.id} id={obj.id} title={obj.title} img={obj.main_picture.medium} status={obj.list_status.status} score={obj.list_status.score}/></Link>
                        }
                    })
                }
            </div>
            <Outlet/>
        </div>
    );
}

export default AllAnime;
