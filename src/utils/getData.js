// const API = 'https://rickandmortyapi.com/api/character/';
const API = 'http://localhost:8010/proxy/api/character/';

/* const getData = async (id) => {
    const apiURl = id ? `${API}${id}` : API; */
const getData = async (name) => {
    const apiURl = name ? `${API}${name}` : API;
    try {
        const response = await fetch(apiURl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;