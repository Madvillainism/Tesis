import axios from "axios";
import useFetch from "./useFetch";

function User() {
  //Funcion para agregar
  function sendUser(mail, name, pass, type) {
    axios
      .post("http://localhost:5000/user", {
        email: mail,
        userName: name,
        password: pass,
        type: type,
      })
      .then((res) => console.log(res));
  }

  //Funcion actualizar
  function actUser(mail, name, pass, type, num) {
    axios
      .put(`http://localhost:5000/user/${num}`, {
        email: mail,
        userName: name,
        password: pass,
        type: type,
      })
      .then((res) => console.log(res));
  }

  //DEL USER WORKS
  function delUser(num) {
    axios
      .delete(`http://localhost:5000/user/${num}`)
      .then((res) => console.log(res));
  }

  //Get users WORKS
  const { data: usuario } = useFetch("http://localhost:5000/user");

  //GET USER BY ID WORKS
  function getUser(num) {
    axios
      .get(`http://localhost:5000/user/${num}`)
      .then((res) => console.log(res));
  }

  //TEST GET ATTRIBUTE FILTER

  function filterUser(atr, value) {
    axios
      .post("http://localhost:5000/user/specify", {
        attribute: atr,
        value: value,
      })
      .then((res) => console.log(res));
  }

  return { actUser, delUser, sendUser, usuario, getUser, filterUser };
}

//USAR MODULOS DE FUNCIONES PARA CADA APARTADO
//USAR USE FETCH; FUNCIONES y UN LOG PARA PROBAR

export default User;
