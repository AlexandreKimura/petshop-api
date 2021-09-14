import Service from "../models/service.model.js";
import Animal from "../models/animal.model.js";

async function insertService(service) {
  try {
    return await Service.create(service);
  } catch (err) {
    throw err;
  }
}

async function getServices() {
  try {
    return await Service.findAll();
  } catch (err) {
    throw err;
  }
}

async function getServicesByAnimals(animalsId) {
  try {
    return await Service.findAll({
      include: [
        {
          model: Animal,
          where: {
            id: animalsId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertService,
  getServices,
  getServicesByAnimals,
};
