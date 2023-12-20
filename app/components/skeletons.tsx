import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DeleteButton, EditButton } from "./buttons";

function PostSkeleton() {
  return (
    <li className="mb-6 cursor-pointer rounded-2xl bg-white p-6 shadow-md ">
      <Skeleton width={200} height={25} />
      <div className="flex flex-col gap-2">
        <Skeleton style={{ marginTop: "1.25rem" }} width={250} height={20} />
        <Skeleton width={300} height={20} />
        <Skeleton
          style={{ marginTop: -4, marginBottom: "1.25rem" }}
          width={220}
          height={20}
        />
      </div>
      <div className="flex flex-row gap-2">
        <EditButton />
        <DeleteButton />
      </div>
    </li>
  );
}

export function PostListSkeleton() {
  return (
    <ul>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </ul>
  );
}

export function PostDetailSkeleton() {
  return (
    <div className="py-8">
      <Skeleton width={200} height={30} />
      <div className="flex flex-col gap-2">
        <Skeleton style={{ marginTop: "1.25rem" }} width={300} height={20} />
        <Skeleton width={350} height={20} />
        <Skeleton
          style={{ marginTop: -4, marginBottom: "1.25rem" }}
          width={320}
          height={20}
        />
      </div>
      <hr />
      <ul className="py-6">
        <Skeleton style={{ marginBottom: "1rem" }} width={250} height={20} />
        <Skeleton style={{ marginBottom: "1rem" }} width={250} height={20} />
        <Skeleton style={{ marginBottom: "1rem" }} width={250} height={20} />
        <Skeleton style={{ marginBottom: "1rem" }} width={250} height={20} />
        <Skeleton style={{ marginBottom: "1rem" }} width={250} height={20} />
        <Skeleton style={{ marginBottom: "1rem" }} width={250} height={20} />
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
