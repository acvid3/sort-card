import React from 'react';
import {_class, _class_p, _class_s} from './card.module.css';
import Image from '../UI/image/image';

const Card = ({id, title, src}) => {
    return (
        <div className={_class}>
            <Image src={src}/>
            <p className={_class_p}>{'id: ' + id}</p>
            <span className={_class_s}>{title}</span>
        </div>
    )
}

export default Card;
