import Animal from "../models/animal.model.js";
import Owner from "../models/owner.model.js";

async function insertAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
  }
}

async function getAnimals() {
  try {
    return await Animal.findAll();
  } catch (err) {
    throw err;
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id, { raw: true });
  } catch (err) {
    throw err;
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: {
        id: animal.id,
      },
    });
    return await getAnimal(animal.id);
  } catch (err) {
    throw err;
  }
}

async function deleteAnimal(id) {
  try {
    await Animal.destroy({
      where: {
        id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getAnimalByOwner(ownerId) {
  try {
    return await Animal.findAll({
      include: [
        {
          model: Owner,
          where: {
            id: ownerId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertAnimal,
  getAnimals,
  getAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimalByOwner,
};
