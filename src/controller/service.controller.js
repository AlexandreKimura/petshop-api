import ServiceService from "../services/service.service.js";

async function createService(req, res, next) {
  try {
    let service = req.body;

    if (!service.description || !service.value || !service.animalId) {
      throw new Error("Description, Value e Animal Id são obrigatórios!");
    }

    service = await ServiceService.createService(service);
    res.send(service);
  } catch (err) {
    next(err);
  }
}

async function getServices(req, res, next) {
  try {
    res.send(await ServiceService.getServices(req.query.proprietario_id));
  } catch (err) {
    next(err);
  }
}

export default {
  createService,
  getServices,
};
