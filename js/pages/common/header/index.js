const Header = {
    render: () => {
        return `
            <header class="main-header">
                <h1 class="main-header-title">
                    <a href="#/home">Façadia</a>
                </h1>
                <ul class="main-nav">
                    <li class="main-nav-item">
                        <a class="main-nav-link" href="#/home">Accueil</a>
                    </li>
                    <li class="main-nav-item">
                        <a class="main-nav-link" href="#">Le projet</a>
                    </li>
                    <li class="main-nav-item pr">
                        <a class="main-nav-link" href="#/add-sensor">Ajouter un capteur</a>
                    </li>
                    <li class="main-nav-item">
                        <a class="main-nav-link" href="/">Se Déconnecter</a>
                    </li>
                </ul>
            </header>
        `
    }
}

export default Header
