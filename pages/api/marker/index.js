import { dbConnect } from "@/utils/dbConnection";
import Marker from "@/models/marker";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const markers = await Marker.find({});
        res.status(200).json({ success: true, data: markers });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const marker = await Marker.create(body);
        res.status(201).json({ success: true, data: marker });
      }
      catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
