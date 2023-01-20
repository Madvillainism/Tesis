
import { PayReport } from "../models/PayReportModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllPayReports = async (req, res) => {
  try {
    const payReports = await PayReport.findAll();
    res.json(payReports);
  } catch (error) {
    res.json({ message: error.message })
  }
}


const getPayReportById = async (req, res) => {
  const { id } = req.params;
  try {
    const payReport = await PayReport.findByPk(id);
    res.json(payReport);
  } catch (error) {
    res.json({ message: error.message });
  }
}

const getPayReport = async (req, res) => {
  const { attribute, value } = req.body;
  try {
    const payReports = await PayReport.findAll({
      where: {
        [attribute]: value
      }
    })
    res.json(payReports);
  } catch (error) {
    res.json({ message: error.message })
  }
}

const createPayReport = async (req, res) => {
  const {
    idTypePayment,
    amount,
    state,
    reference,
    description,
    idContract,
    creationDate,
    checkDate,
  } = req.body;
  try {
    await PayReport.create({
      idTypePayment,
      amount,
      state,
      reference,
      description,
      idContract,
      creationDate,
      checkDate,
    });
    res.json({ message: "Registro Completado" });
  } catch (error) {
    res.json({ message: error.message })
  }
}

const updatePayReport = async (req, res) => {
  const {
    idTypePayment,
    amount,
    state,
    reference,
    description,
    idContract,
    creationDate,
    checkDate,
  } = req.body;
  const { id } = req.params;
  try {
    await PayReport.update({
      idTypePayment,
      amount,
      state,
      reference,
      description,
      idContract,
      creationDate,
      checkDate,
    }, {
      where: { id: id }
    });
    res.json({ message: "Reporte de Pago Actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const deletePayReport = async (req, res) => {
  const { id } = req.params;
  try {
    await PayReport.destroy({
      where: { id: id }
    });
    res.json({ message: "Reporte de Pago Eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const createManyPayReports = async (req, res) => {
  const { n } = req.params;
  const amounts = [150.20, 200.40, 65, 80, 100, 452, 78.50, 95.2, 1000, 1200.20];
  const states = ['EN ESPERA', 'DENEGADO', 'CONFIRMADO'];
  const references = ["AB98745", "ACF548", "ER78023", "JAS387SD", "LKCR231", "ZUL1805", "XCD4594", "WAP7456"];
  const descriptions = ["Pago delmes de Enero", "Pago pendiente del 15-02-2023", "Pago Realizado"];
  const creationDates = ["2000-08-06", "2001-12-19", "2002-11-15", "1999-08-20", "1998-02-18", "2003-11-17"];
  const checkDates = ["2000-08-06", "2001-12-19", "2002-11-15", "1999-08-20", "1998-02-18", "2003-11-17"];
  let idTypePayment, amount, state, reference, description, idContract, creationDate, checkDate;
  for (let x = 0; x < n; x++) {
      idTypePayment = 1;
      amount = getRandom(amounts);
      state = getRandom(states);
      reference = getRandom(references);
      description = getRandom(descriptions);
      idContract = 2;
      creationDate = getRandom(creationDates);
      checkDate = getRandom(checkDates);
    try {
      await PayReport.create({
        idTypePayment,
        amount,
        state,
        reference,
        description,
        idContract,
        creationDate,
        checkDate,
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
  res.json({ message: "Reportes de Pago Creados" });
}

export {
  getAllPayReports,
  getPayReport,
  getPayReportById,
  createPayReport,
  createManyPayReports,
  updatePayReport,
  deletePayReport,
}