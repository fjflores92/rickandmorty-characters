const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (name) => {
    const apiURl = name ? `${API}${name}` : API;
    try {
        // const response = await fetch("https://dragon-ball-api.herokuapp.com/api/character/", {
        //     "headers": {
        //         "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        //         "mode": "cors",
        //         "Access-Control-Allow-Origin": "*",
        //         "Host": "dragonballcharacters.mx",
        //         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        //     },
        //     "referrerPolicy": "no-referrer-when-downgrade",
        //     "body": null,
        //     "method": "GET",
        //     "mode": "cors",
        //     "credentials": "omit"
        // });
        const response = await fetch(apiURl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;