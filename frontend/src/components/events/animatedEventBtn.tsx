import { FC } from "react";
import { motion } from "framer-motion";

interface AnimatedEventButtonProps {
  name: string;
  handleButtonClick: () => void;
}

const AnimatedEventButton: FC<AnimatedEventButtonProps> = ({
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
        className="w-full bg-customOrange flex text-black dark:text-white items-center text-neutral-700 m-2 space-x-2  p-1.5 rounded-xl shadow-lg shadow-cyan-900/50 dark:shadow-orange-100 hover:shadow-none items-center justify-center"
        onClick={handleButtonClick}
      >
        <span className="text-sm md:text-lg ">{name}</span>
      </button>
    </motion.div>
  );
};

export default AnimatedEventButton;
