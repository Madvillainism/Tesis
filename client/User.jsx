import axios from "axios";
import useFetch from "./useFetch";

function User() {
  function sendUser(name, pass) {
    return axios
      .post("http://localhost:5000/user", {
        userName: name,
        password: pass,
      })
      .then((res) => console.log(res));
  }

  function delUser(num) {
    axios
      .delete(`http://localhost:5000/user/${num}`)
      .then((res) => console.log(res));
  }

  const { data: usuario } = useFetch("http://localhost:5000/user");

  const printData = () => {
    console.log("maldito");
  };

  return { sendUser, delUser, printData, usuario };
}

//USAR MODULOS DE FUNCIONES PARA CADA APARTADO
//USAR USE FETCH; FUNCIONES y UN LOG PARA PROBAR

export default User;
