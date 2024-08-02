import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen relative home-background">
      <div className="w-64 h-[32rem] border border-white purple-gradient absolute left-[2%] top-0 drop-shadow-2xl rounded-br-full rounded-bl-full z-0"></div>
      <div className="w-[32rem] h-64 border border-white yellow-gradient absolute bottom-0 right-0 drop-shadow-2xl rounded-tl-full rounded-bl-full z-0"></div>
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center pt-32">
        <div className="flex flex-col gap-2 items-start">
          <span className="text-[#892EE1] text-7xl font-anton">THEY ARE</span>
          <span className="text-[#FF9A00] text-8xl font-anton">WATCHING</span>
          <br />
          <Link to="/watch">
            <Button size="xl" className="rounded-3xl px-16 text-xl">
              Lets Start
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Landing;
