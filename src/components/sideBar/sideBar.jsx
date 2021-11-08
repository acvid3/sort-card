import React from 'react';
import {_class} from './sideBar.module.css';
import Select from '../UI/select/select';
import Edit from '../UI/edit/edit';
import { sort } from '../../sortCards';
import { useCards } from '../../useCards';

const SideBar = ({setSortCards, query, queryValue}) => {
    const [cards] = useCards();
    
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
        </div>
    )
}

export default SideBar;
