const Header = () => {
    const view = `
        <div class="header-main">
            <div class="header-logo">
                <h1>
                    <a class="nav-button" href="#" data-pathname="">Rick & Morty</a>
                </h1>
            </div>
            <div class="header-nav">
                <a class="nav-button" href="#" data-pathname="about">
                    About
                </a>
            </div>
        </div>
    `;
    return view;
}

export default Header;