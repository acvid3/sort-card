import {useState, useEffect} from 'react';
import {getCards}  from './api/apiCards';

export const useCards = () => {
    const [cards, setCards] = useState([]);

    const getRequest = async () => {
        setCards(await getCards());
    }

    useEffect(() => {
        getRequest();
    }, []);

    const accessor = () => {
        return {cards, setCards}
    }


    return accessor();
}
