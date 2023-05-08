import React, { ReactNode } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface ICollapseProps {
  style?: React.CSSProperties;
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
}

const Collapse = ({ isOpen, style, className, children }: ICollapseProps) => {
  const animateVariants: Variants = {
    open: {
      height: "auto",
    },
    close: {
      height: 0,
    },
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            initial="close"
            animate="open"
            exit="close"
            variants={animateVariants}
            className={className}
            transition={{ restDelta: 0 }}
            style={style}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Collapse;
