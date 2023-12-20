import { ObjectId } from "mongodb";
import { IPost } from "../lib/definitions";
import { connectDB } from "../lib/database";

export default async function PostDetail({ id }: { id: string }) {
  const post = { title: "테스트", content: "테스트 내용" };

  if (!post) return;
  return (
    <div className="py-8">
      <h1 className="text-5xl font-semibold">{post.title}</h1>
      <p className="font-medinum my-8 pl-1 text-3xl text-gray-600">
        {post.content}
      </p>
      <hr />
      <ul className="py-6">
        {/*post.comments.map((comment) => (
          <li key={comment.id + ""} className="mb-3">
            <div>
              <span className="mr-4 text-3xl font-semibold">
                {comment.name}
              </span>
              <span className="text-2xl  font-medium text-gray-600">
                {comment.text}
              </span>
            </div>
          </li>
        ))*/}
      </ul>
      <div className="flex flex-col items-start gap-4">
        <input className="max-w-[300px] rounded-md border border-solid border-gray-800 p-3 text-3xl" />
        <button className="min-w-[50px] rounded-[5px] bg-gray-400 p-2 text-2xl font-semibold text-white">
          댓글작성
        </button>
      </div>
    </div>
  );
}
