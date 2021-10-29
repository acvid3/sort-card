import React from 'react';
import {_class, _class_chart} from './priceRange.module.css';

const PriceRange = ({width}) => {
    return (
        <div className={_class} style={{width}}>
            <div className={_class_chart}></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default PriceRange;
