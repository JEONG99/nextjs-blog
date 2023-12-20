"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex flex-row gap-5 bg-cyan-500 px-10 py-10">
      <Link href="/">
        <span
          className={clsx(
            "text-5xl font-semibold",
            pathname === "/" ? "text-rose-500" : "text-white",
          )}
        >
          Home
        </span>
      </Link>
      <Link href="/post">
        <span
          className={clsx(
            "text-5xl font-semibold",
            pathname.startsWith("/post") ? "text-rose-500" : "text-white",
          )}
        >
          Post
        </span>
      </Link>
    </header>
  );
}
