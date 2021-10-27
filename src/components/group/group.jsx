import React from 'react';
import {_class} from './group.module.css';

const Group = ({children}) => {
    return (
        <div className={_class}>
            {children}
        </div>
    )
}

export default Group;
