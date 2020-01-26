import express, { request } from "express";
import deptRoutes from "./dept-routes/dept-routes";
import jobRoutes from "./job-routes/job-routes";
import locRoutes from "./location-routes/location-routes";
import { Middleware } from "./services/middleware";
import userRoutes from "./user-routes/user-routes";

// Initialze Constants
const app = express();
const port: any = process.env.PORT || 3000;
// Set body parser, so I can read the body of responses
const bodyParser = express.json();

// Set cors header on every request
app.use((req, res, next) => {
    Middleware.corsHeaders(req, res, next);
});

// Serve static files
// app.use(express.static("public"));
app.use(bodyParser);
// Define routes
app.use("/user", userRoutes);
app.use("/dept", deptRoutes);
app.use("/job", jobRoutes);
app.use("/loc", locRoutes);
// Point at index.html for every route outside of the api routes, if serving static files
// app.get("*", (req, res) => {
//     res.sendFile(process.cwd() + "/public/index.html");
// });

// Set server listening port, and host
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log("Server starting on port " + port);
});
