import './App.css';
import {juicypika, mal, lol, genshin, art, youtube, twitter, discord, contactme} from './imgs/index.js';
import Icon from './components/icon.js';
import Header from'./components/header';
import { useState } from 'react';

function App() {
  const [isDark, setDark] = useState(false);




  return (
    <div className="juicypika" id="juicypika">
      <Header name="Juicypika" img={juicypika}/>
      <div className="body">
        <div className="icon-box">
        <Icon link={'/mal/search'} img={mal} name='MyAnimeList'/>
        <Icon link={'/lol'} img={lol} name='League of Legends'/>
        <Icon link={'/genshin'} img={genshin} name='Genshin Impact'/>
        <Icon link={'/art'} img={art} name='Art'/>
        <Icon link={'/twitter'} img={twitter} name='Twitter'/>
        <Icon link={'/youtube'} img={youtube} name='Youtube'/>
        <Icon link={'/discord'} img={discord} name='Discord'/>
        <Icon link={'contact-me'} img={contactme} name='Contact Me'/>
        </div>
      </div>
    </div>
  );
}

export default App;
