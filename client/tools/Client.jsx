import axios from "axios";
import useFetch from "./useFetch";

function Client() {
  //Funcion para agregar (poner parametros)
  /*USAR FUNCION DE APP.JSX LINEA 141 
  iteracion para idUser y idBroker*/
  function sendClient(
    fName,
    lName,
    compName,
    clientType,
    birth,
    entry,
    gender,
    idCardRif,
    profilePic,
    phone,
    idBroker,
    idUser,
    idContract,
    address,
    town
  ) {
    axios
      .post("http://localhost:5000/client", {
        firstName: fName,
        lastName: lName,
        companyName: compName,
        clientType: clientType,
        birthDate: birth,
        entryDate: entry,
        gender: gender,
        idCardRif: idCardRif,
        profilePhoto: profilePic,
        phone: phone,
        idBroker: idBroker,
        idUser: idUser,
        idContract: idContract,
        address: address,
        town: town,
      })
      .then((res) => console.log(res));
  }

  //Funcion actualizar (poner parametros)
  function actClient(
    fName,
    lName,
    compName,
    clientType,
    birth,
    entry,
    gender,
    idCardRif,
    profilePic,
    phone,
    idBroker,
    idUser,
    idContract,
    address,
    town,
    num
  ) {
    axios
      .put(`http://localhost:5000/client/${num}`, {
        firstName: fName,
        lastName: lName,
        companyName: compName,
        clientType: clientType,
        birthDate: birth,
        entryDate: entry,
        gender: gender,
        idCardRif: idCardRif,
        profilePhoto: profilePic,
        phone: phone,
        idBroker: idBroker,
        idUser: idUser,
        idContract: idContract,
        address: address,
        town: town,
      })
      .then((res) => console.log(res));
  }

  //DEL CLIENT
  function delClient(num) {
    axios
      .delete(`http://localhost:5000/client/${num}`)
      .then((res) => console.log(res));
  }

  //Get users WORKS
  const { data: cliente } = useFetch("http://localhost:5000/user");

  //GET USER BY ID WORKS
  function getClient(num) {
    axios
      .get(`http://localhost:5000/client/${num}`)
      .then((res) => console.log(res));
  }

  //TEST GET ATTRIBUTE FILTER

  function filterClient(atr, value) {
    axios
      .post("http://localhost:5000/client/specify", {
        attribute: atr,
        value: value,
      })
      .then((res) => console.log(res));
  }

  return { actClient, delClient, sendClient, cliente, getClient, filterClient };
}

//USAR MODULOS DE FUNCIONES PARA CADA APARTADO
//USAR USE FETCH; FUNCIONES y UN LOG PARA PROBAR

export default Client;
