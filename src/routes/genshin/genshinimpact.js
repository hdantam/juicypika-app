import './genshin.css'
import AppHeader from '../../components/appheader';
import {genshin} from '../../imgs/index'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';

function GenshinImpact() {
  useEffect(() => {
  }, [])


  return (
    <div className="juicypika">
        <AppHeader name='Genshin Impact' img={genshin}/>
        <div style={{marginBottom: '30px'}} className='genshin-body'>
            <h3>My Account Information</h3>

        </div>
        <div className='genshin-body'>
            <h3>Other Tools</h3>
            <p style={{textAlign: 'center'}}><i>Coming soon (COPIUM)</i></p>
        </div>
    </div>
  );
}

export default GenshinImpact;
