import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'; 
import MoviePage from './MoviePage';
import './style.css';

//the bloody good navbar

//bloody good movies

export default function App() {
    return (
        <BrowserRouter>
        <Navbar />

        <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}

             {/* dynamic routing for individual movies (:id secret sauce) */}
            <Route path="/movie/:id" element={<MoviePage />} /> {/*:id says "Hey, whatever number comes after /movie/ is a variable."*/}

             {/* when someone clicks on Human Centipede on Landing Page, you  send them to /movie/146736 (its actual TMDB ID). React Router will load MoviePage wireframe, and then component will extract that 146736 from the URL to fetch the correct gory details and my expert review. */}
        </Routes>

        </BrowserRouter>
    );
}