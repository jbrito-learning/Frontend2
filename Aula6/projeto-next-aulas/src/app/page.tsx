import { NameProvider } from "@/components/context/NameProvider";
import { NameDisplay } from "@/components/context/NameDisplay";
import UserProfile from "@/components/context/UserProfile";

export default function Home() {
  return (
    <NameProvider>
      <div className="container mx-auto">
        <NameDisplay />
        <UserProfile />
      </div>
    </NameProvider>
  );
}
