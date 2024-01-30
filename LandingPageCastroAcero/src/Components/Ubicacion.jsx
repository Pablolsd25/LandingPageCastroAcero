import Iframe from "react-iframe";
import { Container, Row, Col } from "react-bootstrap";

export default function Ubicacion() {
  return (
    <Container>
      <h3 className="text-white">Sucursales y puntos de venta</h3>
      <Row className="justify-content-between">
        <Col md="5">
          <h4 className="text-white">CEDIS Tecámac</h4>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15024.74518915715!2d-98.9660412!3d19.7046911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ecdf02635e39%3A0xf6b18b55cf636615!2sGrupo%20Castro%20Acero!5e0!3m2!1ses-419!2smx!4v1706630170518!5m2!1ses-419!2smx"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Col>
        <Col md="5">
          <h4 className="text-white">Sucursal Peralvillo</h4>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15047.59698747261!2d-99.132247!3d19.4599103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f834e3712c31%3A0x4a0423857954426f!2sAceros%20Y%20Materiales%20Siglo%20XXI%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1706630710049!5m2!1ses-419!2smx"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Col>
      </Row>
    </Container>
  );
}
