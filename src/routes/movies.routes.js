import { ObjectID } from "bson";
import { Router } from "express";
import { connectDB } from "../database";

const router = Router();

router.get("/", async (req, res) => {

  let title = req.query.title;
  let year = Number(req.query.year);

  const db = await connectDB();
  const movies = db.collection("movies");
  const query = {};
  console.log(Number.isInteger(year));
  if (year) {
    query.year = { $eq: parseInt(year) };
  }
  if(title) {
    query.title = { $regex: title };
  };
  const options = {
    sort: { title: 1 },
    projection: { _id: 1, title: 1, year: 1 },
  };
  console.log(query);
  const result = await movies.find(query, options).toArray();
  res.json(result);
});

router.post("/", async (req,res) => {
  const db = await connectDB();
  const movies = db.collection('movies');
  const doc = req.body;
  const result = await movies.insertOne(doc);
  console.log(`Document inserted with _id: ${result.insertedId}`);
  res.json('Movie creted');
});

router.put("/", async (req,res) => {
  const db = await connectDB();
  const movies = db.collection('movies');
  const filter = { year: Number(req.query.year) };
  const options = { upsert: false };
  const updateDoc = {
    $set: {
      title: req.body.title
    }
  };
  const result = await movies.updateOne(filter, updateDoc, options);
  console.log(`Documents updated  : ${result.modifiedCount}`);
  res.json('Movie updated');
});

router.delete("/:id", async (req,res) => {
  const db = await connectDB();
  const movies = db.collection('movies');

  const { id } = req.params;
  const query = { _id: ObjectID(id) };
  const result = await movies.deleteOne(query);
  console.log(`Documents deleted  : ${result.deletedCount}`);
  res.json('Movie deleted');
});

export default router;
 