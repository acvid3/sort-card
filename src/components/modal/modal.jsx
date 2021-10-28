import React, {useContext} from 'react';
import { Context } from '../../context';
import Button from '../UI/button/button';
import {_class, __class} from './modal.module.css';

const Modal = ({text}) => {
    const {msg} = useContext(Context);
    
    return (
        <div className={_class}>
            <div className={__class}>
                <p>{text}</p>
                <Button onClick={() => msg('')}>Close</Button>
            </div>
        </div>
    )
}

export default Modal;
