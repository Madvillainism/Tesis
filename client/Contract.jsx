import axios from "axios";
import useFetch from "./useFetch";

function Contract() {
  //Funcion para agregar
  function sendContract(
    nCon,
    nRec,
    emit,
    valid,
    prem,
    contType,
    idPol,
    idBroker
  ) {
    axios
      .post("http://localhost:5000/contract", {
        nContract: nCon,
        nReceipt: nRec,
        emitDate: emit,
        validDate: valid,
        premium: prem,
        contractType: contType,
        idPolicy: idPol,
        idMiddle: idBroker,
      })
      .then((res) => console.log(res));
  }

  //Funcion actualizar
  function actContract(
    nCon,
    nRec,
    emit,
    valid,
    prem,
    contType,
    idPol,
    idBroker,
    num
  ) {
    axios
      .put(`http://localhost:5000/contract/${num}`, {
        nContract: nCon,
        nReceipt: nRec,
        emitDate: emit,
        validDate: valid,
        premium: prem,
        contractType: contType,
        idPolicy: idPol,
        idMiddle: idBroker,
      })
      .then((res) => console.log(res));
  }

  //DEL USER WORKS
  function delContract(num) {
    axios
      .delete(`http://localhost:5000/contract/${num}`)
      .then((res) => console.log(res));
  }

  //Get users WORKS
  const { data: contract } = useFetch("http://localhost:5000/contract");

  //GET USER BY ID WORKS
  function getContract(num) {
    axios
      .get(`http://localhost:5000/contract/${num}`)
      .then((res) => console.log(res));
  }

  //TEST GET ATTRIBUTE FILTER

  function filterContract(atr, value) {
    axios
      .post("http://localhost:5000/contract/specify", {
        attribute: atr,
        value: value,
      })
      .then((res) => console.log(res));
  }

  return {
    actContract,
    delContract,
    sendContract,
    contract,
    getContract,
    filterContract,
  };
}

//USAR MODULOS DE FUNCIONES PARA CADA APARTADO
//USAR USE FETCH; FUNCIONES y UN LOG PARA PROBAR

export default Contract;
