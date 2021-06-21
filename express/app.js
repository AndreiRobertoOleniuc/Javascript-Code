import express from "express";
import PublicController from "./src/controller/UserController.js";

const app = express();
const port = 3000;

//Middleware
app.use(express.json());

//Custom Middleware
app.use((req, res, next) => {
  const formatYmd = (date) => date.toISOString().slice(0, 10);
  console.log(`${req.method} - ${req.url} - ${formatYmd(new Date())}`);
  next();
});

//Router
app.use("/", PublicController);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
