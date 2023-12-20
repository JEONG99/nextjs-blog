import { MongoClient } from "mongodb";

export {};

declare global {
  var _MONGO: Promise<MongoClient>;
}
