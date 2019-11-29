
import express, { Router } from "express";
import { HRAPP } from "../services/db";
import { Queries } from "../services/queries";

class LocationRoutes {
    public readonly router: Router;
    private table: string;
    private UIDField: string;

    public constructor(table: string, UIDField: string) {
        this.router = express.Router();
        this.table = table;
        this.UIDField = UIDField;
        this.buildRoutes();
    }

    private buildRoutes() {
        this.router.get("/", (req, res) => {
            HRAPP.query(Queries.selectAll(this.table), (err, result) => {
                if (err) {
                    throw err;
                }

                res.status(200).json(result.rows);
            });
        });

        this.router.get("/:id", (req, res) => {
            const ID = req.params.id;
            HRAPP.query(Queries.selectById(this.table, this.UIDField, ID), (err, result) => {
                if (err) {
                    throw err;
                }

                res.status(200).json(result.rows);
            });
        });

        this.router.post("/", (req, res) => {
            const BODY = req.body;
            HRAPP.query(Queries.insert(BODY, this.table), (err, result) => {
                if (err) {
                    throw err;
                }

                res.sendStatus(201);
            });
        });

        this.router.put("/:id", (req, res) => {
            const ID = req.params.id;
            const BODY = req.body;

            HRAPP.query(Queries.update(BODY, this.table, this.UIDField, ID), (err, result) => {
                if (err) {
                    throw err;
                }

                res.sendStatus(200);
            });
        });

        this.router.delete("/:id", (req, res) => {
            const ID = req.params.id;

            HRAPP.query(Queries.delete(this.table, this.UIDField, ID), (err, results) => {
                if (err) {
                    throw err;
                }

                res.sendStatus(200);
            });
        });
    }
}

export default new LocationRoutes("locations", "code").router;
