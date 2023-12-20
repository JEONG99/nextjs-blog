import { Suspense } from "react";
import PostList from "../components/PostList";
import { PostListSkeleton } from "../components/skeletons";

export default function Page() {
  return (
    <main className="p-8">
      <Suspense fallback={<PostListSkeleton />}>
        <PostList />
      </Suspense>
    </main>
  );
}
