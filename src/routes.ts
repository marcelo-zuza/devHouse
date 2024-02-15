import { Request, Response } from "express";
const { Router } = require("express")

const routes = new Router();

routes.get("/", (req: Request, res: Response) => {
    res.json({ ok: true })
})

module.exports = routes;