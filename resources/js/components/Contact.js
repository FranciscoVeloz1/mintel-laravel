import React from "react";
import "../../css/Contact.css";

const Contact = () => {
  const con =
    "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <div className="contact container">
      <div className="row">
        <div className="col-lg-5 col-md-8 col-12 mx-auto mb-5">
          <div className="card tarjeta n-border shadow-lg">
            <img src={con} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h2 className="card-title mb-4">Contactanos</h2>
              <p className="card-text">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Correo "/>
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" placeholder="Mensaje"></textarea>
                </div>
              </p>
              <button href="#" className="btn btn-primary btn-block">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
