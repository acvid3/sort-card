import React from 'react';
import {_class, __class} from './select.module.css';

const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            className={_class}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option value=''>
                {defaultValue}
            </option>

            {options.map(option => {
                return <option 
                    className={__class}
                    value={option.value} 
                    key={option.value}
                >
                    {option.name}
                </option>
            })}
        </select>
    )
}

export default Select;
