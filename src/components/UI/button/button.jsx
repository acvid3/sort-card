import React from 'react';
import {_class} from './button.module.css';

const Button = ({children, ...props}) => {
    return (
        <button className={_class} {...props}>
            {children}
        </button>
    );
}

export default Button;
