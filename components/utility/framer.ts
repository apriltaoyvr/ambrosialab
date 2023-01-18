export const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.55,
    },
  },
};

export const fadeItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const slideContainer = {
  hidden: { opacity: 0, y: '10vh' },
  visible: {
    opacity: 1,
    y: '0',
    transition: {
      staggerChildren: 0.45,
    },
  },
};

export const slideItem = {
  hidden: { opacity: 0, y: '2vh' },
  visible: {
    opacity: 1,
    y: '0',
  },
};
