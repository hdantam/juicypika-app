
import { useState, useEffect } from "react";
import '../App.css';
import {Link} from 'react-router-dom';

export default function Icon(props) {
    const [img, setImg] = useState(null);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        setImg(props.img);
        setName(props.name);
        setLink(props.link);
    }, [props.img, props.name, props.link])

    return(
        <div className="icon-container">
            <Link to={link}><img src={img} alt={name} title={name}></img></Link>
        </div>
    );
}