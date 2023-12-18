import { MongoClient } from "mongodb";
const url = process.env.MONGODB_CODE || "";
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._MONGO) {
    global._MONGO = new MongoClient(url).connect();
  }
  connectDB = global._MONGO;
} else {
  connectDB = new MongoClient(url).connect();
}

export { connectDB };
