import pg from "pg";

const POOL = pg.Pool;

export const HRAPP = new POOL({
    host: "localhost",
    user: "hrappadmin",
    password: "hrappadmin",
    database: "hrapp",
    port: 5432,
});
