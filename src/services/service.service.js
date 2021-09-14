import ServiceRepository from "../repositories/service.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createService(service) {
  return await ServiceRepository.insertService(service);
}

async function getServices(ownerId) {
  if (ownerId) {
    const animalsId = [];
    const animals = await AnimalRepository.getAnimalByOwner(ownerId);
    animals.map((animal) => animalsId.push(animal.id));
    return await ServiceRepository.getServicesByAnimals(animalsId);
  }
  return await ServiceRepository.getServices();
}

export default {
  createService,
  getServices,
};
