import { useEffect, useState } from 'react';
import '../../App.css';
import MalCard from '../../components/malcard';
import { useOutletContext } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';



//#3054a4
function AllAnime() {
    const mal = useLoaderData();
    const [maldat, setMalDat] = useState(mal.docs);
    const cardMode = useOutletContext()[0];
    const input = useOutletContext()[1];
    const status = useOutletContext()[2];
    const scoreSort = useOutletContext()[3];
    const [sort, setSort] = useState(scoreSort);

    useEffect(() => {
        document.body.style.overflow = 'scroll';
    })

    useEffect(() => {
    }, [input, status, maldat])

    useEffect(() => {
        setSort(scoreSort);
        sortData();
    }, [scoreSort])

    async function sortData() {
        if (scoreSort == 'highlow') {
            /*
            const q = query(collection(db, 'MyAnimeList'), orderBy('list_status.score', 'desc'))
            const querySnapshot = await getDocs(q);
            setMalDat(querySnapshot.docs);*/
            setMalDat(maldat.sort((a, b) => {
                return b.data().list_status.score - a.data().list_status.score;
            }))
        }
        else if (scoreSort == 'lowhigh') {
            /*
            const q = query(collection(db, 'MyAnimeList'), orderBy('list_status.score', 'asc'))
            const querySnapshot = await getDocs(q);
            setMalDat(querySnapshot.docs);*/

            setMalDat(maldat.sort((a, b) => {
                return a.data().list_status.score - b.data().list_status.score;
            }))
        }
    }


    return (
        <div id = 'total-mal'>
            <div id='malbody' className={cardMode?"malbody":"nocard"}>
                {
                    maldat.map((obj) => {
                        if (input != '' && obj.data().title.toLowerCase().includes(input.toLowerCase()) && ((status!='All')?obj.data().list_status.status==status:true)) {
                            return <Link to={`/mal/search/${obj.id}`}><MalCard key={obj.id} id={obj.id} title={obj.data().title} img={obj.data().main_picture.medium} status={obj.data().list_status.status} score={obj.data().list_status.score} /></Link>
                        } 
                        else if (input == '' && ((status!='All')?obj.data().list_status.status==status:true)) {
                            return <Link to={`/mal/search/${obj.id}`}><MalCard key={obj.id} id={obj.id} title={obj.data().title} img={obj.data().main_picture.medium} status={obj.data().list_status.status} score={obj.data().list_status.score}/></Link>
                        }
                    })
                }
            </div>
            <Outlet/>
        </div>
    );
}

export default AllAnime;
