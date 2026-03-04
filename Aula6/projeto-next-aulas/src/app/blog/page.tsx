import PostList from "@/components/blog/PostList";
import { Post } from "@/types/posts";
import axios from "axios";

const BlogPage = async () => {
    const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return (
        <div className="container mx-auto">
            <PostList posts={posts as Post[]} />
        </div>
    );
};

export default BlogPage;