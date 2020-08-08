import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    /*const view = `
        <div class="characters">
            ${characters.results.map(character => `
                <article class="character-item">
                    <a href="#/${character.id}">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;*/
    const view = `
        <div class="characters">
            ${characters.map(character => `
                <article class="characters-item">
                    <a href="#/characters/${character.name}">
                        <img src="${
                            (character.image.indexOf('http://') === 0 || character.image.indexOf('https://') === 0)
                                ? character.image
                                : character.image.replace('..', 'https://dragon-ball-api.herokuapp.com')
                        }" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
}

export default Home;