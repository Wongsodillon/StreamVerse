import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../../components/Header";
import LineChart from "../../../components/LineChart";
import BarChart from "../../../components/BarChart";
import StatBox from "../../../components/StatBox";
import GeographyChart from "../../../components/GeographyChart";
import ProgressCircle from "../../../components/ProgressCircle";
import Place1 from '../../../Assets/place1.jpg';
import Place2 from '../../../Assets/place2.jpg';
import Place3 from '../../../Assets/place3.jpg';
import Place4 from '../../../Assets/place4.jpg';
import '../../page.css';

interface Transaction {
  txId: string;
  user: string;
  date: string;
  cost: number;
}

const mockTransactions: Transaction[] = []; // Define your mock transactions here

const Dashboard: React.FC = () => {
  const theme = useTheme(); // No need to explicitly type the return value of useTheme, it's inferred by TypeScript
  const colors = tokens(theme.palette.mode);
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

  const mostVisited = {
    color: 'rgba(0, 0, 0, 0.80)',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontSize: '70px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  };


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="center" alignItems="center">
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

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.50}
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.30}
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress={0.80}
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" marginTop="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            padding="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              padding="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                padding="5px 10px"
                borderRadius="4px"
                
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              marginTop="15px"
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            padding="30px 30px 0 30px"
          >
            Sales Quantity
          </Typography>
          <Box height="250px" marginTop="-20px">
            <BarChart isDashboard={true} /> 
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              marginTop="15px"
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            padding="30px 30px 0 30px"
          >
            Sales Quantity
          </Typography>
          <Box height="250px" marginTop="-20px">
            <BarChart isDashboard={true} /> 
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>



      </Box>
    </Box>
  );
};

export default Dashboard;
