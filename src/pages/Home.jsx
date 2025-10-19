import React, { useEffect, useRef } from "react";
import {
  Users,
  Calendar,
  Camera,
  Award,
  ChevronRight,
  Star,
} from "lucide-react";
import main from "../assets/main2.mp4";

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
      maxIndex: 107,
      images: [],
    };

    let imagesLoaded = 0;

    // first load all images
    const preload = () => {
      for (let i = 1; i <= frames.maxIndex; i++) {
        const img = new Image();
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
      const framesPerScroll = 10; // 10 frames per scroll for smoothness
      const scrollSpeed = 5;
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero-section" className="h-screen flex flex-wrap justify-center items-center gap-3 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-24 md:py-40 px-4"
      ref={sectionRef}
      >
        <div className="p-8 max-w-6xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 animate-fade-in">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              SAMWAAD CLUB
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-blue-100 max-w-4xl leading-relaxed">
            Where voices unite, ideas flourish,
            <br /> and connections are born. Join our <br /> vibrant community
            of communicators <br /> and changemakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              className="bg-white text-blue-600 px-5 py-2 text-xl rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              onClick={() => onNavigate && onNavigate("events")}
            >
              Explore Events
            </button>
            <button
              className="border-2 border-white text-white px-5 py-2 text-2xl rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
              onClick={() => onNavigate && onNavigate("about")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Canvas Section */}
        <div className="flex justify-center items-center h-full w-[50%]">
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
        </div>
        {/* <div className="flex justify-center items-start h-full w-[50%] rounded-3xl">
          <div
            className="parent w-full h-[80%] relative top-0 left-0 bg-white"
            ref={parentRef}
          >
            <div className="child w-full h-full sticky top-0 left-0 rounded-3xl">
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Join SAMWAAD CLUB?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with like-minded peers and build lasting friendships
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Events
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Participate in exciting workshops, seminars, and cultural
                activities
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Memories
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create unforgettable memories through our diverse club
                activities
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Develop leadership skills and enhance your personal growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600 font-medium">Active Members</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Events Organized</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">Years Active</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Aarav Sharma", "Priya Patel", "Rahul Kumar"].map((name, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
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
                    <div className="font-semibold text-gray-800">{name}</div>
                    <div className="text-sm text-gray-500">
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
