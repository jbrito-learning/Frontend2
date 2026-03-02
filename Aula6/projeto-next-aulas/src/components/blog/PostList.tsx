"use client";

import { Post } from "@/types/posts";
import { motion } from "framer-motion";
import Link from "next/link";

const itemVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
}

const PostList = ({ posts }: { posts: Post[] }) => {
    return (
        <motion.div initial="hidden" animate="visible" className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {posts.map((post) => (
                <motion.div key={post.id} variants={itemVariant} transition={{ duration: 1, delay: post.id * 0.2 }} className="bg-gray-100 text-black p-4 rounded-md">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <p className="text-gray-500">{post.body}</p>
                    <p className="text-gray-500">{post.userId}</p>
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default PostList;
