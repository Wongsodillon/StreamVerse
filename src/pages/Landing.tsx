import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import PurpleShape from "../assets/purple_shape.png";
import Rocket from "../assets/rocket.png";
import PurpleSphere from "../assets/purple_sphere.png";

const Landing = () => {
  return (
    <div className="min-h-screen relative home-background">
      <div className="w-64 h-[44rem] border absolute top-0 drop-shadow-2xl rounded-br-full rounded-bl-full z-0">
        <img src={PurpleShape} className="h-full" />
      </div>
      <div className="w-32 h-32 absolute left-[3%] top-4">
        <img src={PurpleSphere} alt="" />
      </div>
      <div className="w-[32rem] h-64 border border-white yellow-gradient absolute bottom-0 right-0 drop-shadow-2xl rounded-tl-full rounded-bl-full z-0"></div>
      <Navbar />
      <main className="relative flex flex-col-reverse items-center justify-center text-center pt-32 md:flex-row">
        <div className="lg:absolute w-[30rem] h-[30rem] left-0 top-[50%]">
          <img src={Rocket} className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2 items-start md:ml-20">
          <span className="text-[#892EE1] text-7xl font-anton">THEY ARE</span>
          <span className="text-[#FF9A00] text-8xl font-anton">WATCHING</span>
          <br />
          <Button size="xl" className="rounded-3xl px-16 text-xl">
            Lets Start
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Landing;
