import { FC } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  name: string;
  handleButtonClick: () => void;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
  name,
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
        className="bg-customOrange flex text-black dark:text-white items-center text-neutral-700 m-2 space-x-2  p-1.5 rounded-3xl shadow-lg shadow-cyan-900/50 dark:shadow-orange-100 hover:shadow-none"
        onClick={handleButtonClick}
      >
        <span className="text-sm md:text-lg ">{name}</span>
      </button>
    </motion.div>
  );
};

export default AnimatedButton;
