import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('view', path.join(__dirname, 'views'));
server.set('mustache', mustache);

server.use(express.static(path.join(__dirname, '../public')));

//rotas

server.listen(process.env.PORT)