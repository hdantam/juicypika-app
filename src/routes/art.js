import '../App.css';
import AppHeader from '../components/appheader';
import {art} from '../imgs/index'

function Art() {
  return (
    <div className="juicypika">
        <AppHeader name='Art' img={art}/>
        <div className='body'>
            <p>Art stuff</p>
        </div>
    </div>
  );
}

export default Art;
