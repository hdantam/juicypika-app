import './genshin.css'
import AppHeader from '../../components/appheader';
import {genshin} from '../../imgs/index'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeUnderscores, capitalize } from '../../components/helperfunctions';
import { achievement } from '../../imgs/index';

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
          <h2 style={{textAlign: 'center'}}>{user?.resp.role.nickname} | {getUID(user)} | AR {user?.resp.role.level}</h2>
          <div className='account-blurb'>
          </div>
          <div className='user-info'>
            {user && 
              <div className='stat-item'>
                <p>Days Active</p>
                <p className='stat-number'>{user.resp.stats.active_day_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Achievement</p>
                <p className='stat-number'>{user.resp.stats.achievement_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Characters</p>
                <p className='stat-number'>{user.resp.stats.avatar_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Spiral Abyss</p>
                <p className='stat-number'>{user.resp.stats.spiral_abyss}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Anemoculus</p>
                <p className='stat-number'>{user.resp.stats.anemoculus_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Geoculus</p>
                <p className='stat-number'>{user.resp.stats.geoculus_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Electroculus</p>
                <p className='stat-number'>{user.resp.stats.electroculus_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Dendroculus</p>
                <p className='stat-number'>{user.resp.stats.dendroculus_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Common Chests</p>
                <p className='stat-number'>{user.resp.stats.common_chest_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Exquisite Chests</p>
                <p className='stat-number'>{user.resp.stats.exquisite_chest_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Precious Chests</p>
                <p className='stat-number'>{user.resp.stats.precious_chest_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Luxurious Chests</p>
                <p className='stat-number'>{user.resp.stats.luxurious_chest_number}</p>
              </div>
            }
            {user && 
              <div className='stat-item'>
                <p>Remarkable Chests</p>
                <p className='stat-number'>{user.resp.stats.magic_chest_number}</p>
              </div>
            }
          </div>
        </div>
        <div className='genshin-body'>

            <h2 className='char-header'>Characters Owned</h2>
            <div className='characters'>
              {user?.resp.avatars.map((char) => {
                                    //<Link to={`/genshin/${char.id}`}></Link>
                  let color = 'rgb(255, 240, 230)'
                  
                  if (char.rarity == 4) {
                      color = 'rgb(250, 230, 255)';
                  }
                  return (<>
                      <div className='char-card'>
                        <img className='char-img' src={char.image} style={{backgroundColor: `${color}`}}/>
                        <p className='char-cons'>C{char.actived_constellation_num}</p>
                        <p className='char-name'>{char.name}</p>
                        <p className='char-level'>Lv. {char.level}</p>
                      </div>
                  </>)
              })}
            </div>
        </div>
    </div>
  );
}

export default GenshinImpact;
