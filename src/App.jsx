import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { galleryImages } from "./data/galleryImages";
import { Route, Routes } from "react-router";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <section className="min-h-screen bg-gray-50">
              <h1 className="text-3xl font-bold text-center pt-12 pb-4 text-gray-900">
                Image Gallery
              </h1>
              <Gallery images={galleryImages} />
            </section>
          </>
        }
      />
      <Route path="/about" element={<About />} />
      <Route
        path="/gallery"
        element={
          <>
            <Navbar />
            <section className="min-h-screen bg-gray-50">
              <h1 className="text-3xl font-bold text-center pt-12 pb-4 text-gray-900">
                Image Gallery
              </h1>
              <Gallery images={galleryImages} />
            </section>
          </>
        }
      />
    </Routes>
  );
}

export default App;
