import Router from './router/Router';

const router = new Router();

const loadRoute = (pathname, params) => {
    params ? router.loadRoute(pathname, params) : router.loadRoute(pathname);
}

(function (selector, event, handler) {
    document.querySelector('body').addEventListener(event, function (evt) {
            var targetElement = evt.target;
            while (targetElement != null) {
                if (targetElement.matches(selector)) {
                    evt.preventDefault();
                    handler(targetElement.dataset.pathname, targetElement.dataset.params);
                    return;
                }
                targetElement = targetElement.parentElement;
            }
        },
        true
    );
})('a.nav-button', 'click', loadRoute);