import axios from "axios";
import useFetch from "./useFetch";

function Policy() {
  //Funcion para agregar
  function sendPolicy(name, coverage, payMethod, idInsur) {
    axios
      .post("http://localhost:5000/policy", {
        name: name,
        coverage: cover,
        payMethod: method,
        idInsurance: idInsur,
      })
      .then((res) => console.log(res));
  }

  //Funcion actualizar
  function actPolicy(name, coverage, payMethod, idInsur) {
    axios
      .put(`http://localhost:5000/policy/${num}`, {
        name: name,
        coverage: cover,
        payMethod: method,
        idInsurance: idInsur,
      })
      .then((res) => console.log(res));
  }

  //DEL USER WORKS
  function delPolicy(num) {
    axios
      .delete(`http://localhost:5000/policy/${num}`)
      .then((res) => console.log(res));
  }

  //Get users WORKS
  const { data: poliza } = useFetch("http://localhost:5000/policy");

  //GET USER BY ID WORKS
  function getPolicy(num) {
    axios
      .get(`http://localhost:5000/policy/${num}`)
      .then((res) => console.log(res));
  }

  //TEST GET ATTRIBUTE FILTER

  function filterPolicy(atr, value) {
    axios
      .post("http://localhost:5000/policy/specify", {
        attribute: atr,
        value: value,
      })
      .then((res) => console.log(res));
  }

  return { actPolicy, delPolicy, sendPolicy, poliza, getPolicy, filterPolicy };
}

//USAR MODULOS DE FUNCIONES PARA CADA APARTADO
//USAR USE FETCH; FUNCIONES y UN LOG PARA PROBAR

export default Policy;
