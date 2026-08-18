import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Award,
  Heart,
  X,
  Download,
  CheckCircle2,
  Circle,
  CheckSquare,
  Folder,
  FolderOpen,
  Images,
} from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [selectedFolder, setSelectedFolder] = useState('all');

  // Dynamically import all images from subfolders of assets/pics
  const imageModules = import.meta.glob(
    '../assets/pics/**/*.{png,jpg,jpeg,webp,JPG,JPEG}',
    { eager: true }
  );

  // Existing metadata for specific images
  const existingMetadata = {
    'pic1.jpg': { title: 'Debate Opening & Keynote', category: 'Competitions', date: 'April 2026' },
    'pic2.jpg': { title: 'Debate Stage & Speakers', category: 'Competitions', date: 'April 2026' },
    'pic3.jpg': { title: 'Audience & Jury', category: 'Competitions', date: 'April 2026' },
    'pic4.jpg': { title: 'Cultural Fusion Night', category: 'Cultural', date: 'September 2024' },
    'pic5.jpg': { title: 'Leadership Bootcamp', category: 'Training', date: 'August 2024' },
    'pic6.jpg': { title: 'Tech Talk Session', category: 'Seminars', date: 'July 2024' },
    'pic7.jpg': { title: 'Team Building Activity', category: 'Activities', date: 'June 2024' },
    'pic8.jpg': { title: 'Award Ceremony', category: 'Awards', date: 'May 2024' },
    'pic9.jpg': { title: 'Community Service', category: 'Service', date: 'April 2024' },
  };

  const folderDisplayNames = {
    'debate 9 april': 'Debate 9 April',
    'Prior Events': 'Prior Events',
  };

  const galleryImages = Object.entries(imageModules).map(([path, module], index) => {
    const parts = path.split('/');
    const filename = parts.pop();
    const folderKey = parts.pop();
    const folderLabel = folderDisplayNames[folderKey] || folderKey.replace(/_/g, ' ');

    const metadata = existingMetadata[filename] || {
      title: filename.startsWith('WhatsApp')
        ? 'Debate Event Highlight'
        : filename.split('.')[0].replace(/_/g, ' '),
      category: folderKey.toLowerCase().includes('debate') ? 'Debate' : 'Memories',
      date: folderKey.toLowerCase().includes('debate') ? 'April 2026' : 'April 2024',
    };

    return {
      id: index + 1,
      url: module.default,
      filename,
      folderKey,
      folderLabel,
      ...metadata,
    };
  });

  // Extract unique folders with their counts and preview cover image
  const foldersList = Array.from(new Set(galleryImages.map((img) => img.folderKey))).map(
    (key) => {
      const folderImgs = galleryImages.filter((img) => img.folderKey === key);
      return {
        key,
        label: folderDisplayNames[key] || key.replace(/_/g, ' '),
        count: folderImgs.length,
        coverUrl: folderImgs[0]?.url,
      };
    }
  );

  const filteredImages =
    selectedFolder === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.folderKey === selectedFolder);

  const toggleSelection = (id) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const selectAll = () => {
    if (selectedIds.size === filteredImages.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredImages.map((img) => img.id)));
    }
  };

  const handleDownloadSelected = async () => {
    const selectedPhotos = galleryImages.filter((img) => selectedIds.has(img.id));

    for (const photo of selectedPhotos) {
      try {
        const response = await fetch(photo.url);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        const extension = photo.url.split('.').pop().split('?')[0] || 'jpg';
        link.download = `${photo.title.replace(/\s+/g, '_')}_${photo.id}.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        await new Promise((resolve) => setTimeout(resolve, 200));
      } catch (error) {
        console.error('Download failed for', photo.url, error);
      }
    }
  };

  const achievements = [
    { title: 'Best Student Organization 2024', icon: Award, color: 'bg-yellow-500' },
    { title: '500+ Active Members', icon: Users, color: 'bg-blue-500' },
    { title: '50+ Events Organized', icon: Calendar, color: 'bg-green-500' },
    { title: 'Community Impact Award', icon: Heart, color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
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
      <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg border border-transparent dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {achievement.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery with Folder Organization */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header and Folder Tabs */}
          <div className="flex flex-col gap-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                  Photo Albums
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Browse photos by event folders or explore all memories
                </p>
              </div>

              {/* Selection Controls */}
              <div className="flex items-center gap-3 flex-wrap justify-center">
                {!isSelectionMode ? (
                  <button
                    onClick={() => setIsSelectionMode(true)}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-colors shadow-md text-sm font-medium"
                  >
                    <CheckSquare className="w-4 h-4" />
                    Select Photos
                  </button>
                ) : (
                  <>
                    <button
                      onClick={selectAll}
                      className="flex items-center gap-2 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
                    >
                      {selectedIds.size === filteredImages.length ? 'Deselect All' : 'Select All'}
                    </button>
                    <button
                      onClick={handleDownloadSelected}
                      disabled={selectedIds.size === 0}
                      className={`flex items-center gap-2 px-5 py-2 rounded-full transition-colors shadow-md text-sm font-medium ${selectedIds.size > 0
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-200 dark:bg-slate-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                        }`}
                    >
                      <Download className="w-4 h-4" />
                      Download ({selectedIds.size})
                    </button>
                    <button
                      onClick={() => {
                        setIsSelectionMode(false);
                        setSelectedIds(new Set());
                      }}
                      className="text-gray-500 hover:text-red-600 px-3 py-2 transition-colors text-sm font-medium"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Folder Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* All Photos Card */}
              <div
                onClick={() => setSelectedFolder('all')}
                className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${selectedFolder === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-[1.02] border-transparent'
                    : 'bg-white dark:bg-slate-900 text-gray-800 dark:text-white border-gray-200 dark:border-slate-800 hover:shadow-md hover:border-blue-400 dark:hover:border-slate-700'
                  }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedFolder === 'all'
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                      }`}
                  >
                    <Images className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${selectedFolder === 'all'
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400'
                      }`}
                  >
                    {galleryImages.length} Photos
                  </span>
                </div>
                <h3 className="text-lg font-bold">All Folders</h3>
                <p
                  className={`text-xs mt-1 ${selectedFolder === 'all' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                    }`}
                >
                  Complete gallery archive
                </p>
              </div>

              {/* Dynamic Folder Cards */}
              {foldersList.map((folder) => {
                const isSelected = selectedFolder === folder.key;
                return (
                  <div
                    key={folder.key}
                    onClick={() => setSelectedFolder(folder.key)}
                    className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${isSelected
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl scale-[1.02] border-transparent'
                        : 'bg-white dark:bg-slate-900 text-gray-800 dark:text-white border-gray-200 dark:border-slate-800 hover:shadow-md hover:border-purple-400 dark:hover:border-slate-700'
                      }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-purple-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400'
                          }`}
                      >
                        {isSelected ? (
                          <FolderOpen className="w-6 h-6" />
                        ) : (
                          <Folder className="w-6 h-6" />
                        )}
                      </div>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-semibold ${isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400'
                          }`}
                      >
                        {folder.count} Photos
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{folder.label}</h3>
                    <p
                      className={`text-xs mt-1 truncate ${isSelected
                          ? 'text-purple-100'
                          : 'text-gray-500 dark:text-gray-400'
                        }`}
                    >
                      Folder: {folder.key}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Filter Pills */}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800 bg-gray-100 dark:bg-slate-800 ${isSelectionMode && selectedIds.has(image.id)
                    ? 'ring-4 ring-indigo-500 scale-105'
                    : ''
                  }`}
                onClick={() =>
                  isSelectionMode ? toggleSelection(image.id) : setSelectedImage(image.url)
                }
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Folder Badge (Top Left) */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm">
                    <Folder className="w-3 h-3 text-purple-300" />
                    {image.folderLabel}
                  </span>
                </div>

                {/* Selection Overlay (Top Right) */}
                {isSelectionMode && (
                  <div
                    className={`absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-md ${selectedIds.has(image.id)
                        ? 'bg-indigo-500 text-white'
                        : 'bg-white/70 dark:bg-slate-800/70 text-gray-700 dark:text-gray-300'
                      }`}
                  >
                    {selectedIds.has(image.id) ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Circle className="w-6 h-6" />
                    )}
                  </div>
                )}

                {/* Hover Details Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 ${isSelectionMode ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-semibold text-lg mb-1 leading-snug">{image.title}</h3>
                    <div className="flex items-center justify-between text-xs mt-2">
                      <span className="text-gray-300">{image.date}</span>
                      <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
              <Folder className="w-12 h-12 mx-auto text-gray-400 mb-3" />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                No photos found in this folder
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* Video Highlights */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Video Highlights
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-950 p-8 rounded-2xl border border-transparent dark:border-slate-800 shadow-md">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg font-medium">Annual Summit 2024</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Communication Summit Highlights
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Relive the best moments from our biggest event of the year, featuring keynote speakers, workshops, and networking sessions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-950 p-8 rounded-2xl border border-transparent dark:border-slate-800 shadow-md">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg font-medium">Club Journey</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Our Journey So Far
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
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