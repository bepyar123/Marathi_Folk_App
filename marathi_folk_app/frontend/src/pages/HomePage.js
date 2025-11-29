
import React, { useState } from "react";
import { Music, Users, Landmark, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CulturalPlatformFooter from "../components/CulturalPlatformFooter";

const HomePage = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const marathi = {
    title: "🎵 महाराष्ट्र सांस्कृतिक मंच",
    subtitle: "Cultural AI Platform for Maharashtra",
    aiTag: "🎶 कृत्रिम बुद्धिमत्तेचा सांस्कृतिक मंच",
    heading: "शोधा महाराष्ट्राची",
    paragraph:
      "कृत्रिम बुद्धिमत्तेच्या साधनांमुळे मराठी लोकगीत, परंपरा, सण आणि पाककला एकत्र आणा. महाराष्ट्राच्या वैविध्यपूर्ण संस्कृतीचे जतन आणि साजरे करण्यासाठी आमच्या समुदायात सामील व्हा.",
    readEnglish: "Read in English",
    exploreSongs: "लोकगीते एक्सप्लोर करा 🎵",
    exploreCulture: "संस्कृतीबद्दल जाणून घ्या 🌸",
    StoryTeller: "कथा सांगणारा 🧠",
    stat1: "लोकगीते",
    stat2: "संस्कृती परंपरा",
    stat3: "समुदाय सदस्य",
  };

  const english = {
    title: "🎵 Maharashtra Cultural Platform",
    subtitle: "Cultural AI Platform for Maharashtra",
    aiTag: "🎶 AI-powered Cultural Platform",
    heading: "Explore the Essence of Maharashtra",
    paragraph:
      "Discover Marathi folk songs, festivals, traditions, and cuisines through Artificial Intelligence. Join our community to celebrate and preserve Maharashtra’s vibrant culture.",
    readEnglish: "मराठीत वाचा / Read in Marathi",
    exploreSongs: "Explore Folk Songs 🎵",
    exploreCulture: "Discover Culture 🌸",
    StoryTeller: "Story Teller 🧠",
    stat1: "Folk Songs",
    stat2: "Cultural Traditions",
    stat3: "Community Members",
  };

  const text = isEnglish ? english : marathi;

  return (
    <div className="bg-[#fff7ef] min-h-screen font-[Poppins,'Noto Sans Devanagari',sans-serif] flex flex-col">
      {/* Navbar */}
      <header className="bg-[#d32f2f] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-14 py-5 shadow-lg text-center">
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide">{text.title}</h1>
          <p className="text-sm md:text-base font-light">{text.subtitle}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-5 mt-3 md:mt-0 text-base md:text-lg font-medium">
          <Link to="/predict" className="hover:underline flex items-center gap-1">
            <Music size={18} /> लोकगीते / Folk Songs
          </Link>

          <Link to="/timeline" className="hover:underline flex items-center gap-1">
            <Clock size={18} /> कालरेषा / Timeline
          </Link>

          <Link to="/cultureexplorer" className="hover:underline flex items-center gap-1">
            <Landmark size={18} /> संस्कृती अन्वेषक / Culture Explorer
          </Link>

          <Link
            to="/contribution"
            className="bg-white text-[#d32f2f] font-semibold px-5 py-2 rounded-lg hover:bg-[#ffe1e1] transition shadow-md"
          >
            योगदान द्या / Contribute
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 flex-1">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-[#d32f2f] font-semibold text-base md:text-lg">{text.aiTag}</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            {text.heading}
          </h1>
          <div className="w-36 h-3 bg-[#ffc107] mx-auto md:mx-0 rounded"></div>
          <p className="text-lg text-gray-700 leading-relaxed mt-3">{text.paragraph}</p>

          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="text-[#d32f2f] font-semibold hover:underline block text-base md:text-lg"
          >
            {text.readEnglish}
          </button>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
            <Link
              to="/predict"
              className="bg-[#d32f2f] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#b71c1c] transition text-base md:text-lg"
            >
              {text.exploreSongs}
            </Link>
            <Link
              to="/cultureexplorer"
              className="bg-[#ffcc80] text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#ffb74d] transition text-base md:text-lg"
            >
              {text.exploreCulture}
            </Link>
             <Link
              to="/storytelling"
              className="bg-[#507d2a] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#3e5d1f] transition text-lg"
            >
              {text.StoryTeller}
            </Link>

          </div>

        </div>

        {/* Enlarged & Animated Image Section */}
        <motion.div
          className="flex-1 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ffcc80]">
            <img
              src="/images/Festive1.jpeg"
              alt="Festive Celebration"
              className="w-full max-w-2xl h-[450px] md:h-[550px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm md:text-base p-3 rounded-lg">
              पारंपरिक ताळविणी नृत्य <br />
              महाराष्ट्राची लोककला परंपरा
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#fff3e0] py-10 px-6 flex flex-wrap justify-center gap-6">
        <div className="bg-white w-40 p-5 rounded-2xl shadow text-center">
          <div className="text-3xl">🎶</div>
          <h2 className="text-[#d32f2f] text-2xl font-bold mt-1">500+</h2>
          <p className="text-gray-600">{text.stat1}</p>
        </div>

        <div className="bg-white w-40 p-5 rounded-2xl shadow text-center">
          <div className="text-3xl">👑</div>
          <h2 className="text-[#d32f2f] text-2xl font-bold mt-1">1000+</h2>
          <p className="text-gray-600">{text.stat2}</p>
        </div>

        <div className="bg-white w-40 p-5 rounded-2xl shadow text-center">
          <div className="text-3xl">🧑‍🤝‍🧑</div>
          <h2 className="text-[#d32f2f] text-2xl font-bold mt-1">500+</h2>
          <p className="text-gray-600">{text.stat3}</p>
        </div>
      </section>
        {/* Footer */}
      <CulturalPlatformFooter />
    </div>
  );
};

export default HomePage;
