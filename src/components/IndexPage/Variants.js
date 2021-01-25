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

export const independentDivTextVariants = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: -10,
    transition: { type: "spring", stiffness: 200 },
  },
  tap: {
    opacity: 1,
    y: -1,
    transition: { type: "spring", stiffness: 200 },
  },
};

export const independentDivIconVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200 },
  },
  tap: {
    y: -5,
    transition: { type: "spring", stiffness: 200 },
  },
};
