"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

function getTodos() {
    return axios.get("https://jsonplaceholder.typicode.com/todos").then(res => res.data);
}

const TodosPage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["todos"],
        queryFn: getTodos,
        staleTime: 5000,
        gcTime: 60000,
    });

    if (isLoading) return <div className="text-center text-2xl font-bold mt-4">Loading...</div>;
    if (error) return <div className="text-center text-2xl font-bold mt-4">Error: {error.message}</div>;

    return (
        <div className="container mx-auto space-y-4 mt-4">
            <h1 className="text-2xl font-bold text-center">Todos</h1>
            {data?.map((todo: Todo) => (
                <div key={todo.id} className="bg-gray-100 text-black p-4 rounded-md">
                    <h2 className="text-lg font-bold">{todo.title}</h2>
                    <p className={todo.completed ? "text-green-500" : "text-red-500"}>{todo.completed ? "Completed" : "Not Completed"}</p>
                </div>
            ))}
        </div>
    );
};


export default TodosPage;