import { useState } from "react";
import useFetch from "../client/useFetch";
import axios from "axios";
import { Container, Row, Button, Form } from "react-bootstrap";
import "./App.css";

// HACER FORM GRANDE PARA INSERTAR
//PROBAR EL RESTO DE FUNCIONES DE LOS OTROS MODELOS
function App() {
  const { data, loading, error } = useFetch("http://localhost:5000/user");

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [type, setType] = useState("");
  const [num, setNum] = useState(0);

  const sendUser = () => {
    axios
      .post("http://localhost:5000/user", {
        firstName: name,
        phone: phone,
      })
      .then((res) => console.log(res));
  };

  const delUser = () => {
    axios
      .delete(`http://localhost:5000/user/${num}`)
      .then((res) => console.log(res));
  };

  const actUser = () => {
    axios
      .put(`http://localhost:5000/user/${num}`, {
        email: mail,
        userName: name,
        password: pass,
        type: type,
      })
      .then((res) => console.log(res));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(name, pass, mail, type);
    actUser();
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
              <Form.Group className="mb-3" controlId="formBasicName">
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Neo@Matrix.com"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  aria-label="Types"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                >
                  <option value="Admin">ADMIN</option>
                  <option value="Broker">BROKER</option>
                  <option value="Insured">INSURED</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>USER ID for UPDATE OR DELETE</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0"
                  onChange={(e) => {
                    setNum(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                DO TESTS
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
