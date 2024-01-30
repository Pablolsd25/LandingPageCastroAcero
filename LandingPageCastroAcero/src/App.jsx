import { Container, Row, Col, Image } from "react-bootstrap";
import Contenedor from "./Components/Contenedor";
import Ubicacion from "./Components/Ubicacion";
import Logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container
        fluid
        className=" d-flex align-items-center justify-content-center mt-1 text-center"
      >
        <Row className="w-100">
          <Col md={8} className="mx-auto">
            <div>
              <Image
                src={Logo}
                alt="Logo"
                rounded
                className="Logo-img img-fluid"
              />
              <br />
              <p className="text-white text-break">
                Grupo Castro Acero, con más de 50 años de excelencia en la
                distribución de materiales para la construcción, pone a tu
                disposición nuestra experiencia para satisfacer tus necesidades
                en el ámbito de la construcción.
              </p>
              <h4 className="text-white text-break">Conócenos</h4>
              <Contenedor />
              <br />
              <Ubicacion />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
