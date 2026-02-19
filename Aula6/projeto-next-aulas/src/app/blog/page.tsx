import PostCard from "@/components/ui/PostCard";
import { Post } from "@/types/posts";

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

const BlogPage = async () => {
    const posts: Post[] = await getPosts();

    return (
        <div className="container mx-auto">
            <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;