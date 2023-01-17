import { useState } from "react";
import useFetch from "../client/useFetch";
import axios from "axios";
import { Container, Row, Button, Form } from "react-bootstrap";
import "./App.css";

//PENDIENTE: POST; CREAR Y ELIMINAR
// HACER FORM GRANDE PARA INSERTAR
//PROBAR EL RESTO DE FUNCIONES DE LOS OTROS MODELOS
function App() {
  const { data, loading, error } = useFetch("http://localhost:5000/user");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sendUser = () => {
    axios
      .post("http://localhost:5000/user", {
        firstName: name,
        phone: phone,
      })
      .then((res) => console.log(res));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(phone);
    sendUser();
  };

  if (loading) return <h1>CARGANDO</h1>;
  if (error) console.log(error);
  return (
    <>
      <div className="App">
        <Container>
          <h1>PRUEBAS API TESIS</h1>

          <Row className="md">
            <Form onSubmit={onFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                USE DATA
              </Button>
            </Form>
          </Row>

          <h2>Boton de Pruebas</h2>
          <button
            onClick={() => {
              console.log(data);
            }}
          >
            GET DATA
          </button>
        </Container>
      </div>
    </>
  );
}

export default App;
