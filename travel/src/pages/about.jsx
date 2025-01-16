import React from 'react';
import "../styles/about.css"
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="about-us"   >
            <div className="about-us-container">
                <h1>About Us</h1>
                <p>
                    Welcome to <span onClick={()=> navigate("/")} className="highlight">Tourizo</span>, your ultimate travel companion. We are dedicated to providing you with
                    unique travel experiences, guiding you to the most beautiful destinations around the world.
                </p>

                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is simple: to inspire and help you explore the world like never before. We believe that travel is more than just visiting places; it's about creating memories, connecting cultures, and finding adventure in every corner of the globe.
                    </p>
                </section>

                <section className="vision-section">
                    <h2>Our Vision</h2>
                    <p>
                        At Tourizo, our vision is to be the go-to platform for travelers who seek unique and memorable experiences. We aim to offer a range of handpicked destinations, activities, and tips to make your travels more enjoyable and stress-free.
                    </p>
                </section>

                <section className="values-section">
                    <h2>Our Values</h2>
                    <ul>
                        <li>Integrity: We ensure transparency and honesty in all our dealings.</li>
                        <li>Customer-Centric: Your satisfaction is our priority.</li>
                        <li>Sustainability: We believe in responsible travel that preserves the beauty of the planet.</li>
                        <li>Innovation: We constantly seek to improve and bring fresh travel ideas to the table.</li>
                    </ul>
                </section>

                <section className="contact-section">
                    <h2>Contact Us</h2>
                    <p>
                        Have questions or need assistance? Feel free to reach out to us! We're here to help you plan the perfect trip.
                    </p>
                    <button onClick={()=> navigate("/contact")}>Contact Us</button>
                </section>
                
            </div>
            
        </div>
        <Footer/>
        </>
    );
};

export default About;
