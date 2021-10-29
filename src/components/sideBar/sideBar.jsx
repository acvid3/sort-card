import React, { useState } from 'react';
import {_class} from './sideBar.module.css';
import Select from '../UI/select/select';
import Edit from '../UI/edit/edit';
import { sort } from '../../sortCards';
import { useCards } from '../../useCards';
import PriceRange from '../priceRange/priceRange';
import Button from './../UI/button/button';

const SideBar = ({setSortCards, query, queryValue}) => {
    const [cards] = useCards();
    const [state, setstate] = useState(200);
    
    const sotrCard = (value) => {
        setSortCards(sort(cards, value)); 
    } 

    return (
        <div className={_class}>
           <Edit 
               placeholder="Search card" 
               value={queryValue}
               onChange={e => query(e.target.value)}
           />
           <Select 
                onChange={sotrCard}
                options={[
                    {value: 'default', name: 'default'},
                    {value: 'asc', name: 'asc'},
                    {value: 'desc', name: 'desc'},
                    {value: 'title', name: 'title'}
                ]}
            /> 
            <PriceRange width={state}/>
            <Button onClick={() => setstate(state - 10)}>Go</Button>
        </div>
    )
}

export default SideBar;
