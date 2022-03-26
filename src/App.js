import Gallery from "./routes/gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}
