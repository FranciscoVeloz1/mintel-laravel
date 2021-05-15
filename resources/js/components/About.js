import React from "react";
const About = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-12 text-center mt-5">
          <i className="fas fa-home icon mb-3"></i>
          <h3 className="mb-3">Mintel</h3>
          <p className="text-muted">
            Somos una empresa mexicana enfocada el en internet de las cosas.
            Contamos con varios metodos para transformar tu hogar en una
            completa maravilla tecnologica.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-center mt-5">
          <i className="fas fa-warehouse icon mb-3"></i>
          <h3 className="mb-3">Confort house</h3>
          <p className="text-muted">
            Es nuestra tarjeta especializada en la automatizacion y control de
            hogares. Este dispositivo se vincula a tu celular, donde controlaras
            los elementos de tu hogar.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-center mt-5">
          <i className="fas fa-mobile-alt icon mb-3"></i>
          <h3 className="mb-3">Mintel House</h3>
          <p className="text-muted">
            Aplicacion web enfocada en el control de luminarias, contactos,
            electrodomesticos y agua de tu hogar. Tambien el monitoreo
            de sensores especiales para el hogar.
          </p>
        </div>
      </div>
      <div id="contact"></div>
    </div>
  );
};
export default About;
