import express from "express";
import pets from "./petRoutes.js";
import adopters from "./adopterRoutes.js";
import inqs  from "./ inquiryRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res
    .status(200)
    .send("FIAP - GRAND FINALE - PROJETO DESENVOLVIDO POR ROBSON APOLINARIO"));

    app.use(express.json(), pets, adopters, inqs);
};

export default routes;