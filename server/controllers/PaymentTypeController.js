
import { PaymentType } from "../models/PaymentTypeModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllPaymentTypes = async (req, res) => {
  try {
    const paymentTypes = await PaymentType.findAll();
    res.json(paymentTypes);
  } catch (error) {
    res.json({ message: error.message })
  }
}


const getPaymentTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const paymentType = await PaymentType.findByPk(id);
    res.json(paymentType);
  } catch (error) {
    res.json({ message: error.message });
  }
}

const getPaymentType = async (req, res) => {
  const { attribute, value } = req.body;
  try {
    const paymentTypes = await PaymentType.findAll({
      where: {
        [attribute]: value
      }
    })
    res.json(paymentTypes);
  } catch (error) {
    res.json({ message: error.message })
  }
}

const createPaymentType = async (req, res) => {
  const {
    name,
    currency
  } = req.body;
  try {
    await PaymentType.create({
      name,
      currency
    });
    res.json({ message: "Registro Completado" });
  } catch (error) {
    res.json({ message: error.message })
  }
}

const updatePaymentType = async (req, res) => {
  const {
    name,
    currency
  } = req.body;
  const { id } = req.params;
  try {
    await PaymentType.update({
      name,
      currency
    }, {
      where: { id: id }
    });
    res.json({ message: "Tipo de Pago Actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const deletePaymentType = async (req, res) => {
  const { id } = req.params;
  try {
    await PaymentType.destroy({
      where: { id: id }
    });
    res.json({ message: "Tipo de Pago Eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const createManyPaymentTypes = async (req, res) => {
  const { n } = req.params;
  const names = ["Zelle", "Zinly", "Ubipago", "Pago Movil", "Transferencia", "Efectivo"];
  const currencies = ["USD", "BS"];
  let name, currency;
  for (let x = 0; x < n; x++) {
    name = getRandom(names);
    currency = getRandom(currencies);
    try {
      await PaymentType.create({ name, currency });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
  res.json({ message: "Tipos de Pago Creados" });
}

export {
  getAllPaymentTypes,
  getPaymentType,
  getPaymentTypeById,
  createPaymentType,
  createManyPaymentTypes,
  updatePaymentType,
  deletePaymentType,
}