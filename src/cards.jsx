import React from 'react';
import Card from './components/card/card';
import Group from './components/group/group';
import {_class} from './cards.module.css';
import SideBar from './components/sideBar/sideBar';
import { useCards } from './useCards';

const PageCards = () => {
    const [cards, setCards] = useCards();

    const getResultSortedCard = value => {
        setCards(value);
    }

    return (
        <div className={_class}>
           <SideBar setSortCards={getResultSortedCard}/>
            <Group>
                {cards.map(card => {
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
