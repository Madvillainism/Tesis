import { useState } from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import "./App.css";
import User from "../client/User";
import Broker from "../client/Broker";

// HACER FORM GRANDE PARA INSERTAR
//PROBAR YUP PARA VALIDAR
/* HACER ROUTER A OTRO ARCHIVO CON FORMULARIO DE
OTROS MODELOS (CLiente y broker next)*/

function App() {
  //USER FUNCTIONS

  /*const { data: usuario } = useFetch("http://localhost:5000/user");*/

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [type, setType] = useState("");
  const [man, setMan] = useState(0);
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

  const { broker: bro } = Broker();
  const prueba3 = Broker();
  const prueba2 = User();

  const onFormSubmit = (e) => {
    e.preventDefault();
    /*console.log(name, pass, mail, type);*/
    prueba3.filterBroker(atr, value);
  };

  //BROKER Y CLIENT DEBERIA TENER RESTRICCION DE TYPE CON USER

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

              <h3> ID USER TEST</h3>

              <button
                onClick={() => {
                  console.log("activoski sur la piste");
                }}
              >
                LOL
              </button>
              <Button variant="primary" type="submit">
                DO TESTS
              </Button>
            </Form>
          </Row>

          <h2>Boton de Pruebas</h2>
          <button
            onClick={() => {
              const jaja = () => {
                for (let i = 0; i < bro.length; i++) {
                  console.log(bro[i].idUser);
                }
              };
              jaja();
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
