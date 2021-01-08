import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = "safdfwwejwdfgdfefwefewfwff";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.status(404).end("error");
    return;
  }
  const { username, password } = req.body;
  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "admin" && password === "admin",
      },
      KEY
    ),
  });
};
