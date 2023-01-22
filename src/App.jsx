import { useState } from "react";
import useFetch from "../client/useFetch";
import axios from "axios";
import { Container, Row, Button, Form } from "react-bootstrap";
import "./App.css";
import User from "../client/User";

// HACER FORM GRANDE PARA INSERTAR
//PROBAR EL RESTO DE FUNCIONES DE LOS OTROS MODELOS
function App() {
  //USER FUNCTIONS

  /*const { data: usuario } = useFetch("http://localhost:5000/user");*/

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [type, setType] = useState("");
  const [atr, setAtr] = useState("");
  const [value, setValue] = useState("");
  const [num, setNum] = useState(0);

  /*const sendUser = () => {
    axios
      .post("http://localhost:5000/user", {
        firstName: name,
        phone: pass,
      })
      .then((res) => console.log(res));
  }*/

  /*const delUser = () => {
    axios
      .delete(`http://localhost:5000/user/${num}`)
      .then((res) => console.log(res));
  };*/

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

  //CLIENT FUNCTIONS

  const { data: client, error: clientError } = useFetch(
    "http://localhost:5000/client"
  );

  const { usuario: prueba } = User();
  const prueba2 = User();

  const onFormSubmit = (e) => {
    e.preventDefault();
    /*console.log(name, pass, mail, type);*/
    prueba2.filterUser(atr, value);
  };

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
                    setType(e.target.value);
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
              <h2>PARAMETERS FOR FILTERING</h2>
              <Form.Group className="mb-3" controlId="formBasicAtr">
                <Form.Label>Attribute</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="No. of Contract"
                  onChange={(e) => {
                    setAtr(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicValue">
                <Form.Label>value</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1234"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                DO TESTS
              </Button>
            </Form>
          </Row>

          <h2>Boton de Pruebas</h2>
          <button
            onClick={() => {
              console.log(prueba);
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
