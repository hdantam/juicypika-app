import './genshin.css'
import AppHeader from '../../components/appheader';
import {genshin} from '../../imgs/index'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeUnderscores, capitalize } from '../../components/helperfunctions';

function GenshinChar() {
  const [char, setChar] = useState(undefined);
  const load = useLoaderData();

  useEffect(() => {
    console.log(load);
    setChar(load);
  }, [])


  return (
    <div className="juicypika">
        <AppHeader name='Genshin Impact' img={genshin}/>
        <div className='genshin-body'>
            {console.log(char)}
        </div>
    </div>
  );
}

export default GenshinChar;
