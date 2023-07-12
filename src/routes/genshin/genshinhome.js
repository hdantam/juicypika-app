import './genshin.css'
import AppHeader from '../../components/appheader';
import {genshin} from '../../imgs/index'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeUnderscores, capitalize } from '../../components/helperfunctions';

function GenshinHome() {

  return (
    <div className="juicypika">
        <AppHeader name='Genshin Impact' link='/genshin' img={genshin}/>
        <div className='genshin-body'>
            <h3 style={{textAlign: 'center'}}>My Accounts:</h3>
            <div className='directory'>
                <Link to={'/genshin/NA'}><h3 className='directory-item'>NA</h3></Link>
                <Link to={'/genshin/EU'}><h3 className='directory-item'>EU</h3></Link>
                <Link to={'/genshin/ASIA'}><h3 className='directory-item'>Asia</h3></Link>
            </div>
        </div>
        <div className='genshin-body'>
            <h3 style={{textAlign: 'center'}}>Other Tools</h3>
            <p style={{textAlign: 'center'}}><i>Coming soon (COPIUM)</i></p>
        </div>
    </div>
  );
}

export default GenshinHome;
