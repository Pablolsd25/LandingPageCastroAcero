import Contendor from "./Components/Contenedor";
import { Image } from "react-bootstrap";
import Logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100 mt-20 text-center">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            roundedCircle
            className="Logo-img img-fluid"
          />
          <p>
            Grupo Castro Acero con mas de 50 años de experiencia en la
            distribucion de materiales para la construcción. Contactanos y pide
            tu cotización, respuesta inmediata
          </p>
          <Contendor />
        </div>
      </div>
      
    </>
  );
}

export default App;
