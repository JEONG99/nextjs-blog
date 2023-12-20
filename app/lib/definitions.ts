import { ObjectId } from "mongodb";

interface IComment {
  id: ObjectId;
  content_id: string;
  name: string;
  text: string;
}

export interface IPost {
  _id: ObjectId;
  title: string;
  content: string;
  comments: IComment[];
}
