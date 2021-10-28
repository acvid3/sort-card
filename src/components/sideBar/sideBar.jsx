import React from 'react';
import Select from '../UI/select/select';
import { sort } from '../../sortCards';
import { useCards } from '../../useCards';

const SideBar = () => {
    const accessor = useCards();
    
    const sotrCard = (value) => {
        console.log(sort(accessor.cards, value));
        accessor.setCards(sort(accessor.cards, value)); 
    } 

    return (
        <div>
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
