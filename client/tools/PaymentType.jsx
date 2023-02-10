import axios from "axios";
import useFetch from "./useFetch";

function PaymentType() {
  //Funcion para agregar
  function sendPayType(name, currency) {
    axios
      .post("http://localhost:5000/paymenttype", {
        name: name,
        currency: currency,
      })
      .then((res) => console.log(res));
  }

  //Funcion actualizar
  function actPayType(name, currency, num) {
    axios
      .put(`http://localhost:5000/paymenttype/${num}`, {
        name: name,
        currency: currency,
      })
      .then((res) => console.log(res));
  }

  //DEL USER WORKS
  function delPayType(num) {
    axios
      .delete(`http://localhost:5000/paymenttype/${num}`)
      .then((res) => console.log(res));
  }

  //Get users WORKS
  const { data: tipoPago } = useFetch("http://localhost:5000/paymenttype");

  //GET USER BY ID WORKS
  function getPayType(num) {
    axios
      .get(`http://localhost:5000/paymenttype/${num}`)
      .then((res) => console.log(res));
  }

  //TEST GET ATTRIBUTE FILTER

  function filterPayType(atr, value) {
    axios
      .post("http://localhost:5000/paymenttype/specify", {
        attribute: atr,
        value: value,
      })
      .then((res) => console.log(res));
  }

  return {
    actPayType,
    delPayType,
    sendPayType,
    tipoPago,
    getPayType,
    filterPayType,
  };
}

//USAR MODULOS DE FUNCIONES PARA CADA APARTADO
//USAR USE FETCH; FUNCIONES y UN LOG PARA PROBAR

export default PaymentType;
