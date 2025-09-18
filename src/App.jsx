import { useEffect, useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import JoinModal from "./components/JoinModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showJoinModal, setShowJoinModal] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "events":
        return <Events />;
      case "gallery":
        return <Gallery />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onJoinClick={() => setShowJoinModal(true)}
      />
      <main className="pt-16">{renderPage()}</main>
      <Footer />
      {showJoinModal && <JoinModal onClose={() => setShowJoinModal(false)} />}
    </div>
  );
}

export default App;
