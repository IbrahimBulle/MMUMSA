import { Gallery } from "./components/Gallary";
import { galleryImages } from "./data/gallaryImages";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center pt-12 pb-4 text-gray-900">
        Image Gallery
      </h1>
      <Gallery images={galleryImages} />
    </div>
  );
}

export default App;
