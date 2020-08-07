const resolveRoutes = (route) => {
    if (route === '/') {
        return route;
    } else if (route === 'characters') {
        return '/characters/:name';
    }
    return `/${route}`;
};

export default resolveRoutes;