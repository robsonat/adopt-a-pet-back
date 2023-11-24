import express from "express";
import InquiryController from "../controllers/inquiryController.js";

const routes = express.Router();

routes.get("/inqs", InquiryController.listarInqs);
routes.get("/inqs/:id", InquiryController.listarInqPorId);
routes.post("/inqs", InquiryController.cadastrarInq);
routes.put("/inqs/:id", InquiryController.atualizarInq);
routes.delete("/inqs/:id", InquiryController.excluirInq);


export default routes;