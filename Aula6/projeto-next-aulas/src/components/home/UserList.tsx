import { getBaseUrl } from "@/lib/utils";

interface User {
    id: number;
    name: string;
    email: string;
}

const UserList = async () => {
    const baseUrl = await getBaseUrl();
    const response = await fetch(`${baseUrl}/api/users`);
    const users = await response.json();

    return (
        <div>
            <h1>User List</h1>
            {users.map((user: User) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;