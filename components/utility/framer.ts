export const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.66,
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
      delay: 0.2,
      staggerChildren: 0.66,
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
