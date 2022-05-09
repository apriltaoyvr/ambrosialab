import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Backdrop = ({children, onClick}) => {
  return (
    <motion.div 
    onClick={onClick}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>

    </motion.div>
  )
}

export default Backdrop;