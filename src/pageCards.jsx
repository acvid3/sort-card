import React, {useState, useEffect} from 'react';
import Card from './components/card/card';
import Group from './components/group/group';
import {_class} from './pageCards.module.css';
import SideBar from './components/sideBar/sideBar';
import { useCards } from './useCards';

const PageCards = () => {
    const accessor = useCards();

    return (
        <div className={_class}>
           <SideBar />
           
            <Group>
                {accessor.cards.map(card => {
                    return <Card 
                        key={card.id} 
                        id={card.id}
                        title={card.title}
                        src={card.thumbnailUrl}
                     />
                })}
            </Group> 
        </div>
    )
}

export default PageCards;
