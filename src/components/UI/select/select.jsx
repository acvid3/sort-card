import React, {useState} from 'react';
import {_class, __class} from './select.module.css';

const Select = ({options, onChange}) => {
    const [value, setValue] = useState('');

    return (
        <div className={_class}>
            <div className={__class}>{value ? value : 'Default'}</div>

            {options.map(option => {
                return <div key={option.value} className={__class} onClick={() => {
                    setValue(option.value);
                    onChange(option.value);
                }}>{option.name}</div>
            })}
        </div>
    )
}

export default Select;
