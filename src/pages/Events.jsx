import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";
import RegisterEvent from "../components/RegisterEvent";

const Events = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterResult, setNewsletterResult] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Communication Summit 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Main Auditorium",
      description:
        "A day-long summit featuring keynote speakers, workshops, and networking opportunities focused on modern communication trends.",
      category: "Summit",
      attendees: 200,
      image:
        "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Public Speaking Workshop",
      date: "February 28, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Room B",
      description:
        "Master the art of public speaking with expert trainers and practical exercises.",
      category: "Workshop",
      attendees: 50,
      image:
        "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Debate Championship",
      date: "March 8, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Student Center Hall",
      description:
        "Inter-department debate competition on contemporary social and technological issues.",
      category: "Competition",
      attendees: 150,
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Cultural Fusion Night 2024",
      date: "December 20, 2024",
      description:
        "A celebration of diversity with performances, food, and cultural exchange.",
      attendees: 300,
      rating: 4.8,
    },
    {
      id: 5,
      title: "Leadership Bootcamp",
      date: "November 15, 2024",
      description:
        "Intensive leadership development program for aspiring student leaders.",
      attendees: 75,
      rating: 4.9,
    },
    {
      id: 6,
      title: "Tech Talk: AI in Communication",
      date: "October 10, 2024",
      description:
        "Expert insights on how artificial intelligence is transforming communication.",
      attendees: 120,
      rating: 4.7,
    },
  ];

  // Modal close handler
  const handleClose = () => {
    setShowRegister(false);
    setSelectedEvent(null);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterResult("");
    if (!newsletterEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setNewsletterResult("Please enter a valid email address.");
      return;
    }
    setNewsletterLoading(true);

    const formData = new FormData();
    formData.append("access_key", "dcc7f535-0dbf-4c7e-82be-86aa3cc40fd0");
    formData.append("email", newsletterEmail);
    formData.append("subject", "New Newsletter Subscription");
    formData.append("from_name", "SAMWAAD CLUB Newsletter");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setNewsletterResult("Thank you for subscribing!");
        setNewsletterEmail("");
      } else {
        setNewsletterResult("Something went wrong. Please try again.");
      }
    } catch {
      setNewsletterResult("Something went wrong. Please try again.");
    }
    setNewsletterLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Upcoming
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join us for exciting workshops, competitions, and networking
            opportunities that will enhance your skills and expand your
            horizons.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} expected attendees
                    </div>
                  </div>

                  <button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                    onClick={() => {
                      setShowRegister(true);
                      setSelectedEvent(event.title);
                    }}
                  >
                    Register Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RegisterEvent Modal */}
      {showRegister && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClose}
        >
          <div
            className="max-w-lg w-full relative bg-white rounded-2xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 left-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={handleClose}
              aria-label="Close"
            >
              &times;
            </button>
            <RegisterEvent eventName={selectedEvent} />
          </div>
        </div>
      )}

      {/* Past Events */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-transparent p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {event.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium text-gray-700">
                      {event.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  {event.attendees} attendees
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Event Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Workshops
              </h3>
              <p className="text-gray-600 text-sm">
                Skill-building sessions led by experts
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Competitions
              </h3>
              <p className="text-gray-600 text-sm">
                Contests to showcase your talents
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Cultural Events
              </h3>
              <p className="text-gray-600 text-sm">
                Celebrating diversity and creativity
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Networking
              </h3>
              <p className="text-gray-600 text-sm">
                Connect with peers and professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Miss Out!</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to get notified about upcoming events
            and exclusive opportunities.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto justify-center"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-0 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none text-lg"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-10 py-4 rounded-xl bg-white text-green-600 font-semibold text-lg hover:bg-gray-100 transition-colors"
              disabled={newsletterLoading}
            >
              {newsletterLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {newsletterResult && (
            <div
              className="mt-4 text-lg"
              style={{
                color: newsletterResult.startsWith("Thank")
                  ? "#79f2a5ff"
                  : "#f97272ff",
              }}
            >
              {newsletterResult}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
