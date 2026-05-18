import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
};

export const AnimatedSection = ({ children, id, className, delay = 0, direction = "up" }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: variants[direction].hidden,
        visible: {
          ...variants[direction].visible,
          transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.section>
  );
};
