import express from "express";
import AdopterController from "../controllers/adopterController.js";

const routes = express.Router();

routes.get("/adopters", AdopterController.listarAdopters);
routes.get("/adopters/:id", AdopterController.listarAdopterPorId);
routes.post("/adopters", AdopterController.cadastrarAdopter);
routes.put("/adopters/:id", AdopterController.atualizarAdopter);
routes.delete("/adopters/:id", AdopterController.excluirAdopter);


export default routes;