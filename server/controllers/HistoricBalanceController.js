
import { HistoricBalance } from "../models/HistoricBalanceModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllHistoricBalances = async (req, res) => {
  try {
    const historicBalances = await HistoricBalance.findAll();
    res.json(historicBalances);
  } catch (error) {
    res.json({ message: error.message })
  }
}


const getHistoricBalanceById = async (req, res) => {
  const { id } = req.params;
  try {
    const historicBalance = await HistoricBalance.findByPk(id);
    res.json(historicBalance);
  } catch (error) {
    res.json({ message: error.message });
  }
}

const getHistoricBalance = async (req, res) => {
  const { attribute, value } = req.body;
  try {
    const historicBalances = await HistoricBalance.findAll({
      where: {
        [attribute]: value
      }
    })
    res.json(historicBalances);
  } catch (error) {
    res.json({ message: error.message })
  }
}

const createHistoricBalance = async (req, res) => {
  const {
    balance,
    updateDate,
    idContract,
    idPayReport
  } = req.body;
  try {
    await HistoricBalance.create({
      balance,
      updateDate,
      idContract,
      idPayReport
    });
    res.json({ message: "Registro Completado" });
  } catch (error) {
    res.json({ message: error.message })
  }
}

const updateHistoricBalance = async (req, res) => {
  const {
    balance,
    updateDate,
    idContract,
    idPayReport
  } = req.body;
  const { id } = req.params;
  try {
    await HistoricBalance.update({
      balance,
      updateDate,
      idContract,
      idPayReport
    }, {
      where: { id: id }
    });
    res.json({ message: "Balance Historico Actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const deleteHistoricBalance = async (req, res) => {
  const { id } = req.params;
  try {
    await HistoricBalance.destroy({
      where: { id: id }
    });
    res.json({ message: "Balance Historico Eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const createManyHistoricBalances = async (req, res) => {
  const { n } = req.params;
  const balances = [150.20, 200.40, 65, 80, 100, 452, 78.50, 95.2, 1000, 1200.20];
  const updateDates = ["2000-08-06", "2001-12-19", "2002-11-15", "1999-08-20", "1998-02-18", "2003-11-17"];
  let balance, updateDate, idContract, idPayReport;
  for (let x = 0; x < n; x++) {
    balance = getRandom(balances)
    updateDate = getRandom(updateDates)
    idContract = 1;
    idPayReport = 1;
    try {
      await HistoricBalance.create({
        balance,
        updateDate,
        idContract,
        idPayReport
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
  res.json({ message: "Balances Hitoricos Creados" });
}

export {
  getAllHistoricBalances,
  getHistoricBalance,
  getHistoricBalanceById,
  createHistoricBalance,
  createManyHistoricBalances,
  updateHistoricBalance,
  deleteHistoricBalance,
}