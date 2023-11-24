import express from "express";
import connectToDataBase from "./config/dbConnect.js";
import routes from "../src/routes/index.js";
// const cors = require("cors");
import cors from "cors";

const connection = await connectToDataBase();

connection.on("error", (error) => {
    console.error("Erro de conexão", error);
});

connection.once("open", ()=> {
    console.log("Conexão establecida com sucesso.");
})

const app = express();
app.use(cors({origin: "*"}));
routes(app);

app.delete("/pets/:id", (req, res) => {
    const index = buscaPet(req.params.id);
    pets.splice(index, 1);
    res.status(200).send("Pet deletado com sucesso.");
} );

export default app;

