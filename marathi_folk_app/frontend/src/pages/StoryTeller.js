
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import stories from "../data/stories";

const StoryTeller = () => {
  const [category, setCategory] = useState("historical");
  const [story, setStory] = useState(null);
  const [lang, setLang] = useState("mr"); // default Marathi

  const toggleLang = () => setLang(lang === "mr" ? "en" : "mr");

  const generateStory = () => {
    const list = stories[category];
    const randomStory = list[Math.floor(Math.random() * list.length)];
    setStory(randomStory);
  };

  // Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const emojiVariants = {
    hover: { y: [0, -5, 0], transition: { duration: 0.4, repeat: Infinity } },
  };

  return (
    <motion.div
      className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* TITLE */}
      <motion.h1
        className="text-4xl font-bold text-orange-600 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        कथा संग्रह
      </motion.h1>

      {/* LANGUAGE TOGGLE BUTTON */}
      <motion.button
        onClick={toggleLang}
        whileTap={{ scale: 0.95 }}
        className="mb-6 bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow"
      >
        {lang === "mr" ? " English" : "मराठी"}
      </motion.button>

      {/* CATEGORY BUTTONS */}
      <motion.div
        className="flex gap-4 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { key: "historical", icon: "⚔️", mr: "ऐतिहासिक", en: "Historical" },
          { key: "folklore", icon: "🎭", mr: "लोककथा", en: "Folklore" },
          { key: "spiritual", icon: "🙏", mr: "आध्यात्मिक", en: "Spiritual" },
        ].map((cat) => (
          <motion.button
            key={cat.key}
            onClick={() => {
              setCategory(cat.key);
              setStory(null);
            }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            variants={buttonVariants}
            className={`px-4 py-3 rounded-xl font-semibold flex flex-col items-center w-32 ${
              category === cat.key ? "bg-orange-600 text-white" : "bg-white border"
            }`}
          >
            <motion.span
              className="text-2xl"
              variants={emojiVariants}
              whileHover="hover"
            >
              {cat.icon}
            </motion.span>
            {lang === "mr" ? cat.mr : cat.en}
          </motion.button>
        ))}
      </motion.div>

      {/* STORY BOX */}
      <AnimatePresence mode="wait">
        <motion.div
          key={story ? story.title[lang] : "placeholder"}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl text-lg leading-relaxed"
        >
          {story ? (
            <div>
              <h2 className="text-2xl font-bold text-orange-700 mb-3">
                {story.title[lang]}
              </h2>
              <p className="whitespace-pre-line">{story.story[lang]}</p>
            </div>
          ) : (
            <span className="text-gray-500">
              {lang === "mr"
                ? "कथा पाहण्यासाठी खालील बटणावर क्लिक करा"
                : "Click the button below to see a story"}
            </span>
          )}
        </motion.div>
      </AnimatePresence>

      {/* GENERATE BUTTON WITH PULSE */}
      <motion.button
        onClick={generateStory}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } }}
        className="mt-6 bg-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-md"
      >
        {lang === "mr" ? "नवीन कथा तयार करा" : "Generate New Story"}
      </motion.button>
    </motion.div>
  );
};

export default StoryTeller;
