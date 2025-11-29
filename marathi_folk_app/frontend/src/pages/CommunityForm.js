import React, { useState, useEffect } from "react";
import { Upload, Music, Clock, Landmark } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import CulturalPlatformFooter from "../components/CulturalPlatformFooter";

const CommunityForm = () => {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isLoggedIn) navigate("/login", { replace: true });
  }, [isLoggedIn, navigate]);

  const handleImageUpload = (e) => setImages(Array.from(e.target.files));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:5000/api/community/add",
        { title, category, location, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("✅ Contribution submitted successfully!");
      setTimeout(() => {
        setTitle("");
        setCategory("");
        setLocation("");
        setContent("");
        setImages([]);
      }, 1000);
    } catch (err) {
      setMessage("⚠️ Failed to submit contribution");
    }
  };

  return (
    <div className="bg-[#fff8f3] min-h-screen font-['Public_Sans'] flex flex-col">

      {/* ------------------ HEADER (Same as other pages) ------------------ */}
      <header className="bg-[#d32f2f] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-14 py-5 shadow-lg text-center">
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide">🎵 Maharashtra Cultural Platform</h1>
          <p className="text-sm md:text-base font-light">Cultural AI Platform for Maharashtra</p>
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
            to="/communityform"
            className="bg-white text-[#d32f2f] font-semibold px-5 py-2 rounded-lg hover:bg-[#ffe1e1] transition shadow-md"
          >
            योगदान द्या / Contribute
          </Link>
        </nav>
      </header>

      {/* ------------------ PAGE TITLE ------------------ */}
      <header className="text-center py-10 px-6 bg-[#fff8f3]">
        <h1 className="text-4xl font-extrabold text-[#222] mb-2">
          सामुदायिक ज्ञान केंद्र / <span className="text-[#e36414]">Community Knowledge Hub</span>
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          महाराष्ट्राची संस्कृती, परंपरा, पाकविधी आणि कथांचे तुमचे ज्ञान सामायिक करा.
        </p>
      </header>

      {/* ------------------ FORM ------------------ */}
      <main className="max-w-3xl mx-auto p-6 w-full">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white rounded-2xl shadow-md p-8 border border-orange-100"
        >
          {message && <p className="text-center text-green-600">{message}</p>}

          <div>
            <label className="font-semibold text-gray-800">शीर्षक / Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="उदा. पारंपरिक कोल्हापुरी चप्पल बनवणे"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-orange-300 outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[45%]">
              <label className="font-semibold text-gray-800">प्रकार / Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-orange-300 outline-none"
              >
                <option value="">Select</option>
                <option>कथा / Story</option>
                <option>पाककृती / Recipe</option>
                <option>हस्तकला / Handicraft</option>
                <option>लोककला / Folk Art</option>
              </select>
            </div>

            <div className="flex-1 min-w-[45%]">
              <label className="font-semibold text-gray-800">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Kolhapur, Mumbai"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-orange-300 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-gray-800">Content</label>
            <textarea
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your knowledge in detail..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-orange-300 outline-none"
            ></textarea>
          </div>

          <div>
            <label className="font-semibold text-gray-800">Add Images (Optional)</label>
            <div className="mt-2 border-2 border-dashed border-orange-300 rounded-lg p-6 text-center bg-orange-50 hover:bg-orange-100 transition">
              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                id="imageUpload"
                onChange={handleImageUpload}
              />

              <label
                htmlFor="imageUpload"
                className="cursor-pointer flex flex-col items-center gap-2 text-gray-600"
              >
                <Upload className="w-8 h-8 text-[#e36414]" />
                <p className="text-sm">Click to upload images (PNG, JPG up to 5MB)</p>
              </label>

              <div className="flex flex-wrap gap-3 mt-3">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="h-20 w-20 object-cover rounded-md border"
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#e36414] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#d4580d] transition"
          >
            Share Knowledge
          </button>
        </form>
      </main>

      {/* Logout Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => {
            logout();
            navigate("/login", { replace: true });
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* ------------------ FOOTER ------------------ */}
      <CulturalPlatformFooter />
    </div>
  );
};

export default CommunityForm;
