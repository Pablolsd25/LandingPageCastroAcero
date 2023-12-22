import Contendor from "./Components/Contenedor";
import { Image } from "react-bootstrap";
import Logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100 mt-1 text-center">
        <div>
          <Image src={Logo} alt="Logo" rounded className="Logo-img img-fluid" />
          <br />
          <br />
          <p className="text-white text-break">
            Grupo Castro Acero, con más de 50 años de excelencia en la
            distribución de materiales para la construcción, pone a tu
            disposición nuestra experiencia para satisfacer tus necesidades en
            el ámbito de la construcción.
          </p>
          <h4 className="text-white text-break">Conocenos</h4>
          <Contendor />
        </div>
      </div>
    </>
  );
}

export default App;
