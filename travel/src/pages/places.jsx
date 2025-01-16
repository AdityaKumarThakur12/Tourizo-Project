import "../styles/Places.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../components/loading"
import Footer from "./footer"


const Places = () => {

    const [placesData, setPlacesData] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tourizo-22c90-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json");
                const dataArray = response.data
                    ? Object.entries(response.data).map(([Id, value]) => ({
                        Id,
                        ...value,
                    }))
                    :
                    []

                setPlacesData(dataArray)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    console.log(placesData)

    if (loading) {
        return <Loading/>
    }
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6); // Increment visible count by 6
    };


    return (
        <div style={{backgroundColor:"#191939", paddingBottom:"30px"}} >
        <div className="places">
            <div className="places-container" >
                {placesData.slice(0, visibleCount).map((place) => (
                    <div key={place.id}>
                        <img src={place.image} alt={place.name} />
                        <h2>{place.name}</h2>
                        <p>{place.description}</p>
                        <button onClick={() => navigate(`/place/${place.id}`)}>Explore Now</button>
                    </div>
                ))}
            </div>
        </div>
        {visibleCount < placesData.length && ( 
                <button className="load-more" onClick={loadMore}>
                    Load More
                </button>
            )};

            <hr/>
            
        </div>
    )
}
export default Places