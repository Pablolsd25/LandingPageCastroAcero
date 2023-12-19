import ListGroup from "react-bootstrap/ListGroup";

export default function Contenedor() {
  return (
    <ListGroup>
      <ListGroup.Item action variant="danger">
        Página Web
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Catálogo PDF
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Video Presentación
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Sucursal Peralvillo
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Sucursal Tecámac
      </ListGroup.Item>
    </ListGroup>
  );
}
