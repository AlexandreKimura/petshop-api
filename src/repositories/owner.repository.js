import Owner from "../models/owner.model.js";

async function insertOwner(owner) {
  try {
    return await Owner.create(owner);
  } catch (err) {
    throw err;
  }
}

async function getOwners() {
  try {
    return await Owner.findAll();
  } catch (err) {
    throw err;
  }
}

async function getOwner(id) {
  try {
    return await Owner.findByPk(id, { raw: true });
  } catch (err) {
    throw err;
  }
}

async function updateOwner(owner) {
  try {
    await Owner.update(owner, {
      where: {
        id: owner.id,
      },
    });
    return await getOwner(owner.id);
  } catch (err) {
    throw err;
  }
}

async function deleteOwner(id) {
  try {
    await Owner.destroy({
      where: {
        id,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertOwner,
  getOwners,
  getOwner,
  updateOwner,
  deleteOwner,
};
