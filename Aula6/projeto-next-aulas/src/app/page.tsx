import PostCard from "@/components/ui/PostCard";
import { Post } from "@/types/posts";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
