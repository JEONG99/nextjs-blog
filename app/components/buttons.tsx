"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function EditButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="min-w-[50px] rounded-[5px] bg-cyan-500 p-2 text-2xl font-semibold text-white"
    >
      수정
    </motion.button>
  );
}

export function DeleteButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="min-w-[50px] rounded-[5px] bg-rose-500 p-2 text-2xl font-semibold text-white"
    >
      삭제
    </motion.button>
  );
}

export function BackButton() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="min-w-[50px] rounded-[5px] bg-gray-400 p-2 text-2xl font-semibold text-white"
      onClick={goBack}
    >
      뒤로가기
    </motion.button>
  );
}
