"use client";

import { useRouter } from "next/navigation";
import { IPost } from "../lib/definitions";
import { motion } from "framer-motion";
import { DeleteButton, EditButton } from "./buttons";

export default function Post({ post }: { post: IPost }) {
  const router = useRouter();

  const goPostDetail = () => {
    router.push(`/post/${post._id + ""}`);
  };

  return (
    <motion.li
      transition={{ duration: 0.2 }}
      whileHover={{
        scale: 1.01,
        translateY: -5,
      }}
      className="mb-6 cursor-pointer rounded-2xl bg-white p-6 shadow-md"
      onClick={goPostDetail}
    >
      <h4 className="text-4xl font-semibold">{post.title}</h4>
      <p className="font-medinum my-5 pl-1 text-2xl text-gray-600">
        {post.content}
      </p>
      <div className="flex flex-row gap-2">
        <EditButton />
        <DeleteButton />
      </div>
    </motion.li>
  );
}
