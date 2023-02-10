
import { Casualty } from "../models/CasualtyModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllCasualties = async (req, res) => {
  try {
    const casualties = await Casualty.findAll();
    res.json(casualties);
  } catch (error) {
    res.json({ message: error.message })
  }
}


const getCasualtyById = async (req, res) => {
  const { id } = req.params;
  try {
    const casualty = await Casualty.findByPk(id);
    res.json(casualty);
  } catch (error) {
    res.json({ message: error.message });
  }
}

const getCasualty = async (req, res) => {
  const { attribute, value } = req.body;
  try {
    const casualties = await Casualty.findAll({
      where: {
        [attribute]: value
      }
    })
    res.json(casualties);
  } catch (error) {
    res.json({ message: error.message })
  }
}

const createCasualty = async (req, res) => {
  const {
    casualtyDate,
    insertDate,
    subject,
    description,
    idContract,
  } = req.body;
  try {
    await Casualty.create({
      casualtyDate,
      insertDate,
      subject,
      description,
      idContract,
    });
    res.json({ message: "Registro Completado" });
  } catch (error) {
    res.json({ message: error.message })
  }
}

const updateCasualty = async (req, res) => {
  const {
    casualtyDate,
    insertDate,
    subject,
    description,
    idContract,
  } = req.body;
  const { id } = req.params;
  try {
    await Casualty.update({
      casualtyDate,
      insertDate,
      subject,
      description,
      idContract,
    }, {
      where: { id: id }
    });
    res.json({ message: "Insidente Actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const deleteCasualty = async (req, res) => {
  const { id } = req.params;
  try {
    await Casualty.destroy({
      where: { id: id }
    });
    res.json({ message: "Insidente Eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const createManyCasualties = async (req, res) => {
  const { n } = req.params;
  const casualtyDates = ["2000-08-06", "2001-12-19", "2002-11-15", "1999-08-20", "1998-02-18", "2003-11-17"];
  const insertDates = ["2000-08-06", "2001-12-19", "2002-11-15", "1999-08-20", "1998-02-18", "2003-11-17"];
  const subjects = ["Accidente de Transito", "Consulta Medica", "Infarto y Emergencia", "Accidente Hogar"];
  let casualtyDate, insertDate, subject, description, idContract;
  for (let x = 0; x < n; x++) {
    casualtyDate = getRandom(casualtyDates);
    insertDate = getRandom(insertDates);
    subject = getRandom(subjects);
    description = "...";
    idContract = 1;
    try {
      await Casualty.create({
        casualtyDate,
        insertDate,
        subject,
        description,
        idContract,
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
  res.json({ message: "Incidentes Creados" });
}

export {
  getAllCasualties,
  getCasualty,
  getCasualtyById,
  createCasualty,
  createManyCasualties,
  updateCasualty,
  deleteCasualty,
}