import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Places from './pages/places';
import Contact from './pages/contact';
import Login from './pages/login';
import Signup from './pages/signup';
import BookingPage from './pages/bookingPage';
import PlaceDetails from './pages/placeDetails';
import ProtectedRoute from './utils/protectedRoute';
import Loading from './components/loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return < Loading />; 
  }  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/places' element={<Places />} />
        <Route path='/contact' element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signIn' element={<Signup />} />
        <Route path='/place/:id' element={<PlaceDetails />} />
        <Route path='/booking' element={
          <ProtectedRoute>
            <BookingPage />
          </ProtectedRoute>
          
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
