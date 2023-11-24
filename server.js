//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}`)
    console.log(`Este projeto foi desenvolvido por Robson Apolinario - RM95107`)
});