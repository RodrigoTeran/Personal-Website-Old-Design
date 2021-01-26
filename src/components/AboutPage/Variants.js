export const cardVariants = {
  hidden: {
    y: 0,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
  visible: {
    y: 150,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};
export const cardAnimTextVariants = {
  visible: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
  hidden: {
    y: 150,
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};
