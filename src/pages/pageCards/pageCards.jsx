import React, {useState, useEffect} from 'react';
import Card from '../../components/card/card';
import Group from '../../components/group/group';
import Select from '../../components/UI/select/select';
import {_class} from './pageCards.module.css';

const ASC = 'Asc';
const DESC = 'Desc';

const PageCards = () => {
    const [cards, setCards] = useState([]);
    const [sortSelected, setSortSelected] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
        .then(response => response.json())
        .then(json => setCards(json));
    }, []);

   
    const sotrCard = (value) => {
        setSortSelected(value);
      
        switch (value) {
            case ASC: setCards([...cards].sort((a, b) => {return a.id - b.id})) 
            break;
            case DESC: setCards([...cards].sort((a, b) => {return b.id - a.id})) 
            break;
            case 'title': setCards([...cards].sort((a, b) => a[value].localeCompare(b[value]))) 
            break;
            default: setCards([...cards].sort((a, b) => {return a.id - b.id})) 
            break;
        }

        
    } 
    return (
        <div className={_class}>
            <Select 
                value={sortSelected}
                onChange={sotrCard}
                defaultValue='deafault'
                options={[
                    {value: ASC, name: ASC},
                    {value: DESC, name: DESC},
                    {value: 'title', name: 'Title'}
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
