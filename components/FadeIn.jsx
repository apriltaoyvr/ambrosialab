import { useState } from 'react';

import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

const FadeIn = ({ delay, children }) => {
  const [inView, setInview] = useState(false);
  let time = parseInt({ delay });
  const transition = useSpring({
    delay: time,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    to: {
      opacity: !inView ? 0 : 1,
    },
    config: { tension: 220, friction: 120 },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

FadeIn.defaultProps = {
  delay: 500,
  children: 'Test',
};

export default FadeIn;
