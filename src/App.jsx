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
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => setIsAppLoading(false);

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading);
    return () => window.removeEventListener("load", finishLoading);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "about":
        return <About />;
      case "events":
        return <Events />;
      case "gallery":
        return <Gallery />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  if (isAppLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-14 w-14 rounded-full border-2 border-b-blue-300 border-t-transparent border-r-transparent border-l-transparent animate-spin" />
          <p className="text-blue-600 font-semibold tracking-wide">Loading SAMWAAD...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:text-gray-100">
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
