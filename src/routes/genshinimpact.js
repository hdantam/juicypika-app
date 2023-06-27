import '../App.css';
import AppHeader from '../components/appheader';
import {genshin} from '../imgs/index'

function GenshinImpact() {
  return (
    <div className="juicypika">
        <AppHeader name='Genshin Impact' img={genshin}/>
        <div className='body'>
            <p>Genshin Impact</p>
        </div>
    </div>
  );
}

export default GenshinImpact;
