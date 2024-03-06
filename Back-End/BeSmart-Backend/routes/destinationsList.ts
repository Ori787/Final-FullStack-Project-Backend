import { Router } from "express";
import mongoose from "mongoose";
import { DestinationModel } from "../model/destination-list-model";

const router = Router();


router.get("/", async (req,res,next) => {
try{

    const destinationsRec = await DestinationModel.find();

    res.json(destinationsRec);

} catch (err) {

    next(err)

};
});

export { router as DestinationRouter };