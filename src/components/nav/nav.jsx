import React from 'react';
import {_class} from './nav.module.css';
import Edit from '../UI/edit/edit';

const Nav = () => {
    return (
        <div className={_class}>
            <div>Sort card</div>
            <div>
                <Edit />
            </div>
        </div>
    )
}

export default Nav;
