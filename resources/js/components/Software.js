import React from "react";

import "../../css/Software.css";

const Software = () => {
  const image =
    "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/latam/latin/mkt/pdp/plp-banner/x-pro.png";

  return (
    <div className="software container pt-5 mb-5">
      <div className="row">
        <div className="col-12 col-lg-6 mb-5">
          <img src={image} alt="" />
        </div>

        <div className="col-12 col-lg-6">
          <h1 className="text-center text-md-left mb-5">
            La mejor aplicacion de IoT
            <br />
            <span className="text-primary">Mintel House</span>
          </h1>
          <div className="d-flex">
            <i className="fas fa-desktop icon mr-3 pt-2"></i>
            <p className="lead text-center text-md-left text-muted">
              Aplicacion web agradable a la vista y de facil uso donde
              controlaras todos los elementos de tu hogar.
            </p>
          </div>

          <div className="d-flex">
            <i className="fas fa-tachometer-alt icon mr-3 pt-1"></i>
            <p className="lead text-center text-md-left text-muted">
              La aplicacion web cuenta con un rendimiento increible, podras
              utilizarla desde cualquier dispositivo
            </p>
          </div>
        </div>
      </div>
      <div id="about"></div>
    </div>
  );
};

export default Software;
