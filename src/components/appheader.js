import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {home} from '../imgs/index';


function AppHeader(props) {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setName(props.name);
        setImg(props.img);
    }, [props.name, props.img]);

    return (
        <div className="app-header">
          <img id="back-button" src={home} alt='home' onClick={() => navigate('/')}/>
          <div className="app-header-img">
            <h1>{name}</h1>
            <img id="logo" src={img} alt={name}/>
          </div>
        </div>
    );
}

export default AppHeader;