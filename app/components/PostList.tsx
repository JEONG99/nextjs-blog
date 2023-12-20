import { IPost } from "../lib/definitions";
import Post from "./Post";

export default async function PostList() {
  const { data: posts } = (await (
    await fetch("http://localhost:3001/api/post")
  ).json()) as { data: IPost[] };

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post._id + ""} post={post} />
      ))}
    </ul>
  );
}
