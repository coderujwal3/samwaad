import React, { useEffect, useRef } from "react";
import {
  Users,
  Calendar,
  Camera,
  Award,
  ChevronRight,
  Star,
} from "lucide-react";

const Home = ({ onNavigate }) => {
  const parentRef = useRef(null);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const parentDiv = parentRef.current;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !parentDiv || !section) return;

    const ctx = canvas.getContext("2d");

    const frames = {
      current: 0,
      // maxIndex: 234, // for gd
      maxIndex: 107,    // for debate
      images: [],
    };

    let imagesLoaded = 0;

    // first load all images
    const preload = () => {
      for (let i = 1; i <= frames.maxIndex; i++) {
        const img = new Image();
        // img.src = `/assets/frame30gd/frame_${i.toString().padStart(4, "0")}.jpeg`;
        img.src = `/assets/frames/frame_${i.toString().padStart(4, "0")}.jpeg`;
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frames.maxIndex) {
            console.log("All images loaded");
            loadFrame(0);
          }
        };
        img.onerror = () => console.error("Failed to load:", img.src);
        frames.images.push(img);
      }
    };

    // Draw the frame
    const loadFrame = (idx) => {
      const img = frames.images[idx];
      if (!img) return;

      canvas.width = parentDiv.offsetWidth;
      canvas.height = parentDiv.offsetHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;
      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      frames.current = idx;
    };

    // Scroll trigger limited to hero section only
    
    const handleScroll = () => {
      const scrollSpeed = 0.8;
      // const scrollSpeed = 0.8;
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      if (sectionTop < window.innerHeight && sectionBottom > 0) {
        const scrollProgress =
          (window.innerHeight - sectionTop) /
          (sectionHeight + window.innerHeight);

        // 🔥 Here's the key line:
        const frameIndex = Math.min(
          frames.maxIndex - 1,
          Math.floor((scrollProgress * frames.maxIndex) / scrollSpeed)
        );

        requestAnimationFrame(() => loadFrame(frameIndex));
      }
    };

    // Resize canvas when window size changes
    const handleResize = () => requestAnimationFrame(() => loadFrame(frames.current));

    // load the images, and added event listener for scrolling and resizing
    preload();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // when not in #main section, do not use scrolling, resizing
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">

      {/* Hero Section */}
      <section
        id="hero-section"
        className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center relative gap-8 lg:gap-2 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        ref={sectionRef}
      >
        <div className="w-full lg:w-[40%] max-w-3xl text-left p-4 sm:p-6 lg:p-8 flex-1">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-3 lg:mb-4 animate-fade-in">
            Welcome to
            <span className="block text-4xl mt-2 mb-0 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              SAMWAAD CLUB
            </span>
          </h1>
          <p className="text-base sm:text-xl lg:text-3xl mb-8 lg:mb-12 text-blue-100 max-w-3xl text-wrap leading-relaxed">
            Where voices unite, ideas flourish, and connections are born. Join
            our vibrant community of communicators and changemakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              className="w-full sm:w-auto bg-white text-blue-600 px-5 py-3 text-base sm:text-lg lg:text-xl rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              onClick={() => onNavigate && onNavigate("events")}
            >
              Explore Events
            </button>
            <button
              className="w-full sm:w-auto border-2 border-white text-white px-5 py-3 text-base sm:text-lg lg:text-xl rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
              onClick={() => onNavigate && onNavigate("about")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Canvas Section */}
        <div className="w-[80%] lg:w-[40%] flex justify-center items-center h-[42vh] sm:h-[32vh] lg:h-[80vh] max-h-[760px]">
          <div
            className="parent w-full max-w-[760px] h-[80%] relative top-0 left-0"
            ref={parentRef}
          >
            <div className="child w-full h-full lg:sticky lg:top-0 left-0 rounded-3xl overflow-hidden">
              <canvas
                className="w-full h-full rounded-3xl"
                id="frame"
                ref={canvasRef}
              ></canvas>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center h-full w-[50%]">
          <div
            className="parent w-[80%] h-[80%] relative top-0 left-0"
            ref={parentRef}
          >
            <div className="child w-full h-full sticky top-0 left-0 rounded-4xl">
              <canvas
                className="w-full h-full rounded-3xl"
                id="frame"
                ref={canvasRef}
              ></canvas>
            </div>
          </div>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Why Join SAMWAAD CLUB?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Connect with like-minded peers and build lasting friendships
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Events
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Participate in exciting workshops, seminars, and cultural
                activities
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Memories
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Create unforgettable memories through our diverse club
                activities
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Develop leadership skills and enhance your personal growth
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg transition-colors border border-transparent dark:border-slate-700">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">300+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Active Members</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg transition-colors border border-transparent dark:border-slate-700">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Events Organized</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg transition-colors border border-transparent dark:border-slate-700">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years Active</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg transition-colors border border-transparent dark:border-slate-700">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Awards Won</div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            What Our Members Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Aarav Sharma", "Priya Patel", "Rahul Kumar"].map((name, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl shadow-lg"
              >

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">

                  {idx === 0
                    ? `"SAMWAAD CLUB has been an incredible journey of growth and friendship. The events and community here are absolutely amazing!"`
                    : idx === 1
                      ? `"The leadership opportunities and skill development programs have helped me grow both personally and professionally."`
                      : `"The diversity of events and the welcoming community made my college experience truly memorable and enriching."`}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {name[0]}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-800 dark:text-white">{name}</div>

                    <div className="text-sm text-gray-500 dark:text-gray-400">

                      {idx === 0
                        ? "Computer Science, 3rd Year"
                        : idx === 1
                          ? "Business Admin, 2nd Year"
                          : "Electronics, 4th Year"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't miss out on the opportunity to be part of something amazing.
            Join SAMWAAD CLUB today!
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center">
            <a
              href="https://chat.whatsapp.com/JzY84VFRkZVLmiBlt5HY78"
              target="_blank"
            >
              Get Started Today
            </a>
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
