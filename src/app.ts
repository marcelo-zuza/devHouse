import { Express } from "express";
const express = require("express");
const routes = require("./routes");


class App{

    public server: any;

    constructor(){
        this.server = express();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }
}

module.exports = new App().server