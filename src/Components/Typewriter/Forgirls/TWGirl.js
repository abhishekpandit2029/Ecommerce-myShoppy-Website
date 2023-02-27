import React from 'react'
import "./TWGirls.css"
import { TypeAnimation } from 'react-type-animation';

const TWGirl = () => {
  return (
    <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'We produce food for Mice',
    1000,
    'We produce food for Hamsters',
    1000,
    'We produce food for Guinea Pigs',
    1000,
    'We produce food for Chinchillas',
    1000,
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '2em', background: "#fe8235" }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
  );
};

export default TWGirl


