import axios from "axios";

export const getCards = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1');
    return response.data;
}


