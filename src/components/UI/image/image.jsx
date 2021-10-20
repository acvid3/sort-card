import React from 'react';
import {_class} from './image.module.css';

const Image = (props) => {
    console.log(props)
    return <img src={props.src} alt='Image' className={_class}></img>
    
}

export default Image;
