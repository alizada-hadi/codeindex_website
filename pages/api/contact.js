import { client } from "../../client";
export default async function handler(req, res) {
  const data = req.body;
  const response = await client.create(data);
  res.status(200).json({ response });
}
