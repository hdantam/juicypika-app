import { useState, useEffect } from "react";



function Header(props) {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
        setName(props.name);
        setImg(props.img);
    }, [props.name, props.img]);

    return (
        <div className="header">
          <div className="header-img">
            <h1>{name}</h1>
            <img id="logo" src={img} alt="juicypika"/>
          </div>
        </div>
    );
}

export default Header;