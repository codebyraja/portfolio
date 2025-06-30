// components/ExpandableList.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpandableList = ({ items = [], previewCount = 2 }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded((prev) => !prev);
  const visibleItems = expanded ? items : items.slice(0, previewCount);

  return (
    <div className="mt-4 space-y-2">
      <ul className="list-disc ml-5 text-white-100 text-sm tracking-wide space-y-2">
        <AnimatePresence initial={false}>
          {visibleItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {items.length > previewCount && (
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          onClick={toggle}
          className="flex items-center justify-end w-full text-xs text-cyan-400 hover:text-cyan-300 transition-all mt-2"
        >
          {expanded ? "See Less" : "See More"}
          <span className="ml-1">
            {expanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
          </span>
        </motion.button>
      )}
    </div>
  );
};

export default ExpandableList;
