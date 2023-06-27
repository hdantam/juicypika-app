import '../App.css';
import AppHeader from '../components/appheader';
import {lol} from '../imgs/index'

function LeagueOfLegends() {
  return (
    <div className="juicypika">
        <AppHeader name='League of Legends' img={lol}/>
        <div className='body'>
            <p>League of Legends</p>
        </div>
    </div>
  );
}

export default LeagueOfLegends;
