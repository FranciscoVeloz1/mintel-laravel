import React from 'react';

import '../../css/Header.css'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white pt-4 pb-4 sticky-top">
            <div className="container">
                <a href="#example" className="navbar-brand brand">
                    <span className="text-primary">Mintel</span>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item pr-lg-4">
                            <a href="#products" className="nav-link">Productos</a>
                        </li>

                        <li className="nav-item pl-lg-4 pr-4">
                            <a href="#software" className="nav-link">Software</a>
                        </li>

                        <li className="nav-item pl-lg-4 pr-4">
                            <a href="#about" className="nav-link">Acerca de</a>
                        </li>

                        <li className="nav-item pl-lg-4 pr-4">
                            <a href="#contact" className="nav-link">Contacto</a>
                        </li>
                    </ul>

                    <div className="ml-auto">
                        <a href="#" className="btn btn-outline-secondary mr-1">Iniciar sesion</a>
                        <a href="#" className="btn btn-primary">Registrate</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;