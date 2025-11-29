
import React, { useState } from "react";
import { Upload, Mic, Music, Brain } from "lucide-react";
import { motion } from "framer-motion";
import CulturalPlatformFooter from "../components/CulturalPlatformFooter";

export default function FolkSongPrediction() {
  const [language, setLanguage] = useState("mr");
  const [lyrics, setLyrics] = useState("");
  const [result, setResult] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === "mr" ? "en" : "mr");
  };

  const analyzeSong = () => {
    // Mock API Call
    setTimeout(() => {
      setResult({
        genre: "Powada / पोवाडा",
        region: "Western Maharashtra / पश्चिम महाराष्ट्र",
        context: "Heroic ballad praising Maratha warriors.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-8">
      <motion.h1
        className="text-4xl font-bold text-orange-700 mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {language === "mr"
          ? "कृत्रिम बुद्धिमत्तेवर आधारित लोकगीत प्रकार ओळखा"
          : "AI-Based Folk Song Type Recognition"}
      </motion.h1>

      <p className="text-gray-700 text-center mb-6">
        {language === "mr"
          ? "तुमचे मराठी लोकगीत अपलोड करा किंवा बोल टाका, आणि त्याचा प्रकार, वैशिष्ट्ये आणि सांस्कृतिक संदर्भ जाणून घ्या."
          : "Upload or enter Marathi folk song lyrics to discover its genre, traits, and cultural context."}
      </p>

      <button
        onClick={toggleLanguage}
        className="mb-8 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
      >
        {language === "mr" ? "English" : "मराठी"}
      </button>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Input Card */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-xl font-semibold text-orange-600 mb-3 flex items-center gap-2">
            <Music className="text-orange-500" />
            {language === "mr" ? "गीत इनपुट" : "Song Input"}
          </h2>

          <p className="text-gray-600 mb-3">
            {language === "mr"
              ? "विश्लेषणासाठी गीताचे बोल टाका किंवा ऑडिओ फाइल अपलोड करा."
              : "Enter song lyrics or upload an audio file for analysis."}
          </p>

          <textarea
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            placeholder={
              language === "mr"
                ? "तुमच्या मराठी लोकगीताचे बोल येथे टाका..."
                : "Enter your Marathi folk song lyrics here..."
            }
            className="w-full border rounded-lg p-3 h-40 mb-4 focus:ring-2 focus:ring-orange-400"
          ></textarea>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-orange-50">
              <Upload /> {language === "mr" ? "ऑडिओ अपलोड" : "Upload Audio"}
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-orange-50">
              <Mic /> {language === "mr" ? "बोलून टाका" : "Record Input"}
            </button>
          </div>

          <button
            onClick={analyzeSong}
            className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg w-full hover:opacity-90"
          >
            {language === "mr" ? "गीत विश्लेषण करा" : "Analyze Song"}
          </button>
        </motion.div>

        {/* Result Card */}
        <motion.div
          className="bg-white shadow-lg p-6 rounded-2xl flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-xl font-semibold text-orange-600 mb-3 flex items-center gap-2">
            <Brain className="text-orange-500" />
            {language === "mr" ? "विश्लेषण परिणाम" : "Analysis Result"}
          </h2>

          {!result ? (
            <p className="text-gray-500 mt-10">
              {language === "mr"
                ? "गीताचे तपशील टाका आणि विश्लेषणासाठी क्लिक करा."
                : "Enter song details and click analyze to see the results."}
            </p>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 space-y-3"
            >
              <p>
                <strong>{language === "mr" ? "प्रकार:" : "Genre:"}</strong>{" "}
                {result.genre}
              </p>
              <p>
                <strong>{language === "mr" ? "प्रदेश:" : "Region:"}</strong>{" "}
                {result.region}
              </p>
              <p>
                <strong>{language === "mr" ? "सांस्कृतिक संदर्भ:" : "Cultural Context:"}</strong>{" "}
                {result.context}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
