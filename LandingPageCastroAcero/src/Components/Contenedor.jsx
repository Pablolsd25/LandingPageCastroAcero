import ListGroup from "react-bootstrap/ListGroup";
import Facebook from "../assets/facebook.svg";
import WhatsApp from "../assets/whatsapp.svg";
import Instagram from "../assets/instagram.svg";
import Tiktok from "../assets/tik-tok.svg";
import "../Components/Contenedor.css";

export default function Contenedor() {
  return (
    <ListGroup>
      <ListGroup.Item action variant="secondary">
        <a
          href="https://www.castroacero.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          Página Web
        </a>
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        <a
          href="https://drive.google.com/file/d/1jThYugirC9L1zvkYFq0kIUCp8dOBaZR-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          Catálogo PDF
        </a>
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        <a
          href="https://www.youtube.com/watch?v=EJQK_ZLbWeE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          Video de presentación
        </a>
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        <a
          href="https://maps.app.goo.gl/jHTNuYhv8dde8Mc37"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          Sucursal Peralvillo, CDMX
        </a>
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        <a
          href="https://maps.app.goo.gl/hN4qLydPpw2dfePm6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          Sucursal Tecámac, Edo. de México
        </a>
      </ListGroup.Item>
      <ListGroup.Item variant="secondary">
        <div className="container">
          <div className="row">
            <div className="col-3">
              {/* Icono de Facebook */}
              <a
                href="https://www.facebook.com/grupocastroacero.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <img src={Facebook} alt="Facebook" className="h2" />
                <i className="bi bi-facebook h2"></i>
              </a>
            </div>
            <div className="col-3">
              {/* Icono de WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=525517705007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <img src={WhatsApp} alt="WhatsApp" className="h2" />
                <i className="bi bi-whatsapp h2"></i>
              </a>
            </div>
            <div className="col-3">
              {/* Icono de Instagram */}
              <a
                href="https://www.instagram.com/castroacero.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <img src={Instagram} alt="Instagram" className="h2" />
                <i className="bi bi-instagram h2"></i>
              </a>
            </div>
            <div className="col-3">
              {/* Icono de TikTok */}
              <a
                href="https://www.tiktok.com/@grupocastroacero.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <img src={Tiktok} alt="Tiktok" className="h2" />
                <i className="bi bi-tiktok h2"></i>
              </a>
            </div>
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}
