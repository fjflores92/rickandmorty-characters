import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:name': Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    header.innerHTML = await Header();
    let hash = getHash();
    console.log(hash);
    let route = await resolveRoutes(hash);
    console.log(route);
    let render = routes[route] ? routes[route] : Error404;
    console.log(render);
    content.innerHTML = await render();
};

export default router;