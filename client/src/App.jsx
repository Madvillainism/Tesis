import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./App.css";
import User from "../tools/User";
import { Route, Routes } from "react-router-dom";
import Broker from "./brokerForm";

// HACER FORM GRANDE PARA INSERTAR
/* HACER ROUTER A OTRO ARCHIVO CON FORMULARIO DE
OTROS MODELOS (CLiente y broker next)*/

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [type, setType] = useState("");
  const [atr, setAtr] = useState("");
  const [value, setValue] = useState("");
  const [num, setNum] = useState(0);

  const prueba = User();

  const onFormSubmit = (data, e) => {
    e.preventDefault();
    setName(data.name); //VALIDAR DATOS CON HOOK FORM
    setPass(data.pass);
    setMail(data.mail);
    setType(data.type);
    prueba.sendUser(data.mail, data.name, data.pass, data.type);
    console.log(data);
    /*console.log(name, pass, mail, type);*/
  };

  const printInfo = () => {
    console.log(name + " " + pass + " " + mail + " " + type);
  };

  //NAME ES CEDULA

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <>
      <div className="App">
        <Container>
          <h1>PRUEBAS API TESIS</h1>

          <Row className="md">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div>
                <label>CEDULA</label>
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                    minLength: 6,
                    maxLength: 8,
                  })}
                />
                {errors.name?.type === "required" && (
                  <p>La cedula es requerida</p>
                )}
                {errors.name?.type === "minLength" && (
                  <p>La cedula es mu corta</p>
                )}
                {errors.name?.type === "maxLength" && (
                  <p>La cedula es mu larga</p>
                )}
              </div>

              <div>
                <label>CONTRA</label>
                <input
                  type="text"
                  {...register("pass", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.pass?.type === "required" && (
                  <p>La contra no está kbrochico</p>
                )}
                {errors.pass?.type === "minLength" && (
                  <p>La contra ta mu corta</p>
                )}
              </div>

              <div>
                <label>EMAIL</label>
                <input
                  type="text"
                  {...register("mail", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors.mail?.type === "required" && (
                  <p>El correo no está kbrochico</p>
                )}
                {errors.mail?.type === "pattern" && (
                  <p>Esto no es un correo, becerr@</p>
                )}
              </div>

              <div>
                <select {...register("type")}>
                  <option value="ADMIN">ADMIN</option>
                  <option value="BROKER">BROKER</option>
                  <option value="CLIENT">CLIENT</option>
                </select>
              </div>

              <button type="submit" value="send">
                SEND
              </button>
            </form>
          </Row>
        </Container>
        <div>
          <button onClick={printInfo}>PRINT DATA</button>
        </div>
      </div>

      <div>
        <h2>RUTAS</h2>
        <button>BROKER</button>
        <button>CLIENT</button>
        <Routes>
          <Route path="/broker" element={<Broker />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
