export const footerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
export const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5,
    },
  },
  hover: {
    opacity: 1,
  },
};

export const headerTextVariants = {
  visible: {
    x: -35,
  },
  hover: {
    x: -25,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
    },
  },
};

export const headerIconVariants = {
  visible: {
    x: 0,
  },
  hover: {
    x: 35,
    opacity: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
    },
  },
};

export const headerIconRectVariants = {
  visible: {
    x: 0,
    opacity: 0,
  },
  hover: {
    x: -40,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
    },
  },
};
