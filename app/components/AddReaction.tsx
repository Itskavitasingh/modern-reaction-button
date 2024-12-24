"use client";

import { useState } from "react";
import { MdOutlineAddReaction } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import EmojiMenu from "./EmojiMenu";
import { Paper } from "@mui/material";
import { FaOctopusDeploy } from "react-icons/fa6";
import { GiVampireDracula } from "react-icons/gi";
import { RiAliensFill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa6";

const categories = [
  { name: "robots", icon: <FaRobot color="#ff6600" size={20} /> },
  { name: "vampire", icon: <GiVampireDracula color="#800e13" size={20} /> },
  { name: "alien", icon: <RiAliensFill color="#31572c" size={20} /> },
  { name: "octopus", icon: <FaOctopusDeploy color="#0a0908" size={20} /> },
];

export default function AddReaction() {
  const [emojiCategoryMenu, toggleEmojiCategoryMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedEmojiMenu, setSelectedEmojiMenu] = useState("");
  const [emojiMenu, toggleEmojiMenu] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedEmojiMenu(category);
    toggleEmojiMenu(!emojiMenu);
    console.log(category);
  };

  const emojis = [
    "😀",
    "😄",
    "😁",
    "😆",
    "😅",
    "🤣",
    "😂",
    "🙂",
    "🙃",
    "🫠",
    "😉",
    "😊",
    "😇",
    "🥰",
    "😍",
    "🤩",
    "😘",
    "😗",
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    // <div className="w-screen h-screen flex flex-col justify-center items-center">
    <div className="relative inline-block">
      {/* Add Reaction Button */}
      <MdOutlineAddReaction
        size={30}
        className="cursor-pointer text-blue-600"
        onClick={() => toggleEmojiCategoryMenu(!emojiCategoryMenu)}
      />

      {/* Emoji Menu */}
      <AnimatePresence>
        {emojiCategoryMenu && (
          <div className="absolute top-12 left-0">
            <Paper elevation={1} className="flex flex-col rounded-xl p-2 ">
              <div className="flex flex-row gap-4 px-5 py-2">
                {categories.map((category) => (
                  <div
                    className="p-2 bg-gray-300 rounded-xl cursor-pointer"
                    onClick={() => handleCategoryChange(category.name)}
                    key={category.name}
                  >
                    {category.icon}
                  </div>
                ))}
              </div>
              <hr className="border-t-2 border-gray-300 w-full my-4" />
              {emojiMenu ? (
                <div>
                  <EmojiMenu category={selectedCategory} />
                </div>
              ) : (
                ""
              )}
            </Paper>
          </div>
        )}
      </AnimatePresence>
    </div>
    // </div>
  );
}
