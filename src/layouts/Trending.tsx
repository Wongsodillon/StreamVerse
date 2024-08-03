import React, { useEffect, useState, useRef } from 'react';
import Place1 from '@/assets/place1.jpg';
import Place2 from '@/assets/place2.jpg';
import Place3 from '@/assets/place3.jpg';
import Place4 from '@/assets/place4.jpg';
import '@/layouts/page.css';

const Dashboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const showSlider = (type: string) => {
    let newIndex;
    if (type === 'next') {
      newIndex = currentIndex === 3 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? 3 : currentIndex - 1;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleNextClick = () => showSlider('next');
    const handlePrevClick = () => showSlider('prev');

    const nextButton = nextRef.current;
    const prevButton = prevRef.current;

    if (nextButton) nextButton.addEventListener('click', handleNextClick);
    if (prevButton) prevButton.addEventListener('click', handlePrevClick);

    return () => {
      if (nextButton) nextButton.removeEventListener('click', handleNextClick);
      if (prevButton) prevButton.removeEventListener('click', handlePrevClick);
    };
  }, [currentIndex]);

  return (
    <div>
      <div className="grid-cols-12">
        <section className="m-0 p-0 pb-20">
          <div className="flex flex-wrap mx-auto ">
            <div className="w-full">
              <div className="relative w-[80vw] h-[60vh] mt-0 p-0 carousel">
                <div className="list">
                  <div className={currentIndex === 0 ? 'item active' : 'item'}>
                    <img src={Place1}></img>
                    <div className="content">
                      <div className="author">Popular Places</div>
                      <div className="title">TAKA</div>
                      <div className="title">MAKASSAR</div>
                      <div className="topic">ISLAND </div>
                      <div className="des" style={{fontSize:20}}>  
                        Dive into the azure waters surrounding Takam Makassar, a picturesque sandbar in the heart of Komodo National Park. Snorkel alongside vibrant coral reefs and an array of tropical fish, or simply bask in the sun on this pristine stretch of sand.
                      </div>
                      <div className="buttons"></div>
                    </div>
                  </div>
                  <div className={currentIndex === 1 ? 'item active' : 'item'}>
                    <img src={Place2}></img>
                    <div className="content">
                      <div className="title">KOMODO</div>
                      <div className="title">DRAGON</div>
                      <div className="topic">ISLAND</div>
                      <div className="des">
                        Encounter the legendary Komodo dragons in their natural habitat on Komodo Island. Trek through rugged landscapes and witness these ancient creatures up close, amidst a backdrop of breathtaking scenery and diverse wildlife.
                      </div>
                      <div className="buttons"></div>
                    </div>
                  </div>
                  <div className={currentIndex === 2 ? 'item active' : 'item'}>
                    <img src={Place3}></img>
                    <div className="content">
                      <div className="title">PADAR</div>
                      <div className="title">ISLAND</div>
                      <div className="topic">SCENERY</div>
                      <div className="des">
                        Ascend to the summit of Padar Island for unparalleled panoramic views of the Komodo archipelago. Marvel at the contrasting landscapes of rugged cliffs, lush greenery, and pink-hued beaches, offering the perfect backdrop for memorable photographs and unforgettable moments.
                      </div>
                      <div className="buttons"></div>
                    </div>
                  </div>
                  <div className={currentIndex === 3 ? 'item active' : 'item'}>
                    <img src={Place4}></img>
                    <div className="content">
                      <div className="title">PINK</div>
                      <div className="title">BEACH</div>
                      <div className="topic">PARADISE</div>
                      <div className="des">
                        Experience the enchanting allure of Pink Beach, where the sand takes on a rosy hue, creating a surreal and captivating landscape. Snorkel amidst vibrant coral gardens teeming with marine life, soak up the sun on soft pink sands, and immerse yourself in the tranquility of this idyllic paradise.
                      </div>
                      <div className="buttons"></div>
                    </div>
                  </div>
                </div>
                <div className="thumbnail">
                  <div className={currentIndex === 0 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(0)}>
                    <img src={Place1}></img>
                    <div className="content">
                      <div className="title">Taka</div>
                      <div className="description">Makassar</div>
                    </div>
                  </div>
                  <div className={currentIndex === 1 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(1)}>
                    <img src={Place2}></img>
                    <div className="content">
                      <div className="title">Komodo</div>
                      <div className="description">Island</div>
                    </div>
                  </div>
                  <div className={currentIndex === 2 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(2)}>
                    <img src={Place3}></img>
                    <div className="content">
                      <div className="title">Padar</div>
                      <div className="description">Island</div>
                    </div>
                  </div>
                  <div className={currentIndex === 3 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(3)}>
                    <img src={Place4}></img>
                    <div className="content">
                      <div className="title">Pink</div>
                      <div className="description">Beach</div>
                    </div>
                  </div>
                </div>
                <div className="arrows">
                  <button ref={prevRef} id="prev">{'<'}</button>
                  <button ref={nextRef} id="prev">{'>'}</button>
                </div>
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
        </div>


    </div>
  );
};

export default Dashboard;
