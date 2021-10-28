import React, {useState, useEffect} from 'react';
import Card from './components/card/card';
import Group from './components/group/group';
import Select from './components/UI/select/select';
import {_class} from './pageCards.module.css';
import {getCards}  from './api/apiCards';
import { sort } from './sortCards';

const PageCards = () => {
    const [cards, setCards] = useState([]);

    const getRequest = async () => {
        setCards(await getCards());
    }

    useEffect(() => {
        getRequest();
    }, []);

    const sotrCard = (value) => {
        setCards(sort(cards, value)); 
    } 

    return (
        <div className={_class}>
           <Select 
                onChange={sotrCard}
                options={[
                    {value: 'default', name: 'default'},
                    {value: 'asc', name: 'asc'},
                    {value: 'desc', name: 'desc'},
                    {value: 'title', name: 'title'}
                ]}
            />
           
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
