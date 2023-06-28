import '../../App.css';
import AppHeader from '../../components/appheader';
import {mal} from '../../imgs/index';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MyAnimeList() {


    return (
        <div id="juicypika">
            <AppHeader name='MyAnimeList' img={mal}/>
            <div className='body'>
                <Link to={'/mal/watching'}><button>Watching</button></Link>
                <Link to={'/mal/all'}><button>All</button></Link>               
                <Outlet/>
            </div>
        </div>
    );
}

export default MyAnimeList;
