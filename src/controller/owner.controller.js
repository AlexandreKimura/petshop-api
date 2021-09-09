import OwnerService from "../services/owner.service.js";

async function createOwner(req, res, next) {
  try {
    let owner = req.body;

    if (!owner.name || !owner.phone) {
      throw new Error("Name e Phone são obrigatórios!");
    }

    owner = await OwnerService.createOwner(owner);
    res.send(owner);
  } catch (err) {
    next(err);
  }
}

async function getOwners(req, res, next) {
  try {
    res.send(await OwnerService.getOwners());
  } catch (err) {
    next(err);
  }
}

async function getOwner(req, res, next) {
  try {
    const id = req.params.id;
    res.send(await OwnerService.getOwner(id));
  } catch (err) {
    next(err);
  }
}

async function updateOwner(req, res, next) {
  try {
    let owner = req.body;

    if (!owner.id || !owner.name || !owner.phone) {
      throw new Error("Owner ID, Name e Phone são obrigatórios!");
    }

    owner = await OwnerService.updateOwner(owner);
    res.send(owner);
  } catch (err) {
    next(err);
  }
}

async function deleteOwner(req, res, next) {
  try {
    const id = req.params.id;
    res.send(await OwnerService.deleteOwner(id));
  } catch (err) {
    next(err);
  }
}

export default {
  createOwner,
  getOwners,
  getOwner,
  updateOwner,
  deleteOwner,
};
