import OwnerRepository from "../repositories/owner.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createOwner(owner) {
  return await OwnerRepository.insertOwner(owner);
}

async function getOwners() {
  return await OwnerRepository.getOwners();
}

async function getOwner(id) {
  return await OwnerRepository.getOwner(id);
}

async function updateOwner(owner) {
  return await OwnerRepository.updateOwner(owner);
}

async function deleteOwner(id) {
  const animal = await AnimalRepository.getAnimalByOwner(id);
  if (animal) {
    throw new Error("Há animais com esse proprietário!");
  }
  await OwnerRepository.deleteOwner(id);
}

export default {
  createOwner,
  getOwners,
  getOwner,
  updateOwner,
  deleteOwner,
};
