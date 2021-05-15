import React from 'react';

import '../../css/Main.css'

const Main = () => {

    const imagen = 'https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
    return (
        <section className="welcome">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                        <h1 className="text-center text-md-left mb-4">
                            Bienvenidos al <span className="text-primary">Mintel</span>
                        </h1>
                        <p className="lead text-center text-md-left text-muted">
                            Somos una empresa dedicada a la transformacion digital
                            de nuestros hogares a traves del internet de las cosas.
                        </p>

                        <div className="text-center text-md-left mt-5">
                            <a href="#" className="btn btn-primary shadow lift mr-2">Comprar</a>
                            <a href="#" className="btn btn-outline-secondary lift">Mas informacion</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <img src={imagen}
                            className="" alt="" />
                    </div>
                </div>
            </div>
            <div id="products"></div>
        </section>
    );
}

export default Main;