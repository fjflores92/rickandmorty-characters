const resolveRoutes = (route) => {
    console.log(route);
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:name';
        return validRoute;
    }
    return `/${route}`;
};

export default resolveRoutes;