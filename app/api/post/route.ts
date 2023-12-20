import { connectDB } from "@/app/lib/database";
import { IPost } from "@/app/lib/definitions";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const client = await connectDB;
  const database = client.db("blog");
  try {
    const posts = await database.collection("post").find().toArray();
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(post: IPost): Promise<NextResponse> {
  const client = await connectDB;
  const database = client.db("blog");
  try {
    await database.collection("post").insertOne(post);
    return NextResponse.json({ message: "successful" });
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
