import { motion } from "framer-motion";
import { getTransition } from "../utils/getTransition";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition()}
        >
          {subtitle}
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition()}
          className="text-4xl font-medium"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
};

export default SectionTitle;
