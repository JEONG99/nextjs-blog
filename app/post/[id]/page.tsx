import PostDetail from "@/app/components/PostDetail";
import { BackButton, DeleteButton, EditButton } from "@/app/components/buttons";
import { PostDetailSkeleton } from "@/app/components/skeletons";
import { Suspense } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <main className="p-8">
      <div className="rounded-2xl bg-white p-8 ">
        <div className="flex flex-row justify-between">
          <BackButton />
          <div className="flex flex-row gap-2">
            <EditButton />
            <DeleteButton />
          </div>
        </div>
        <Suspense fallback={<PostDetailSkeleton />}>
          <PostDetail id={id} />
        </Suspense>
      </div>
    </main>
  );
}
