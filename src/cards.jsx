import React, {useState, useMemo} from 'react';
import Card from './components/card/card';
import Group from './components/group/group';
import {_class, __class} from './cards.module.css';
import SideBar from './components/sideBar/sideBar';
import { useCards } from './useCards';

const PageCards = () => {
    const [cards, setCards] = useCards();
    const [searchQuery, setSearchQuery] = useState('');

    const getResultSortedCard = value => {
        setCards(value);
    }

    const sortedPost = useMemo(() => {
        return searchQuery ? [...cards].filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase())) : cards;
    }, [searchQuery, cards])

    const query = value => {
        setSearchQuery(value);
    }

    return (
        <div className={_class}>
           <SideBar 
               setSortCards={getResultSortedCard}
               query={query}
               queryValue={searchQuery}
           />
            <Group>
                {sortedPost.length ? 
                    sortedPost.map(card => {
                        return <Card 
                            key={card.id} 
                            id={card.id}
                            title={card.title}
                            src={card.thumbnailUrl}
                        />
                    })
                    :
                    <p className={__class}>There were no cards matched the search!</p>
                }
            </Group> 
        </div>
    )
}

export default PageCards;
