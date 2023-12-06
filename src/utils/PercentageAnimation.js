import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const animationPercentage = keyframes`
0% {
  opacity: 0;
  transform: translateY(20px);
}


10%{
  opacity: 0;
}

60%{
  opacity: 1;
  transform: translateY(0);

}
100%{
  opacity: 1;
  transform: translateY(0);

}
`;

const Percentage = styled.span`
  opacity: 0;
  /* transform: translateY(20px); */

  animation: ${animationPercentage} 3000ms cubic-bezier(0.52, 2.02, 0, 2.02)
    both;
`;

const PercentageAnimation = ({ targetPercentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const animationDuration = 1500; // ajustez la durée de l'animation selon vos besoins
    const framesPerSecond = 60;
    const totalFrames = (animationDuration / 1000) * framesPerSecond;
    const increment = targetPercentage / totalFrames;

    let frame = 0;
    const intervalId = setInterval(() => {
      frame++;
      const newPercentage = Math.min(
        currentPercentage + increment,
        targetPercentage
      );
      setCurrentPercentage(newPercentage);

      if (frame === totalFrames || newPercentage === targetPercentage) {
        clearInterval(intervalId);
      }
    }, 1000 / framesPerSecond);

    return () => clearInterval(intervalId);
  }, [currentPercentage, targetPercentage]);

  return <Percentage>{`${Math.floor(currentPercentage)}%`}</Percentage>;
};

export default PercentageAnimation;
