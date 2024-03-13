const { json } = require("express");
const server = require("express")();
const cors = require("cors");
server.use(json());
require("dotenv").config();

server.use(cors({
    origin:'*'
}))

const appRouter = require("./src/app");
server.use("/", require("express").static("./Public"));
server.use("/api", appRouter);

server.listen(process.env.PORTSERVER, (tt) => {
  console.log(
    `\x1b[33m[MyServer]\x1b[36m Server na porta ${process.env.PORTSERVER}: http://localhost:${process.env.PORTSERVER} \x1b[0m`
  );
});
