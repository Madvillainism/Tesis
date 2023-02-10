
import { AdjPack } from "../models/AdjPackModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllAdjPacks = async (req, res) => {
  try {
    const adjPacks = await AdjPack.findAll();
    res.json(adjPacks);
  } catch (error) {
    res.json({ message: error.message })
  }
}


const getAdjPackById = async (req, res) => {
  const { id } = req.params;
  try {
    const adjPack = await AdjPack.findByPk(id);
    res.json(adjPack);
  } catch (error) {
    res.json({ message: error.message });
  }
}

const getAdjPack = async (req, res) => {
  const { attribute, value } = req.body;
  try {
    const adjPacks = await AdjPack.findAll({
      where: {
        [attribute]: value
      }
    })
    res.json(adjPacks);
  } catch (error) {
    res.json({ message: error.message })
  }
}

const createAdjPack = async (req, res) => {
  const {
    type,
    location,
  } = req.body;
  try {
    await AdjPack.create({
      type,
      location,
    });
    res.json({ message: "Registro Completado" });
  } catch (error) {
    res.json({ message: error.message })
  }
}

const updateAdjPack = async (req, res) => {
  const {
    type,
    location,
  } = req.body;
  const { id } = req.params;
  try {
    await AdjPack.update({
      type,
      location,
    }, {
      where: { id: id }
    });
    res.json({ message: "Paquete Adjunto Actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const deleteAdjPack = async (req, res) => {
  const { id } = req.params;
  try {
    await AdjPack.destroy({
      where: { id: id }
    });
    res.json({ message: "Paquete Adjunto Eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const createManyAdjPacks = async (req, res) => {
  const { n } = req.params;
  const types = ["CONTRACT", "CASUALTY", "PAYREPORT"];
  const locations = ["/pack1/102354","/pack5/1847","/pack10/7845","/pack15/aks45","pack78/54123"];
  let type, location;
  for (let x = 0; x < n; x++) {
    type = getRandom(types);
    location = getRandom(locations);
    try {
      await AdjPack.create({
        type,
        location,
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
  res.json({ message: "Paquetes Adjuntos Creados" });
}

export {
  getAllAdjPacks,
  getAdjPack,
  getAdjPackById,
  createAdjPack,
  createManyAdjPacks,
  updateAdjPack,
  deleteAdjPack,
}