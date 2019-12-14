import { NextFunction, Response } from "express";

export abstract class Middleware {

    public static corsHeaders(req, res: Response, next: NextFunction) {
        res.set({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, OPTIONS"
        });
        next();
    }
}
