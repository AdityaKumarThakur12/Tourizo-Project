import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/placeDetails.css";
import Loading from "../components/loading";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const PlaceDetails = () => {
    const { id } = useParams(); // Get the place ID from the URL
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const response = await axios.get("https://tourizo-22c90-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json");
                const data = response.data;

                // If data is an array, find the matching place by ID
                const matchedPlace = Array.isArray(data)
                    ? data.find((item) => String(item.id) === id)
                    : data[id];

                setPlace(matchedPlace || null); // Handle case where ID doesn't match
            } catch (error) {
                console.log("Error fetching place details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPlace();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!place) {
        return <h1>Place not found</h1>;
    }

    return (
        <>
        <div className="place-details">
            <div className="details-container">
                <div className="details-left">
                    <img src={place.image} alt={place.name} className="place-image" />
                    <p className="place-description">{place.description}</p>
                    <button className="book-trip-button" onClick={()=> navigate("/booking")}>Book the Trip Now</button>
                </div>

                <div className="details-right">
                    <h1>{place.name}</h1>
                    <p>
                        <strong>Continent:</strong> {place.continent}
                    </p>
                    <p>
                        <strong>Country:</strong> {place.country}
                    </p>
                    <p>
                        <strong>Population:</strong> {place.population}
                    </p>
                    <p>
                        <strong>Currency:</strong> {place.currency}
                    </p>
                    <p>
                        <strong>Language:</strong> {place.language}
                    </p>
                    <p>
                        <strong>Best Time to Visit:</strong> {place.best_time_to_visit}
                    </p>

                    <div className="place-section">
                        <h2>Top Attractions</h2>
                        <ul>
                            {place.top_attractions.map((attraction, index) => (
                                <li key={index}>{attraction}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="place-section">
                        <h2>Activities</h2>
                        <ul>
                            {place.activities.map((activity, index) => (
                                <li key={index}>{activity}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="place-section">
                        <h2>Local Dishes</h2>
                        <ul>
                            {place.local_dishes.map((dish, index) => (
                                <li key={index}>{dish}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
    );
};

export default PlaceDetails;
