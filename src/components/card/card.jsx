import React, {useContext} from 'react';
import {_class, _class_button} from './card.module.css';
import Image from '../UI/image/image';
import Button from '../UI/button/button';
import { Context } from '../../context';

const Card = ({id, title, src}) => {
    const {msg} = useContext(Context);
    return (
        <div className={_class}>
            <Image src={src}/>
            <p>{'id: ' + id}</p>
            <div className={_class_button}>
                <Button onClick={() => msg(title)}>show</Button>
            </div>
        </div>
    )
}

export default Card;
