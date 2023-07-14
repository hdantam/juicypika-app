import './genshin.css'
import AppHeader from '../../components/appheader';
import {genshin} from '../../imgs/index'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeUnderscores, capitalize } from '../../components/helperfunctions';
import {wanderer, fischl, ayaka} from '../../imgs/index'

function GenshinHome() {

  return (
    <div className="juicypika">
        <AppHeader name='Genshin Impact' link='/genshin' img={genshin}/>
        <div className='genshin-body'>
            <h2 style={{textAlign: 'center'}}>My Accounts</h2>
            <div className='directory'>
                <Link to={'/genshin/NA'} className='directory-item'>
                    <h2 className='region'>NA (main)</h2>
                    <img className='wanderer' src={wanderer}></img>
                </Link>
                <Link to={'/genshin/ASIA'} className='directory-item'>
                    <h2 className='region'>Asia</h2>
                    <img className='ayaka' src={ayaka}></img>
                </Link>
                <Link to={'/genshin/EU'} className='directory-item'>
                    <h2 className='region'>EU</h2>
                    <img className='fischl' src={fischl}></img>
                </Link>
            </div>
        </div>
        <div className='genshin-body'>
            <h2 style={{textAlign: 'center'}}>Other Tools</h2>
            <p style={{textAlign: 'center'}}><i>Coming soon (COPIUM)</i></p>
        </div>
    </div>
  );
}

export default GenshinHome;
