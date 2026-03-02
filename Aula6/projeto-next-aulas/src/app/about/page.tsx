import Counter from "@/components/ui/Counter";
import Clock from "@/components/ui/Clock";

const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Counter />
            <div className="h-[1000px] mt-2 w-full bg-red-500"></div>
            <Clock />
            <div className="h-[1000px] mt-2 w-full bg-blue-500"></div>
        </div>
    );
};

export default AboutPage;