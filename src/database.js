import mongodb, { MongoClient } from 'mongodb';
 
const uri = process.env.MONGODB_STRING;

const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    const db = client.db('sample_mflix');
    return db;
  } catch (error) {
    console.log(error); 
  }
}