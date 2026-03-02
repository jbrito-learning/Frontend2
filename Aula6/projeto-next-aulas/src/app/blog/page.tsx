import PostList from "@/components/blog/PostList";
import { Post } from "@/types/posts";

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

const BlogPage = async () => {
    const posts: Post[] = await getPosts();

    return (
        <div className="container mx-auto">
            <PostList posts={posts} />
        </div>
    );
};

export default BlogPage;