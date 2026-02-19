async function getPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const post = await getPost(id);
    return (
        <div>
            <h1>Blog Post Page</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <p>{post.userId}</p>
        </div>
    );
}