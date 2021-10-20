import React, {useState, useEffect} from 'react';
import Card from '../../components/card/card';
import Group from '../../components/group/group';
import Select from '../../components/UI/select/select';
import {_class} from './pageCards.module.css';

const ASC = 'asc';
const DESC = 'desc';

const PageCards = () => {
    const [cards, setCards] = useState([]);

    const [sortSelected, setSortSelected] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => response.json())
        .then(json => setCards(json));
    }, [sortSelected]);


    const sotrCard = (e) => {
        console.log(e);
    } 
    return (
        <div className={_class}>
            {/* <Group> */}
                <Select 
                value={sortSelected}
                onChange={sotrCard}
                defaultValue='deafault'
                options={[
                    {value: ASC, name: ASC},
                    {value: DESC, name: DESC}
                ]}
                />
            {/* </Group> */}

            <div style={{height: '600px', width: '100%'}}>
                <Group>
                    {console.log(cards)}
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
            
        </div>
    )
}

export default PageCards;
