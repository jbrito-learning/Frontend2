import { Post } from "@/types/posts";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
    return (
        <div className="bg-gray-100 text-black p-4 rounded-md">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="text-gray-500">{post.body}</p>
            <p className="text-gray-500">{post.userId}</p>
            <Link href={`/blog/${post.id}`}>Read More</Link>
        </div>
    );
};

export default PostCard;