import React, { useEffect, useState } from "react";
import { Heart, MessageCircle, Share2, User, Music, Clock, Landmark } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import CulturalPlatformFooter from "../components/CulturalPlatformFooter";

const Contribution = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", "कथा", "पाककृती", "कला", "हस्तकला"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/community/all");
        setPosts(res.data);
      } catch (err) {
        console.log("Error fetching data");
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    categoryFilter === "All"
      ? posts
      : posts.filter((p) => p.category.includes(categoryFilter));

  return (
    <div className="bg-[#fff7ef] min-h-screen flex flex-col">

      {/* NAVBAR (Same as HomePage) */}
      <header className="bg-[#d32f2f] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-14 py-5 shadow-lg text-center">
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide">🎵 महाराष्ट्र सांस्कृतिक मंच</h1>
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

      {/* TOP TITLE */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-[#1a1a1a]">
          सामुदायिक ज्ञान केंद्र <span className="text-[#e36414]">/ Community Knowledge Hub</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-3xl mx-auto">
          महाराष्ट्राची संस्कृती, परंपरा, पाकविधी आणि कथांचे तुमचे ज्ञान सामायिक करा. मिळून आपण आपला वारसा भविष्यासाठी जपूया.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 mt-6">
          <button className="px-5 py-2 rounded-full bg-white border shadow-sm flex items-center gap-2" disabled>
            👤 योगदान पाहा
          </button>

          <button
            onClick={() => navigate("/communityform")}
            className="px-5 py-2 rounded-full bg-[#e36414] text-white shadow-md"
          >
            ज्ञान सामायिक करा +
          </button>
        </div>
      </header>

      {/* FILTERS */}
      <div className="flex justify-center flex-wrap gap-3 mt-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-4 py-1 rounded-full text-sm border ${
              categoryFilter === cat ? "bg-[#e36414] text-white" : "bg-white text-[#e36414]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto p-5">
        {filteredPosts.map((post) => (
          <div
            key={post._id}
            className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">
                {post.author?.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-gray-600 text-sm">
                  by {post.author} • {post.location} • {post.time}
                </p>
              </div>
              <span className="ml-auto bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                {post.category}
              </span>
            </div>

            <p className="text-gray-700 mt-4 leading-relaxed">
              {post.content.slice(0, 120)}...
            </p>

            <div className="flex justify-between items-center mt-5 pt-3 border-t">
              <div className="flex gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <Heart size={18} /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={18} /> {post.comments}
                </span>
              </div>
              <button className="flex items-center gap-1 text-gray-700 hover:underline">
                <Share2 size={18} /> Share
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-6">
        <button className="px-6 py-2 border border-[#e36414] rounded-lg text-[#e36414]">
          अधिक योगदान लोड करा
        </button>
      </div>
         {/* ------------------ FOOTER ------------------ */}
            <CulturalPlatformFooter />
    </div>
  );
};

export default Contribution;
