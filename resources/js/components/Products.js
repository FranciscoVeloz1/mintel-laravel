import React from "react";

import "../../css/Products.css";

const Products = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-12 text-center mb-5">
          <div className="card n-border">
            <div className="card-body shadow-lg">
              <span className="badge alert-primary mb-3 p-2">Confort house</span>
              <h1 className="mb-5">$500</h1>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> 13 salidas para tu
                hogar
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> 5 sensores que
                monitorearán tu hogar
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Personalizacion de
                la app
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Dashboard para
                metricas
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Maximo 5 usuarios
              </p>

              <a href="#" className="btn btn-primary btn-block">
                Adquirir
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 text-center mb-5">
          <div className="card n-border">
            <div className="card-body shadow-lg">
              <span className="badge alert-primary mb-3 p-2">Confort house +</span>
              <h1 className="mb-5">$1000</h1>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> 56 salidas para tu
                hogar
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> 10 sensores que
                monitorearán tu hogar
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Personalizacion de
                la app
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Dashboard para
                metricas
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Maximo 10 usuarios
              </p>
              <a href="#" className="btn btn-primary btn-block">
                Adquirir
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 text-center mb-5">
          <div className="card n-border">
            <div className="card-body shadow-lg">
              <span className="badge alert-primary mb-3 p-2">
                Mintel industrial
              </span>
              <h1 className="mb-5">$5000</h1>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> 56 salidas para tu
                empresa
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> 10 sensores que
                monitorearán tu empresa
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Personalizacion de
                la app
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Dashboard para
                metricas
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Software a la medida
                de la empresa
              </p>
              <p>
                <i className="fas fa-check-circle icon-ok"></i> Sin limite de
                usuarios
              </p>
              <a href="#" className="btn btn-primary btn-block">
                Adquirir
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="software"></div>
    </div>
  );
};

export default Products;
