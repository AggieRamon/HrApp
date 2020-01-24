import pg from "pg";

const POOL = pg.Pool;

export const HRAPP = new POOL({
    host: "localhost",
    user: process.env.HRAPPUSER,
    password: process.env.HRAPPPWD,
    database: "hrapp",
    port: 5432,
});
