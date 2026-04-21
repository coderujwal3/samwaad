import React from 'react';
import { Target, Users, Heart, Lightbulb, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen transition-colors duration-300" id='About-us'>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              SAMWAAD CLUB
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering voices, fostering connections, and building bridges through meaningful communication.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                To create a vibrant platform where students can enhance their communication skills, share diverse perspectives, and build meaningful connections that last a lifetime.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">

                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Foster effective communication skills
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Promote cultural exchange and understanding
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Build confidence and leadership qualities
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                To be the premier student organization that nurtures tomorrow's communicators, leaders, and changemakers through innovative programs and inclusive community building.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">

                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Excellence in student development
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Innovation in learning approaches
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Inclusive community for all students
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-transparent dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Inclusivity</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We welcome students from all backgrounds and create an environment where everyone feels valued and heard.
              </p>
            </div>


            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-transparent dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe in the power of teamwork and collective effort to achieve remarkable results and personal growth.
              </p>
            </div>


            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-transparent dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We strive for excellence in everything we do, encouraging members to reach their full potential.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Our Journey</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">2019 - Foundation</h3>
                    <p className="text-gray-600 dark:text-gray-400">SAMWAAD CLUB was founded by a group of passionate students with a vision to create a platform for meaningful dialogue and connection.</p>
                  </div>

                </div>

                <div className="flex items-start">
                  <div className="w-4 h-4 bg-purple-600 rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">2020-2021 - Growth</h3>
                    <p className="text-gray-600 dark:text-gray-400">Despite challenges, we adapted to virtual formats and continued to grow our community, reaching over 200 members.</p>
                  </div>

                </div>

                <div className="flex items-start">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">2022-2023 - Recognition</h3>
                    <p className="text-gray-600 dark:text-gray-400">Won multiple awards for outstanding student organization and community service initiatives.</p>
                  </div>

                </div>

                <div className="flex items-start">
                  <div className="w-4 h-4 bg-orange-600 rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">2024-2025 - Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-400">Launched new programs including mentorship initiatives and inter-college collaborations, reaching 500+ active members.</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl shadow-lg border border-transparent dark:border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">What We Do</h3>
              <div className="space-y-4">

                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Weekly discussion sessions and debates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Workshops on public speaking and communication</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Cultural events and celebrations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Community service and outreach programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Leadership development initiatives</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Inter-college competitions and collaborations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Leadership Team
          </h2>


          {/* Faculty Coordinator */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-300">Faculty Coordinator</h3>

            <div className="flex justify-center">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 max-w-sm border border-transparent dark:border-slate-700">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-2xl font-bold text-white">AT</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Assist. Prof. Archana Triphati</h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">Faculty Coordinator</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Assistent Professor, Department of Management. Guiding the club with expertise and mentorship.
                </p>
              </div>

            </div>
          </div>

          {/* Student Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-300">Student Leadership</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-700">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-2xl font-bold text-white">AC</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Ashutosh Chatterjee</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">President</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  BCA, Final Year. Leading the club with vision and passion for community building.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-700">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-2xl font-bold text-white">JM</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Jayanti Maurya</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">Vice President</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  B.Tech, 3rd Year. Coordinating events and fostering member engagement.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-700">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-2xl font-bold text-white">UJ</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Ujwal Singh</h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-4">Secretary</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  B.Tech, 3rd Year. Managing communications and organizational activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Our Team Members
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">SP</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Shlok Pandey</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Tech, 3rd Year</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">SS</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Shivali Srivastava</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Pharm, 2nd Year</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">SK</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Sachin Kumar Singh</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Pharm, 2nd Year</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">AS</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Aradhy Singh</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Tech, 2nd Year</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">AK</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Abhishek Kumar Sharma</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Tech, 2nd Year</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">ST</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Abhijeet Kumar Singh</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Tech, 2nd Year</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">SG</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Sujal Gupta</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Pharm, 2nd Year</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">SK</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Saurabh Kumar Singh</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Pharm, 2nd Year</p>
            </div>


            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">RU</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Ritesh Upadhyay</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Pharm, 2nd Year</p>
            </div>

            {/* New Members */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">MA</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Md. Aman</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">BCA, 1st Year</p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">SK</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Sarthak Kasera</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Tech, 1st Year</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">MS</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Mohit Singh</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">BCA, 1st Year</p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">RP</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Rishika Pathak</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">B.Tech, 1st Year</p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">RI</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Risha</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">BCA, 1st Year</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">RT</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Ridhima Tripathi</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">BCA, 1st Year</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-transparent dark:border-slate-800">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-lg font-bold text-white">KK</span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Kumar Kartikey Sahu</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">BCA, 1st Year</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;