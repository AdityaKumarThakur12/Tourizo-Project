import React, { useEffect, useRef } from "react";
import pixel1 from "../images/pixel1.webp";
import pixel2 from "../images/pixel2.webp";
import pixel3 from "../images/pixel3.webp";
import pixel4 from "../images/pixel4.webp";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Places from "./places";
import "../styles/home.css";
import "ionicons/icons";


const Home = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate()

  const images = [
    { id: 1, src: pixel1 },
    { id: 2, src: pixel2 },
    { id: 3, src: pixel3 },
    { id: 4, src: pixel4 },
    { id: 5, src: pixel1 },
    { id: 6, src: pixel2 },
    { id: 7, src: pixel3 },
    { id: 8, src: pixel4 },
  ];

  // Handle navigation clicks
  const activate = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.querySelectorAll(".item");
    if (e.target.matches(".next")) {
      slider.append(items[0]);
    } else if (e.target.matches(".prev")) {
      slider.prepend(items[items.length - 1]);
    }
  };

  // Automatically slide the items
  const autoSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.querySelectorAll(".item");
    slider.append(items[0]);
  };

  // Add event listeners and auto-slide functionality
  useEffect(() => {
    document.addEventListener("click", activate, false);

    const intervalId = setInterval(autoSlide, 3000);

    return () => {
      document.removeEventListener("click", activate, false);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <main className="homeContent-1">
          <ul className="slider" ref={sliderRef}>
            <li className="item" style={{ backgroundImage: `url(${pixel1})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
              <div className="content">
                <h2 className="title">"DUBAI"</h2>
                <p className="description">
                Dubai is a city known for its modern architecture, luxury shopping, and impressive skyscrapers. Visit the Burj Khalifa, explore the Dubai Mall, and experience the vibrant culture of the city..
                </p>
                <Button onClick={()=> navigate("/place/8")}>Read More</Button>
              </div>
            </li>
            <li className="item" style={{ backgroundImage: `url(${pixel2})` }}>
              <div className="content">
                <h2 className="title">"LONDON"</h2>
                <p className="description">
                London, the capital of the United Kingdom, is a historic city with a mix of modern and traditional attractions. 
                Explore the Tower of London, take a ride on the London Eye, and enjoy West End theater productions.
                </p>
                <Button onClick={()=> navigate("/place/4")}>Read More</Button>
              </div>
            </li>
            <li className="item" style={{ backgroundImage: `url(${pixel3})` }}>
              <div className="content">
                <h2 className="title">"ROME: The Beautifull City"</h2>
                <p className="description">
                Rome, the capital of Italy, is a city steeped in history and ancient architecture. 
                Visit iconic landmarks like the Colosseum and Roman Forum, enjoy delicious Italian cuisine, and 
                experience the charm of quaint neighborhoods.
                </p>
                <Button onClick={()=> navigate("/place/5")}>Read More</Button>
              </div>
            </li>
            <li className="item" style={{ backgroundImage: `url(${pixel4})` }}>
              <div className="content">
                <h2 className="title">"SYDNEY"</h2>
                <p className="description">
                Sydney is a vibrant city known for its stunning harbor, iconic Opera House, and beautiful beaches. 
                Climb the Sydney Harbour Bridge, relax at Bondi Beach, and explore the historic Rocks district.
                </p>
                <Button onClick={()=> navigate("/place/7")}>Read More</Button>
              </div>
            </li>
            <li className="item" style={{ backgroundImage: `url(${pixel2})` }}>
              <div className="content">
                <h2 className="title">"LONDON"</h2>
                <p className="description">
                London, the capital of the United Kingdom, is a historic city with a mix of modern and traditional attractions. 
                Explore the Tower of London, take a ride on the London Eye, and enjoy West End theater productions.
                </p>
                <Button onClick={()=> navigate("/place/4")}>Read More</Button>
              </div>
            </li>
            <li className="item" style={{ backgroundImage: `url(${pixel3})` }}>
              <div className="content">
                <h2 className="title">"ROME: The Beautifull City"</h2>
                <p className="description">
                Rome, the capital of Italy, is a city steeped in history and ancient architecture. 
                Visit iconic landmarks like the Colosseum and Roman Forum, enjoy delicious Italian cuisine, and 
                experience the charm of quaint neighborhoods.
                </p>
                <Button onClick={()=> navigate("/place/5")}>Read More</Button>
              </div>
            </li>
          </ul>
          <nav className="nav">
            <ion-icon className="btn prev" name="arrow-back-outline"></ion-icon>
            <ion-icon className="btn next" name="arrow-forward-outline"></ion-icon>
          </nav>
        </main>
        <h1 className="content2-h1">Wonders of the <span> WORLD </span></h1>
        <div className="home-content2">
        
          <div className="container-2">
            
            {images.map((image, index) => (
              <span key={image.id} style={{ "--i": index + 1 }}>
                <img src={image.src} alt={`Image ${index + 1}`} />
              </span>
            ))}
          </div>
        </div>
        <div className="container-3">
          <h1>JOURNEY   <span>BEGINS</span></h1>
          <Places/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
