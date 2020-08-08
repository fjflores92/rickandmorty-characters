import Home from '../pages/home';
import Character from '../pages/character';

const routes = [
    {
        path: '/',
        page: Home
    },
    {
        path: '/characters/:id',
        page: (params) => Character(params.id)
    },
];

export default routes;