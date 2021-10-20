import React from 'react';
import {_class, _class_scrolbox} from './group.module.css';

const Group = ({children}) => {
    return (
        <div className={_class}>
           <div className={_class_scrolbox}>
                {children}
           </div>
        </div>
    )
}

export default Group;
