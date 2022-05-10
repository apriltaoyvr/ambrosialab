import { useState } from 'react';

import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';



const FadeIn = ({ delay, children }) => {
  const [inView, setInview] = useState(false);
  const transition = useSpring({
    delay: parseInt({ delay }),
    to: {
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

FadeIn.defaultProps = {
  delay: 500, 
  children: 'Test'
}

export default FadeIn;
