import Contendor from "./Components/Contenedor";
import { Image } from "react-bootstrap";
import Logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100 mt-20 text-center">
        <div>
          <Image src={Logo} alt="Logo" rounded className="Logo-img img-fluid" />
          <p className="text-white text-break">
            Grupo Castro Acero, con más de 50 años de excelencia en la
            distribución de materiales para la construcción, se pone a tu
            disposición. Contáctanos ahora para solicitar tu cotización y
            recibir una respuesta inmediata. Confía en nuestra experiencia para
            satisfacer tus necesidades en el ámbito de la construcción.
          </p>
          <Contendor />
        </div>
      </div>
    </>
  );
}

export default App;
