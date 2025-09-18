import React, { useState } from "react";
import { User, BookOpen, Calendar, Mail, Phone, Speech } from "lucide-react";

const initialState = {
  name: "",
  department: "",
  year: "",
  semester: "",
  email: "",
  mobile: "",
};

const courses = [
  "B.Tech CSE",
  "B.Tech non-CSE",
  "BBA",
  "MBA",
  "BCA",
  "MCA",
  "Poly",
  "B.Pharma",
  "D.Pharma",
];

const years = ["1", "2", "3", "4"];
const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

const RegisterEvent = ({ eventName }) => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData();
    formData.append("event", eventName);
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("access_key", "dcc7f535-0dbf-4c7e-82be-86aa3cc40fd0");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setResult("Registration successful!");
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (err) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-lg rounded-2xl shadow-2xl bg-transparent backdrop-blur-lg border border-gray-200/50">
      {/* Gradient Header */}
      <div className="rounded-t-2xl px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-500 text-white">
        <h2 className="text-2xl font-bold mb-1">
          Register for {eventName}
        </h2>
        <p className="text-sm opacity-90">
          Fill in your details to become a member
        </p>
      </div>
      <div className="px-8 py-8">
        {submitted ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-green-600 mb-2">Thank you for registering!</p>
            {result && <p className="text-gray-600">{result}</p>}
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <User className="w-4 h-4" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Course
              </label>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              >
                <option value="">Select Your Course</option>
                {courses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            {/* Year & Semester */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Year
                </label>
                <select
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                >
                  <option value="">Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Semester
                </label>
                <select
                  name="semester"
                  value={form.semester}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                >
                  <option value="">Semester</option>
                  {semesters.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Talent */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Speech className="w-4 h-4" />Mention your talent
              </label>
              <input
                type="text"
                name="talent"
                value={form.talent}
                onChange={handleChange}
                placeholder="Dancing, Singing, Speech, etc."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="samwaad@gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Contact Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="9876543210"
                pattern="[0-9]{10,}"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-600 transition-all"
            >
              Register
            </button>
            {result && <p className="text-center text-sm text-gray-500">{result}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterEvent;