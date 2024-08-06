import React, { useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Place1 from '@/assets/place1.webp';
import Place2 from '@/assets/place2.jpg';
import Place3 from '@/assets/place3.jpg';
import Place4 from '@/assets/place4.jpg';
import Thumbnail from '@/components/Thumbnail';
import '@/layouts/page.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.min.css';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Categories: React.FC = () => {
  const videos = [
    { title: 'Video Title 1', thumbnail: Place1, author: 'Author 1', views: '1M views', time: '1 week ago' },
    { title: 'Video Title 2', thumbnail: Place2, author: 'Author 2', views: '500K views', time: '2 days ago' },
    { title: 'Video Title 3', thumbnail: Place3, author: 'Author 3', views: '800K views', time: '3 days ago' },
    { title: 'Video Title 4', thumbnail: Place4, author: 'Author 4', views: '900K views', time: '5 days ago' },
    { title: 'Video Title 1', thumbnail: Place1, author: 'Author 1', views: '1M views', time: '1 week ago' },
    { title: 'Video Title 2', thumbnail: Place2, author: 'Author 2', views: '500K views', time: '2 days ago' },
    { title: 'Video Title 3', thumbnail: Place3, author: 'Author 3', views: '800K views', time: '3 days ago' },
    { title: 'Video Title 4', thumbnail: Place4, author: 'Author 4', views: '900K views', time: '5 days ago' },
    { title: 'Video Title 1', thumbnail: Place1, author: 'Author 1', views: '1M views', time: '1 week ago' },
    { title: 'Video Title 2', thumbnail: Place2, author: 'Author 2', views: '500K views', time: '2 days ago' },
    { title: 'Video Title 3', thumbnail: Place3, author: 'Author 3', views: '800K views', time: '3 days ago' },
    { title: 'Video Title 4', thumbnail: Place4, author: 'Author 4', views: '900K views', time: '5 days ago' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };
  const navigate = useNavigate();


  const showSlider = (type: string) => {
    let newIndex;
    if (type === 'next') {
      newIndex = currentIndex === 3 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? 3 : currentIndex - 1;
    }
    setCurrentIndex(newIndex);
  };

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="grid-cols-12">
        <section className="m-0 p-0 pb-10">
          <div className="flex flex-wrap mx-auto ">
            <div className="w-full">
              {/* carousel */}
              <div className="relative h-[60vh] sm:h[100vh] mt-0 p-0 carousel">
                <div className="list">
                  {/* slide */}
                  <div className={currentIndex === 0 ? 'item active' : 'absoulte inset-0 w-full h-full'}>
                    <img className="w-full h-full object-cover overflow-hidden" src={Place1}></img>
                    <div className="absolute w-[90%] max-w-full left-1/2 transform -translate-x-1/2 box-border text-white " style={{ paddingRight:"50%", paddingLeft:"1%", top:"40%"}}>
                      <div style={{fontWeight:"bold", letterSpacing:"2px"}}>Game Category</div>
                      <div  className="title" style={{fontSize:"3.5em", fontWeight:"bold", lineHeight:"1.3em"}}>James Dillon </div>
                      <div className="des" style={{fontSize:20}}>  
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
                  <div className={currentIndex === 1 ? 'item active' : 'absoulte inset-0 w-full h-full'}>
                    <img className="w-full h-full object-cover overflow-hidden" src={Place2}></img>
                    <div className="content absolute w-[90%] max-w-full left-1/2 transform -translate-x-1/2 box-border text-white " style={{ paddingRight:"50%", paddingLeft:"1%", top:"40%"}}>
                      <div style={{fontWeight:"bold", letterSpacing:"2px"}}>Game Category</div>
                      <div className="title" style={{fontSize:"3.5em", fontWeight:"bold", lineHeight:"1.3em"}}>James Dillon </div>
                      <div className="des" style={{fontSize:20}}>  
                        1 on 1 Death Match Valorant Tournament.
                      </div>
                    </div>
                  </div>
                  <div className={currentIndex === 2 ? 'item active' : 'absoulte inset-0 w-full h-full'}>
                    <img className='w-full h-full object-cover overflow-hidden' src={Place3}></img>
                    <div className="content absolute w-[90%] max-w-full left-1/2 transform -translate-x-1/2 box-border text-white " style={{ paddingRight:"50%", paddingLeft:"1%", top:"40%"}}>
                      <div style={{fontWeight:"bold", letterSpacing:"2px"}}>Game Category</div>
                      <div className="title" style={{fontSize:"3.5em", fontWeight:"bold", lineHeight:"1.3em"}}>James Dillon </div>
                      <div className="des" style={{fontSize:20}}>  
                        1 on 1 Death Match Valorant Tournament
                      </div>
                    </div>
                  </div>
                  <div className={currentIndex === 3 ? 'item active' : 'absoulte inset-0 w-full h-full'}>
                    <img className ="w-full h-full object-cover overflow-hidden" src={Place4}></img>
                    <div className="content absolute w-[90%] max-w-full left-1/2 transform -translate-x-1/2 box-border text-white  " style={{ paddingRight:"50%", paddingLeft:"1%", top:"40%"}}>
                      <div style={{fontWeight:"bold", letterSpacing:"2px"}}>Game Category</div>
                      <div  className="title" style={{fontSize:"3.5em", fontWeight:"bold", lineHeight:"1.3em"}}>James Dillon </div>
                      <div className="des" style={{fontSize:20}}>  
                        1 on 1 Death Match Valorant Tournament
                      </div>
                    </div>
                  </div>
                </div>
                {/* thumbnail */}

                <div className="thumbnail">
                  <div className={currentIndex === 0 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(0)}>
                    <img className="w-full h-full object-cover rounded-xl" src={Place1}></img>
                    <div className="absolute text-white bottom-4 left-4 right-2">
                      <div className="title" style={{fontWeight:"700"}}>Taka</div>
                    </div>
                  </div>
                  <div className={currentIndex === 1 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(1)}>
                    <img className="w-full h-full object-cover rounded-xl" src={Place2}></img>
                    <div className="absolute text-white bottom-4 left-4 right-2">
                      <div className="title" style={{fontWeight:"700"}}>Komodo</div>
                    </div>
                  </div>
                  <div className={currentIndex === 2 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(2)}>
                    <img className="w-full h-full object-cover rounded-xl" src={Place3}></img>
                    <div className="absolute text-white bottom-4 left-4 right-2">
                      <div className="title" style={{fontWeight:"700"}}>Padar</div>
                    </div>
                  </div>
                  <div className={currentIndex === 3 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(3)}>
                    <img className="w-full h-full object-cover rounded-xl" src={Place4}></img>
                    <div className="absolute text-white bottom-4 left-4 right-2">
                      <div className="title" style={{fontWeight:"700"}}>Pink</div>
                    </div>
                  </div>
                </div>  

              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="p-6">
        <div className="flex justify-center gap-6">
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place4} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 1</h3>
            <p className="text-sm mt-1">Card description goes here. This is a brief overview of the content.</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place2} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 2</h3>
            <p className="text-sm mt-1">Card description goes here. This is a brief overview of the content.</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place3} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 3</h3>
            <p className="text-sm mt-1">Card description goes here. This is a brief overview of the content.</p>
            </div>
        </div>
        </div>

        <div className="p-6">
        <div className="flex justify-center gap-6">
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place4} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 1</h3>
            <p className="text-sm mt-1">Card description goes here. This is a brief overview of the content.</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place2} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 2</h3>
            <p className="text-sm mt-1">Card description goes here. This is a brief overview of the content.</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-[400px]">
            <img src={Place3} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Card Title 3</h3>
            <p className="text-sm mt-1">Card description goes here. This is a brief overview of the content.</p>
            </div>
        </div>
        </div> */}

        <div className="pr-6 pl-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.slice(0, 4).map((video, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{video.title}</h2>
              <div className="flex items-center mt-2">
                <Avatar>
                  <AvatarImage src="https://via.placeholder.com/50" alt={video.author} />
                  <AvatarFallback>{video.author[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                    <p className="text-gray-600">{video.author}</p>
                </div>
              </div>
              <div className="flex justify-items-center items-center mt-4">
                <Button className="w-1/2 rounded-full">Live</Button>
                <div className="ml-4">
                    <p className="text-gray-500 text-sm">{video.views}</p>
                    <p className="text-gray-500 text-sm">{video.time}</p>
                </div>
              </div>
             
            </div>
          </div>
        ))}
      </div>


      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-transparent overflow-hidden">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="p-2">
              <h2 className="text-lg font-semibold">{video.title}</h2>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://via.placeholder.com/50" alt={video.author} />
                  <AvatarFallback>{video.author[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="text-gray-600">{video.author}</p>
                  <p className="text-gray-500 text-sm">{video.views} • {video.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Categories;
