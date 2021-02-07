export const topContainerVariants = {
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
    x: -50,
    opacity: 0,
    transition: { type: "tween" },
  },
};

export const topPVariants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200 },
  },
};

export const bottomContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { type: "tween" },
  },
};

export const bottomCardVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200 },
  },
};
