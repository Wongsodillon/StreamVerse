import React, { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Place1 from "@/assets/place1.webp";
import Place2 from "@/assets/place2.jpg";
import Place3 from "@/assets/place3.jpg";
import Place4 from "@/assets/place4.jpg";
import Thumbnail from "@/components/Thumbnail";
import "@/layouts/page.css";

const Dashboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };
  const navigate = useNavigate();
  const showSlider = (type: string) => {
    let newIndex;
    if (type === "next") {
      newIndex = currentIndex === 3 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? 3 : currentIndex - 1;
    }
    setCurrentIndex(newIndex);
  };

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="grid-cols-12">
        <section className="m-0 p-0 pb-20">
          <div className="flex flex-wrap mx-auto ">
            <div className="w-full">
              {/* carousel */}
              <div className="relative h-[60vh] sm:h[100vh] mt-0 p-0 carousel">
                <div className="list">
                  {/* slide */}
                  <div
                    className={
                      currentIndex === 0
                        ? "item active"
                        : "absolute inset-0 w-full h-full"
                    }
                  >
                    <img
                      className="w-full h-full object-cover overflow-hidden brightness-75"
                      src={Place1}
                    ></img>
                    <div className="absolute w-[90%] pr-[50%] pl-[1%] top-[40%] max-w-full left-1/2 transform -translate-x-1/2 box-border text-white ">
                      <div style={{ fontWeight: "bold", letterSpacing: "2px" }}>
                        Game Category
                      </div>
                      <div
                        className="title"
                        style={{
                          fontSize: "3.5em",
                          fontWeight: "bold",
                          lineHeight: "1.3em",
                        }}
                      >
                        James Dillon{" "}
                      </div>
                      <div className="des" style={{ fontSize: 20 }}>
                        1 on 1 Death Match Valorant Tournament
                      </div>
                      <div>
                        <div className="flex pt-2 items-center">
                          <Avatar className="w-14 h-14">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div className="p-4">James Dillon Gaming </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Button
                          className="w-1/3"
                          variant={"secondary"}
                          onClick={() => navigate("/streaming")}
                        >
                          Watch
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      currentIndex === 1
                        ? "item active"
                        : "absoulte inset-0 w-full h-full"
                    }
                  >
                    <img
                      className="w-full h-full object-cover overflow-hidden"
                      src={Place2}
                    ></img>
                    <div
                      className="content absolute w-[90%] max-w-full left-1/2 transform -translate-x-1/2 box-border text-white "
                      style={{
                        paddingRight: "50%",
                        paddingLeft: "1%",
                        top: "40%",
                      }}
                    >
                      <div style={{ fontWeight: "bold", letterSpacing: "2px" }}>
                        Game Category
                      </div>
                      <div
                        className="title"
                        style={{
                          fontSize: "3.5em",
                          fontWeight: "bold",
                          lineHeight: "1.3em",
                        }}
                      >
                        James Dillon{" "}
                      </div>
                      <div className="des" style={{ fontSize: 20 }}>
                        1 on 1 Death Match Valorant Tournament.
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      currentIndex === 2
                        ? "item active"
                        : "absoulte inset-0 w-full h-full"
                    }
                  >
                    <img
                      className="w-full h-full object-cover overflow-hidden"
                      src={Place3}
                    ></img>
                    <div
                      className="content absolute w-[90%] max-w-full left-1/2 transform -translate-x-1/2 box-border text-white "
                      style={{
                        paddingRight: "50%",
                        paddingLeft: "1%",
                        top: "40%",
                      }}
                    >
                      <div style={{ fontWeight: "bold", letterSpacing: "2px" }}>
                        Game Category
                      </div>
                      <div
                        className="title"
                        style={{
                          fontSize: "3.5em",
                          fontWeight: "bold",
                          lineHeight: "1.3em",
                        }}
                      >
                        James Dillon{" "}
                      </div>
                      <div className="des" style={{ fontSize: 20 }}>
                        1 on 1 Death Match Valorant Tournament
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      currentIndex === 3
                        ? "item active"
                        : "absoulte inset-0 w-full h-full"
                    }
                  >
                    <img
                      className="w-full h-full object-cover overflow-hidden"
                      src={Place4}
                    ></img>
                    <div
                      className="content absolute w-[90%] max-w-full left-1/2 transform -translate-x-1/2 box-border text-white  "
                      style={{
                        paddingRight: "50%",
                        paddingLeft: "1%",
                        top: "40%",
                      }}
                    >
                      <div style={{ fontWeight: "bold", letterSpacing: "2px" }}>
                        Game Category
                      </div>
                      <div
                        className="title"
                        style={{
                          fontSize: "3.5em",
                          fontWeight: "bold",
                          lineHeight: "1.3em",
                        }}
                      >
                        James Dillon{" "}
                      </div>
                      <div className="des" style={{ fontSize: 20 }}>
                        1 on 1 Death Match Valorant Tournament
                      </div>
                    </div>
                  </div>
                </div>
                {/* thumbnail */}

                <div className="thumbnail">
                  <div
                    className={currentIndex === 0 ? "item active" : "item"}
                    onClick={() => handleThumbnailClick(0)}
                  >
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={Place1}
                    ></img>
                    <div className="absolute text-white bottom-4 left-4 right-2">
                      <div className="title" style={{ fontWeight: "700" }}>
                        Taka
                      </div>
                    </div>
                  </div>
                  <div
                    className={currentIndex === 1 ? "item active" : "item"}
                    onClick={() => handleThumbnailClick(1)}
                  >
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={Place2}
                    ></img>
                    <div className="absolute text-white bottom-4 left-4 right-2">
                      <div className="title" style={{ fontWeight: "700" }}>
                        Komodo
                      </div>
                    </div>
                  </div>
                  <div
                    className={currentIndex === 2 ? "item active" : "item"}
                    onClick={() => handleThumbnailClick(2)}
                  >
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={Place3}
                    ></img>
                    <div className="absolute text-white bottom-4 left-4 right-2">
                      <div className="title" style={{ fontWeight: "700" }}>
                        Padar
                      </div>
                    </div>
                  </div>
                  <div
                    className={currentIndex === 3 ? "item active" : "item"}
                    onClick={() => handleThumbnailClick(3)}
                  >
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={Place4}
                    ></img>
                    <div className="absolute text-white bottom-4 left-4 right-2">
                      <div className="title" style={{ fontWeight: "700" }}>
                        Pink
                      </div>
                    </div>
                  </div>
                </div>

                <Thumbnail />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="p-6">
        <div className="flex justify-center gap-6">
          <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place4} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 1</h3>
            <p className="text-sm mt-1">
              Card description goes here. This is a brief overview of the
              content.
            </p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place2} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 2</h3>
            <p className="text-sm mt-1">
              Card description goes here. This is a brief overview of the
              content.
            </p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place3} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 3</h3>
            <p className="text-sm mt-1">
              Card description goes here. This is a brief overview of the
              content.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-center gap-6">
          <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place4} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 1</h3>
            <p className="text-sm mt-1">
              Card description goes here. This is a brief overview of the
              content.
            </p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place2} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 2</h3>
            <p className="text-sm mt-1">
              Card description goes here. This is a brief overview of the
              content.
            </p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place3} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 3</h3>
            <p className="text-sm mt-1">
              Card description goes here. This is a brief overview of the
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
