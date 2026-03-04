"use client";

import { Post } from "@/types/posts";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";

const itemVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
}

const PostList = ({ posts }: { posts: Post[] }) => {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const createPost = (formData: FormData) => {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: formData.get("title"),
            body: formData.get("body"),
            userId: 1,
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <div>
                <h1>Create Post</h1>
                <form action={createPost} className="flex flex-col gap-2">
                    <input className="border-2 border-gray-300 bg-white text-black rounded-md p-2" type="text" name="title" placeholder="Title" />
                    <input className="border-2 border-gray-300 bg-white text-black rounded-md p-2" type="text" name="body" placeholder="Body" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600" type="submit">Create</button>
                </form>
            </div>
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
        </div>

    );
};

export default PostList;
