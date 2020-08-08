import routes from './routes';
import Header from '../templates/header';
import Error404 from '../pages/error404';

let instance = null;

class Router {
    constructor() {
        if (instance) {
            return instance;
        }
    
        this.routes = routes;
        this.instance = this;
        this._loadInitialRoute();
    }

    async loadRoute(...urlSegs) {
        console.log('urlSegs', urlSegs);
        const matchedRoute = await this._matchUrlToRoute(urlSegs);
        console.log('matchedRoute', matchedRoute);
        const url = `/${urlSegs.join('/')}`;
        history.pushState({}, 'this works', url);
        /*const routerOutElm = document.querySelectorAll('[data-router]')[0];
        routerOutElm.innerHTML = matchedRoute.template;*/
        
        const header = null || document.getElementById('header');
        const content = null || document.getElementById('content');
        header.innerHTML = await Header();
        let render = (matchedRoute && matchedRoute.hasOwnProperty('page')) ? matchedRoute['page'] : Error404;
        content.innerHTML = await render(matchedRoute.params);
    }

    async _matchUrlToRoute(urlSegs) {
        const routeParams = {};
        const matchedRoute = this.routes.find(route => {
            const routePathSegs = route.path.split('/').slice(1);
            console.log('routePathSegs: ', routePathSegs, 'urlSegs: ', urlSegs);
            if (routePathSegs.length !== urlSegs.length) {
                return false;
            }
            
            const match = routePathSegs.every((routePathSeg, i) => {
                return routePathSeg === urlSegs[i] || routePathSeg[0] === ':';
            });

            if (match) {
                routePathSegs.forEach((segment, i) => {
                    if (segment[0] === ':') {
                        const propName = segment.slice(1);
                        routeParams[propName] = decodeURIComponent(urlSegs[i]);
                    }
                });
            }
            return match;
        });
        console.log('matchedRoute', matchedRoute);
        return { ...matchedRoute, params: routeParams };
    }

    async _loadInitialRoute() {
        const pathNameSplit = window.location.pathname.split('/');
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';
        this.loadRoute(...pathSegs);
    }
}

export default Router;