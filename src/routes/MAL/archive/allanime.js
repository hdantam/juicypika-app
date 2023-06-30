import { useEffect, useState } from 'react';
import '../../App.css';
import MalCard from '../../components/malcard';
import { useOutletContext } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';


//#3054a4
function AllAnime() {
    const mal = useLoaderData();
    const maldat = mal.data;
    const cardMode = useOutletContext()[0];
    const input = useOutletContext()[1];
    const status = useOutletContext()[2];
    const scoreSort = useOutletContext()[3];
    const [sort, setSort] = useState(scoreSort)

    useEffect(() => {
    }, [input, status])

    useEffect(() => {
        setSort(scoreSort);
        sortData();
    }, [scoreSort])

    function sortData() {
        if (scoreSort == 'highlow') {
            maldat.sort((a, b) => {
                return b.list_status.score - a.list_status.score;
            })
        }
        else if (scoreSort == 'lowhigh') {
            maldat.sort((a, b) => {
                return a.list_status.score - b.list_status.score;
            }) 
        }
    }


    return (
        <div>
            <div id='malbody' className={cardMode?"malbody":"nocard"}>
                {
                    maldat.map((obj) => {
                        if (input != '' && obj.node.title.toLowerCase().includes(input.toLowerCase()) && ((status!='All')?obj.list_status.status==status:true)) {
                            return <MalCard key={obj.node.id} id={obj.node.id} title={obj.node.title} img={obj.node.main_picture.medium} status={obj.list_status.status} score={obj.list_status.score} />
                        } 
                        else if (input == '' && ((status!='All')?obj.list_status.status==status:true)) {
                            return <MalCard key={obj.node.id} id={obj.node.id} title={obj.node.title} img={obj.node.main_picture.medium} status={obj.list_status.status} score={obj.list_status.score}/>
                        }
                    })
                }
            </div>
        </div>
    );
}

export default AllAnime;
