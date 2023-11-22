import { Router } from "express";
import handler from "express-async-handler";
import { ProductModel } from "../models/phone.model.js";

const router = Router();

router.get(
  "/allPhones",
  handler(async (req, res) => {
    const phones = await ProductModel.find({});
    res.send(phones);
  })
);

router.get(
  "/search/:searchTerm",
  handler(async (req, res) => {
    const { searchTerm } = req.params;
    const searchRegex = new RegExp(searchTerm, "i");

    const phones = await ProductModel.find({ name: { $regex: searchRegex } });
    res.send(phones);
  })
);

router.get(
  "/filterProductsByTag/:tag",
  handler(async (req, res) => {
    const { tag } = req.params;
    const tagArray = tag.split(",");
    const phones = await ProductModel.find({ tags: { $all: tagArray } });
    res.send(phones);
  })
);

router.get(
  "/:prodId",
  handler(async (req, res) => {
    const { prodId } = req.params;
    const phones = await ProductModel.findById(prodId);
    res.send(phones);
  })
);
export default router;
