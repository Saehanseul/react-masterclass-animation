import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 100px;
  font-size: 24px;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;

  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svgVars = {
  start: { fill: "rgba(255, 255, 255, 0.0)", pathLength: 0 },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1
  }
};

const boxVars = {
  visible: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0
  }),
  invisible: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0
  })
};

function App() {
  const [showing, setShowing] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setShowing((prev) => (prev === 6 ? 1 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setShowing((prev) => (prev === 1 ? 6 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence mode="wait" custom={back}>
        <Box
          custom={back}
          key={showing}
          variants={boxVars}
          initial="visible"
          animate="invisible"
          exit="exit"
          transition={{ duration: 1 }}
        >
          {showing}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>Next</button>
      <button onClick={prevPlease}>Prev</button>
    </Wrapper>
  );
}

export default App;
