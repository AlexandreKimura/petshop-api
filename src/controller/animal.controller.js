import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;

    if (!animal.name || !animal.type || !animal.owner_id) {
      throw new Error("Name, Type e Owner_id são obrigatórios!");
    }

    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
  } catch (err) {
    next(err);
  }
}

async function getAnimals(req, res, next) {
  try {
    res.send(await AnimalService.getAnimals(req.query.proprietario_id));
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    const id = req.params.id;
    res.send(await AnimalService.getAnimal(id));
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;

    if (!animal.id || !animal.name || !animal.type || !animal.owner_id) {
      throw new Error("Animal ID, Name, Type e Owner_id são obrigatórios!");
    }

    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    const id = req.params.id;
    res.send(await AnimalService.deleteAnimal(id));
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  updateAnimal,
  deleteAnimal,
};
