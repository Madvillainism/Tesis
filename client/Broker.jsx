import axios from "axios";
import useFetch from "./useFetch";

function Broker() {
  //Funcion para agregar
  function sendBroker(
    fName,
    lName,
    phone,
    secPhone,
    email,
    idCard,
    birth,
    profilePic,
    entry,
    gender,
    idUser
  ) {
    axios
      .post("http://localhost:5000/broker", {
        firstName: fName,
        lastName: lName,
        phone: phone,
        secondaryPhone: secPhone,
        email: email,
        idCard: idCard,
        birthDate: birth,
        profilePhoto: profilePic,
        entryDate: entry,
        gender: gender,
        idUser: idUser,
      })
      .then((res) => console.log(res));
  }

  //Funcion actualizar
  function actBroker(
    fName,
    lName,
    phone,
    secPhone,
    email,
    idCard,
    birth,
    profilePic,
    entry,
    gender,
    idUser,
    num
  ) {
    axios
      .put(`http://localhost:5000/broker/${num}`, {
        firstName: fName,
        lastName: lName,
        phone: phone,
        secondaryPhone: secPhone,
        email: email,
        idCard: idCard,
        birthDate: birth,
        profilePhoto: profilePic,
        entryDate: entry,
        gender: gender,
        idUser: idUser,
      })
      .then((res) => console.log(res));
  }

  //DEL USER WORKS
  function delBroker(num) {
    axios
      .delete(`http://localhost:5000/broker/${num}`)
      .then((res) => console.log(res));
  }

  //Get users WORKS
  const { data: broker } = useFetch("http://localhost:5000/broker");

  //GET USER BY ID WORKS
  function getBroker(num) {
    axios
      .get(`http://localhost:5000/broker/${num}`)
      .then((res) => console.log(res));
  }

  //TEST GET ATTRIBUTE FILTER

  function filterBroker(atr, value) {
    axios
      .post("http://localhost:5000/broker/specify", {
        attribute: atr,
        value: value,
      })
      .then((res) => console.log(res));
  }

  return { actBroker, delBroker, sendBroker, broker, getBroker, filterBroker };
}

//USAR MODULOS DE FUNCIONES PARA CADA APARTADO
//USAR USE FETCH; FUNCIONES y UN LOG PARA PROBAR

export default Broker;
