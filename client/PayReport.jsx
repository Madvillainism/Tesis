import axios from "axios";
import useFetch from "./useFetch";

function PayReport() {
  //Funcion para agregar
  function sendPayRep(
    idTypePayment,
    amount,
    state,
    ref,
    desc,
    idContract,
    creationDate,
    checkDate
  ) {
    axios
      .post("http://localhost:5000/payreport", {
        idTypePayment: idTypePayment,
        amount: amount,
        state: state,
        reference: ref,
        description: desc,
        idContract: idContract,
        creationDate: creationDate,
        checkDate: checkDate,
      })
      .then((res) => console.log(res));
  }

  //Funcion actualizar
  function actPayRep(
    idTypePayment,
    amount,
    state,
    ref,
    desc,
    idContract,
    creationDate,
    checkDate,
    num
  ) {
    axios
      .put(`http://localhost:5000/payreport/${num}`, {
        idTypePayment: idTypePayment,
        amount: amount,
        state: state,
        reference: ref,
        description: desc,
        idContract: idContract,
        creationDate: creationDate,
        checkDate: checkDate,
      })
      .then((res) => console.log(res));
  }

  //DEL USER WORKS
  function delPayRep(num) {
    axios
      .delete(`http://localhost:5000/payreport/${num}`)
      .then((res) => console.log(res));
  }

  //Get users WORKS
  const { data: reporte } = useFetch("http://localhost:5000/PayReport");

  //GET USER BY ID WORKS
  function getPayRep(num) {
    axios
      .get(`http://localhost:5000/payreport/${num}`)
      .then((res) => console.log(res));
  }

  //TEST GET ATTRIBUTE FILTER

  function filterPayRep(atr, value) {
    axios
      .post("http://localhost:5000/payreport/specify", {
        attribute: atr,
        value: value,
      })
      .then((res) => console.log(res));
  }

  return { actPayRep, delPayRep, sendPayRep, reporte, getPayRep, filterPayRep };
}

//USAR MODULOS DE FUNCIONES PARA CADA APARTADO
//USAR USE FETCH; FUNCIONES y UN LOG PARA PROBAR

export default PayReport;
