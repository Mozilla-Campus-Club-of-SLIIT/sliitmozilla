/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AnimatedButtonProps {
  name: string;
  icon?: any;
  handleButtonClick: () => void;
}

const AnimatedBlogBtn: FC<AnimatedButtonProps> = ({
  name,
  icon,
  handleButtonClick,
}) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <button
        className="relative flex items-center text-neutral-700 m-2 space-x-2 p-1.5 rounded-xl
    bg-btn-bg-blog bg-cover bg-center
    backdrop-filter backdrop-blur-lg bg-opacity-80
    bg-white/10 border border-white/20
    shadow-md shadow-gray-200 dark:shadow-gray-700"
        onClick={handleButtonClick}
      >
        <span
          className="text-sm md:text-lg text-opacity-40 transition-all duration-300
    bg-clip-text text-transparent bg-text-gradient hover:text-opacity-100 hover:text-white"
        >
          {name}
        </span>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="ml-2 bg-clip-text text-white"
          />
        )}
      </button>
    </motion.div>
  );
};

export default AnimatedBlogBtn;
