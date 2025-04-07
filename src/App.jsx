import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Preview } from "./pages/Preview"
import { AllMovies } from "./pages/AllMovies"
import { Cartoon } from "./pages/Cartoons"
import { Anime } from "./pages/Anime"
import { TvShows } from "./pages/TvShows"
import { PageNotFound } from "./pages/PageNotFound"
import { Video } from "./pages/Video"
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/allmovies" element={<AllMovies />} />
        <Route path="/cartoon" element={<Cartoon />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/shows" element={<TvShows />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  )
}