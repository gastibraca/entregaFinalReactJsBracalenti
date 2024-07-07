<link rel="stylesheet" href="./NavBar.scss" />

const NavBar = () => {
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav">
        <div class="container-fluid">
        <img src="https://cdn.pixabay.com/photo/2013/07/13/09/48/zombie-156055_640.png" alt="Logo" width="50" height="40" class="d-inline-block align-text-top"/>
            <a class="navbar-brand" href="#">CHANGOCALIPSIS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">PRINCIPAL</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">EQUIPO</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">SUMINISTROS</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">ARMAS</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

NavBar()

export default NavBar