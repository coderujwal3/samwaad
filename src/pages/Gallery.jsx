import React, { useState } from 'react';
import { Calendar, Users, Award, Heart, X } from 'lucide-react';
import pic1 from '../assets/pics/pic1.jpg';
import pic2 from '../assets/pics/pic2.jpg';
import pic3 from '../assets/pics/pic3.jpg';
import pic4 from '../assets/pics/pic4.jpg';
import pic5 from '../assets/pics/pic5.jpg';
import pic6 from '../assets/pics/pic6.jpg';
import pic7 from '../assets/pics/pic7.jpg';
import pic8 from '../assets/pics/pic8.jpg';
import pic9 from '../assets/pics/pic9.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      url: pic1,
      title: 'Annual Communication summit',
      category: 'Events',
      date: 'December 2024'
    },
    {
      id: 2,
      url: pic2,
      title: 'Public Speaking Workshop',
      category: 'Workshops',
      date: 'November 2024'
    },
    {
      id: 3,
      url: pic3,
      title: 'Debate Championship',
      category: 'Competitions',
      date: 'October 2024'
    },
    {
      id: 4,
      url: pic4,
      title: 'Cultural Fusion Night',
      category: 'Cultural',
      date: 'September 2024'
    },
    {
      id: 5,
      url: pic5,
      title: 'Leadership Bootcamp',
      category: 'Training',
      date: 'August 2024'
    },
    {
      id: 6,
      url: pic6,
      title: 'Tech Talk Session',
      category: 'Seminars',
      date: 'July 2024'
    },
    {
      id: 7,
      url: pic7,
      title: 'Team Building Activity',
      category: 'Activities',
      date: 'June 2024'
    },
    {
      id: 8,
      url: pic8,
      title: 'Award Ceremony',
      category: 'Awards',
      date: 'May 2024'
    },
    {
      id: 9,
      url: pic9,
      title: 'Community Service',
      category: 'Service',
      date: 'April 2024'
    }
  ];

  const achievements = [
    { title: 'Best Student Organization 2024', icon: Award, color: 'bg-yellow-500' },
    { title: '500+ Active Members', icon: Users, color: 'bg-blue-500' },
    { title: '50+ Events Organized', icon: Calendar, color: 'bg-green-500' },
    { title: 'Community Impact Award', icon: Heart, color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Capturing memories, celebrating achievements, and showcasing the vibrant spirit of SAMWAAD CLUB.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{image.date}</span>
                      <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Video Highlights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg font-medium">Annual Summit 2024</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Communication Summit Highlights</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Relive the best moments from our biggest event of the year, featuring keynote speakers, workshops, and networking sessions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg font-medium">Club Journey</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Journey So Far</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A compilation of our growth, achievements, and memorable moments from the past five years of SAMWAAD CLUB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Next Adventure</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join us and create memories that will last a lifetime. Your story could be the next highlight in our gallery!
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <a href="https://chat.whatsapp.com/JzY84VFRkZVLmiBlt5HY78">Join Samwaad</a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;