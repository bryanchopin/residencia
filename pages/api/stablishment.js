import { dbConnect } from "../../../utils/dbConnection";
import Stablishment from "../../../models/stablishment";

dbConnect();

export default async function handler(req, res) {
    const { method, body } = req;
    
    switch (method) {
        // case "GET":
        // try {
        //     const stablishments = await Stablishment.find({});
        //     res.status(200).json({ success: true, data: stablishments });
        // } catch (err) {
        //     res.status(400).json({ success: false });
        // }
        // break;
    
        case "POST":
        try {
            const stablishment = await Stablishment.create(body);
            res.status(201).json({ success: true, data: stablishment });
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