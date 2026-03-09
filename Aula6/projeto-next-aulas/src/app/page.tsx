import { NameProvider } from "@/components/context/NameProvider";
import { NameDisplay } from "@/components/context/NameDisplay";
import UserProfile from "@/components/context/UserProfile";
import UserList from "@/components/home/UserList";

export default function Home() {
  return (
    <NameProvider>
      <div className="container mx-auto mt-20 flex flex-col items-center justify-center gap-20">
        <NameDisplay />
        <UserProfile />
        <UserList />
      </div>
    </NameProvider>
  );
}
