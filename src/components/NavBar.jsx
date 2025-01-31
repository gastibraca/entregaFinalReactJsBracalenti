import "../style.css"
const NavBar = () => {
    return(
    <nav class="navbar navbar-expand-lg nav">
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
                    <img src="" alt="" />
                    </li>
                </ul>
            </div>
            <svg className="cart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
        </div>
    </nav>
    )
}

NavBar()

export default NavBar