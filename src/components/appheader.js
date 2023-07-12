import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {home} from '../imgs/index';
import { Link } from "react-router-dom";


function AppHeader(props) {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [link, setLink] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setName(props.name);
        setImg(props.img);
        setLink(props.link);
    }, [props.name, props.img, props.link]);

    return (
        <div className="app-header">
          <img id="back-button" src={home} alt='home' onClick={() => navigate('/')}/>
          <Link className="app-header-img" to={link}>
              <h1>{name}</h1>
              <img id="logo" src={img} alt={name}/>
          </Link>
        </div>
    );
}

export default AppHeader;