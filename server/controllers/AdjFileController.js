
import { AdjFile } from "../models/AdjFileModel.js";
import { getRandom } from "../utils/toolsFunctions.js";

const getAllAdjFiles = async (req, res) => {
  try {
    const adjFiles = await AdjFile.findAll();
    res.json(adjFiles);
  } catch (error) {
    res.json({ message: error.message })
  }
}


const getAdjFileById = async (req, res) => {
  const { id } = req.params;
  try {
    const adjFile = await AdjFile.findByPk(id);
    res.json(adjFile);
  } catch (error) {
    res.json({ message: error.message });
  }
}

const getAdjFile = async (req, res) => {
  const { attribute, value } = req.body;
  try {
    const adjFiles = await AdjFile.findAll({
      where: {
        [attribute]: value
      }
    })
    res.json(adjFiles);
  } catch (error) {
    res.json({ message: error.message })
  }
}

const createAdjFile = async (req, res) => {
  const {
    name,
    type,
    idAdjPack,
  } = req.body;
  try {
    await AdjFile.create({
      name,
      type,
      idAdjPack,
    });
    res.json({ message: "Registro Completado" });
  } catch (error) {
    res.json({ message: error.message })
  }
}

const updateAdjFile = async (req, res) => {
  const {
    name,
    type,
    idAdjPack,
  } = req.body;
  const { id } = req.params;
  try {
    await AdjFile.update({
      name,
      type,
      idAdjPack,
    }, {
      where: { id: id }
    });
    res.json({ message: "Archivo Adjunto Actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const deleteAdjFile = async (req, res) => {
  const { id } = req.params;
  try {
    await AdjFile.destroy({
      where: { id: id }
    });
    res.json({ message: "Archivo Adjunto Eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const createManyAdjFiles = async (req, res) => {
  const { n } = req.params;
  const types = ["PRINCIPAL","SECUNDARIO"];
  const names = ["Contrato1","Condiciones","Adjuntos","Archivos Extras"];
  let name, type, idAdjPack;
  for (let x = 0; x < n; x++) {
    type = getRandom(types);
    name = getRandom(names);
    idAdjPack = 2;
    try {
      await AdjFile.create({
        name,
        type,
        idAdjPack,
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
  res.json({ message: "Archivos Adjuntos Creados" });
}

export {
  getAllAdjFiles,
  getAdjFile,
  getAdjFileById,
  createAdjFile,
  createManyAdjFiles,
  updateAdjFile,
  deleteAdjFile,
}