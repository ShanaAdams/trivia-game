import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiEffect = () => {
  //adjust confetti size based on window size
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} />;
};

export default ConfettiEffect;
