export const buttonHeaderVariants = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 200,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
};
export const sentenceVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { type: "tween" },
  },
};

export const buttonsContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { type: "tween", delay: 0.2 },
  },
};

export const letterVariants = {
  hidden: {
    scaleY: 0,
    originY: "100%",
    color: "#43f7d5",
  },
  visible: {
    scaleY: 1,
    originY: "100%",
    color: "#fff",
    transition: { type: "spring", stiffness: 200 },
  },
};
