import React from 'react';
import {_class} from './image.module.css';

const Image = (props) => {
    return <img src={props.src} alt='' className={_class}></img>
}

export default Image;
