import express from "express";
import deptRoutes from "./dept-routes/dept-routes";
import jobRoutes from "./job-routes/job-routes";
import locRoutes from "./location-routes/location-routes";
import userRoutes from "./user-routes/user-routes";

const app = express();
const port: any = process.env.PORT || 3000;
const bodyParser = express.json();

app.use(bodyParser);
app.use("/user", userRoutes);
app.use("/dept", deptRoutes);
app.use("/job", jobRoutes);
app.use("/loc", locRoutes);

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log("Server starting on port " + port);
});
