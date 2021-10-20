import React from 'react';
import {_class} from './card.module.css';
import Image from '../UI/image/image';

const Card = ({id, title, src}) => {
    return (
        <div className={_class}>
            <Image src={src}/>
            <p>{id}</p>
            <span>{title}</span>
        </div>
    )
}

export default Card;
