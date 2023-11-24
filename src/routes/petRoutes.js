import express from "express";
import PetController from "../controllers/petController.js";

const routes = express.Router();

routes.get("/pets", PetController.listarPets);
routes.get("/pets/busca", PetController.listarPetPorNome);
routes.get("/pets/:id", PetController.listarPetPorId);
routes.post("/pets", PetController.cadastrarPet);
routes.put("/pets/:id", PetController.atualizarPet);
routes.delete("/pets/:id", PetController.excluirPet);


export default routes;