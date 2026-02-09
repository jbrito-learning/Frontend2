"use client";

import { useEffect, useState } from "react";
import { Post } from "@/types/posts";
import PostCard from "./PostCard";

const PostsList = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);


    return (
        <div className="flex flex-col gap-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsList;