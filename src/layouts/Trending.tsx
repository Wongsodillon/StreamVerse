import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Place1 from '../../../Assets/place1.jpg';
import Place2 from '../../../Assets/place2.jpg';
import Place3 from '../../../Assets/place3.jpg';
import Place4 from '../../../Assets/place4.jpg';
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
    <Box m="20px">
        <Box gridColumn="span 12">
          <section className="mostVisited secs" style={{margin:0, paddingBottom:"20px", paddingLeft:0,}}>
              <div className="container">
                <div className="row">
                  <div className="carousel">
                      <div className="list">
                          <div  className={currentIndex === 0 ? 'item active' : 'item'}>
                              <img src={Place1}></img>
                              <div className="content">
                                  <div className="author">Popular PLaces</div>
                                  <div className="title">TAKA</div>
                                  <div className="title">MAKASSAR</div>
                                  <div className="topic">ISLAND </div>
                                  <div className="des" style={{fontSize:20}}>  
                                    Dive into the azure waters surrounding Takam Makassar, a picturesque sandbar in the heart of Komodo National Park. Snorkel alongside vibrant coral reefs and an array of tropical fish, or simply bask in the sun on this pristine stretch of sand.
                                  </div>
                                  <div className="buttons">
                                  </div>
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
                                  <div className="buttons">
                                  </div>
                              </div>
                          </div>
                          <div className={currentIndex === 2 ? 'item active' : 'item'}>
                              <img src={Place3}></img>
                              <div className="content">
                                  <div className="title">PADAR</div>
                                  <div className="title">ISLAND</div>
                                  <div className="topic">SCENERY</div>
                                  <div className="des">
                                    Ascend to the summit of Padar Island for unparalleled panoramic views of the Komodo archipelago. Marvel at the contrasting landscapes of rugged cliffs, lush greenery, and pink-hued beaches, offering the perfect backdrop for memorable photographs and unforgettable moments.                          </div>
                                  <div className="buttons">
                                  </div>
                              </div>
                          </div>
                          <div className={currentIndex === 3 ? 'item active' : 'item'}>
                              <img src={Place4}></img>
                              <div className="content">
                                  <div className="title">PINK</div>
                                  <div className="title">BEACH</div>
                                  <div className="topic">PARADISE</div>
                                  <div className="des">
                                    Experience the enchanting allure of Pink Beach, where the sand takes on a rosy hue, creating a surreal and captivating landscape. Snorkel amidst vibrant coral gardens teeming with marine life, soak up the sun on soft pink sands, and immerse yourself in the tranquility of this idyllic paradise.                          </div>
                                  <div className="buttons">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="thumbnail">
                          <div className={currentIndex === 0 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(0)}>
                              <img src={Place1}></img>
                              <div className="content">
                                  <div className="title">
                                      Taka
                                  </div>
                                  <div className="description">
                                      Makassar
                                  </div>
                              </div>
                          </div>
                          <div className={currentIndex === 1 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(1)}>
                              <img src={Place2}></img>
                              <div className="content">
                                  <div className="title">
                                      Komodo
                                  </div>
                                  <div className="description">
                                      Island
                                  </div>
                              </div>
                          </div>
                          <div className={currentIndex === 2 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(2)}>
                              <img src={Place3}></img>
                              <div className="content">
                                  <div className="title">
                                      Padar
                                  </div>
                                  <div className="description">
                                      Island
                                  </div>
                              </div>
                          </div>
                          <div className={currentIndex === 3 ? 'item active' : 'item'} onClick={() => handleThumbnailClick(3)}>
                              <img src={Place4}></img>
                              <div className="content">
                                  <div className="title">
                                      Pink
                                  </div>
                                  <div className="description">
                                      Beach
                                  </div>
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
        </Box>
        
        <Box className="p-6">
          <Box className="flex gap-14">
            {/* Card 1 */}
            <Box
              className="flex-1 bg-white-800 text-black p-4 rounded-lg shadow-md"
              sx={{ maxWidth: '400px' }}
            >
              <img
                src={Place4}
              />
              <Typography variant="h6" component="h3">
                Card Title 1
              </Typography>
              <Typography variant="body2" component="p">
                Card description goes here. This is a brief overview of the content.
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"90px"}}>
                Card description goes here. This is a brief overview of the content.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box
              className="flex-1 bg-white-800 text-black p-4 rounded-lg shadow-md"
              sx={{ maxWidth: '400px' }}
            >
              <img
                src={Place2}
              />
              <Typography variant="h6" component="h3">
                Card Title 2
              </Typography>
              <Typography variant="body2" component="p">
                Card description goes here. This is a brief overview of the content.
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"90px"}}>
                Card description goes here. This is a brief overview of the content.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box
              className="flex-1 bg-white-800 text-black p-4 rounded-lg shadow-md"
              sx={{ maxWidth: '400px' }}
            >
              <img
                src={Place3}
              />
              <Typography variant="h6" component="h3">
                Card Title 3
              </Typography>
              <Typography variant="body2" component="p">
                Card description goes here. This is a brief overview of the content.
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"90px"}}>
                Card description goes here. This is a brief overview of the content.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="p-6">
          <Box className="flex gap-14">
            {/* Card 1 */}
            <Box
              className="flex-1 bg-white-800 text-black p-4 rounded-lg shadow-md"
              sx={{ maxWidth: '400px' }}
            >
              <img
                src={Place4}
              />
              <Typography variant="h6" component="h3">
                Card Title 1
              </Typography>
              <Typography variant="body2" component="p">
                Card description goes here. This is a brief overview of the content.
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"90px"}}>
                Card description goes here. This is a brief overview of the content.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box
              className="flex-1 bg-white-800 text-black p-4 rounded-lg shadow-md"
              sx={{ maxWidth: '400px' }}
            >
              <img
                src={Place2}
              />
              <Typography variant="h6" component="h3">
                Card Title 2
              </Typography>
              <Typography variant="body2" component="p">
                Card description goes here. This is a brief overview of the content.
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"90px"}}>
                Card description goes here. This is a brief overview of the content.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box
              className="flex-1 bg-white-800 text-black p-4 rounded-lg shadow-md"
              sx={{ maxWidth: '400px' }}
            >
              <img
                src={Place3}
              />
              <Typography variant="h6" component="h3">
                Card Title 3
              </Typography>
              <Typography variant="body2" component="p">
                Card description goes here. This is a brief overview of the content.
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"90px"}}>
                Card description goes here. This is a brief overview of the content.
              </Typography>
            </Box>
          </Box>
        </Box> 

        <Box className="p-6">
          <Box className="flex gap-14">
            {/* Card 1 */}
            <Box
              className="flex-1 bg-white-800 text-black p-4 rounded-lg shadow-md"
              sx={{ maxWidth: '400px' }}
            >
              <img
                src={Place4}
              />
              <Typography variant="h6" component="h3">
                Card Title 1
              </Typography>
              <Typography variant="body2" component="p">
                Card description goes here. This is a brief overview of the content.
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"90px"}}>
                Card description goes here. This is a brief overview of the content.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box
              className="flex-1 bg-white-800 text-black p-4 rounded-lg shadow-md"
              sx={{ maxWidth: '400px' }}
            >
              <img
                src={Place2}
              />
              <Typography variant="h6" component="h3">
                Card Title 2
              </Typography>
              <Typography variant="body2" component="p">
                Card description goes here. This is a brief overview of the content.
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"90px"}}>
                Card description goes here. This is a brief overview of the content.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box
              className="flex-1 bg-white-800 text-black p-4 rounded-lg shadow-md"
              sx={{ maxWidth: '400px' }}
            >
              <img
                src={Place3}
              />
              <Typography variant="h6" component="h3">
                Card Title 3
              </Typography>
              <Typography variant="body2" component="p">
                Card description goes here. This is a brief overview of the content.
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"90px"}}>
                Card description goes here. This is a brief overview of the content.
              </Typography>
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default Dashboard;
