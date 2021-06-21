import { Router } from "express";
import * as UserModel from "../model/UserModel.js";
const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Public");
});

router.get("/user", async (req, res) => {
  const { name } = req.query;
  if (name) {
    res.status(200).send(await UserModel.getUser(name));
  } else {
    res.status(200).send(await UserModel.getAllUser());
  }
});

router.post("/user", async (req, res) => {
  const user = req.body;
  res.status(200).send(await UserModel.postUser(user));
});

router.delete("/user", async (req, res) => {
  const user = req.body;
  res.status(200).send(await UserModel.deleteUser(user));
});

export default router;
