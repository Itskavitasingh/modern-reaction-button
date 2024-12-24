import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Emoji {
  name: string;
  emojis: string[];
}

interface EmojiMenuProps {
  category: string;
}

const EmojiMenu: FC<EmojiMenuProps> = ({ category }) => {
  const emojis = [
    {
      name: "robots",
      emojis: ["😀", "😄", "😁", "😆"],
    },
    {
      name: "vampire",
      emojis: ["😅", "🤣", "😂", "🙂"],
    },
    {
      name: "alien",
      emojis: ["🙃", "🫠", "😉", "😊"],
    },
    {
      name: "octopus",
      emojis: ["😇", "🥰", "😍", "🤩", "😘", "😗"],
    },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  let selected = emojis.filter((emoji) => emoji.name == category);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="grid grid-cols-5 gap-2 bg-gray-200 rounded-lg p-4 shadow-lg w-full"
    >
      {selected?.emojis.map((emoji, index) => (
        <div
          key={`${category}-${index}`} // Use a combination of category and index for a unique key
          className="p-2 cursor-pointer text-2xl hover:bg-gray-300 rounded-lg"
        >
          {emoji}
        </div>
      ))}

      {/* Optional: Handle case where no emojis are found */}
      {!selected && <div>No emojis found for this category.</div>}
    </motion.div>
  );
};

export default EmojiMenu;
