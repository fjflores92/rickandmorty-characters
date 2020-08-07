import getData from '../utils/getData';

const Character = async () => {
    const name = location.hash.slice(1).split('/')[2];
    const character = await getData(name);
    const { image, status, originPlanet, gender, series } = character;
    const view = `
        <div class="characters-inner">
            <article class="characters-card">
                <img src="${(image.indexOf('http://') === 0 || image.indexOf('https://') === 0) ? image : image.replace('..', 'https://dragon-ball-api.herokuapp.com') }" alt="${name}">
                <h2>${name}</h2>
            </article>
            <article class="characters-card">
                <h3>Status: ${status}</h3>
                <h3>Origin Planet:  ${originPlanet}</h3>
                <h3>Gender:  ${gender}</h3>
                <h3>Series:  ${series}</h3>
            </article>
        </div>
    `;
    /* 
    const id = getHash();
    const character = await getData(id);
    const { image, name, episode, status, species, gender, origin, location } = character;
    const view = `
        <div class="characters-inner">
            <article class="characters-card">
                <img src="${image}" alt="${name}">
                <h2>${name}</h2>
            </article>
            <article class="characters-card">
                <h3>Episodes: ${episode.length}</h3>
                <h3>Status: ${status}</h3>
                <h3>Species: ${species}</h3>
                <h3>Gender: ${gender}</h3>
                <h3>Origin: ${origin.name}</h3>
                <h3>Last Location: ${location.name}</h3>
            </article>
        </div>
    `; */
    return view;
}

export default Character;