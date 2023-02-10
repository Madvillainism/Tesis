import axios from "axios";
import useFetch from "./useFetch";

function Insurance() {
  //Funcion para agregar
  function sendInsur(name, rif, mail, phone, address) {
    axios
      .post("http://localhost:5000/insurance", {
        name: name,
        rif: rif,
        mail: mail,
        phone: phone,
        address: address,
      })
      .then((res) => console.log(res));
  }

  //Funcion actualizar
  function actInsur(name, rif, mail, phone, address) {
    axios
      .put(`http://localhost:5000/insurance/${num}`, {
        name: name,
        rif: rif,
        mail: mail,
        phone: phone,
        address: address,
      })
      .then((res) => console.log(res));
  }

  //DEL USER WORKS
  function delInsur(num) {
    axios
      .delete(`http://localhost:5000/insurance/${num}`)
      .then((res) => console.log(res));
  }

  //Get users WORKS
  const { data: seguro } = useFetch("http://localhost:5000/insurance");

  //GET USER BY ID WORKS
  function getInsur(num) {
    axios
      .get(`http://localhost:5000/insurance/${num}`)
      .then((res) => console.log(res));
  }

  //TEST GET ATTRIBUTE FILTER

  function filterInsur(atr, value) {
    axios
      .post("http://localhost:5000/insurance/specify", {
        attribute: atr,
        value: value,
      })
      .then((res) => console.log(res));
  }

  return { actInsur, delInsur, sendInsur, seguro, getInsur, filterInsur };
}

//USAR MODULOS DE FUNCIONES PARA CADA APARTADO
//USAR USE FETCH; FUNCIONES y UN LOG PARA PROBAR

export default Insurance;
