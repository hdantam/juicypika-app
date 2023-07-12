import './genshin.css'
import AppHeader from '../../components/appheader';
import {genshin} from '../../imgs/index'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeUnderscores, capitalize } from '../../components/helperfunctions';

function GenshinImpact() {
  const [user, setUser] = useState(undefined);
  const load = useLoaderData();

  useEffect(() => {
    console.log(load);
    setUser(load);
  }, [])


  function getUID(user) {
    if (user?.resp.role.region === 'os_usa') {
      return 614778576;
    }
    else if (user?.resp.role.region === 'os_euro') {
      return 713320003;
    }
    else if (user?.resp.role.region === 'os_asia') {
      return 816431728;
    }
  }


  return (
    <div className="juicypika">
        <AppHeader name='Genshin Impact' link='/genshin' img={genshin}/>
        <div className='genshin-body'>
          <h3 style={{textAlign: 'center'}}>{user?.resp.role.nickname} | {getUID(user)} | AR {user?.resp.role.level}</h3>
          <div className='user-info'>
            {user && Object.keys(user.resp.stats).map((stat, i) => {
              if (stat != 'domain_number' && stat != 'way_point_number' && stat != 'avatar_number') {
                return(
                  <div className='stat-item'>
                    <p>{capitalize(removeUnderscores(stat.replace('number', '')))}</p>
                    <p>{user.resp.stats[stat]}</p>
                  </div>
                );
              }
            }
            )}
          </div>
        </div>
        <div className='genshin-body'>

            <h3 className='char-header'>Characters Owned:</h3>
            <div className='characters'>
              {user?.resp.avatars.map((char) => {
                                    //<Link to={`/genshin/${char.id}`}></Link>
                  return (<>

                      <div className='char-card'>
                        <img className='char-img' src={char.image}/>
                        <p className='char-desc'>{char.name}</p>
                        <p className='char-desc'>Lv. {char.level}</p>
                      </div>
                  </>)
              })}
            </div>
        </div>
    </div>
  );
}

export default GenshinImpact;
