import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);
  res.send("Something is crazy here");
  //   res.status(200).json({ number: Math.floor(Math.random() * 10) });
};
