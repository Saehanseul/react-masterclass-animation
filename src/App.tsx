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
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 35px;
  position: absolute;
  top: 100px;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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
  initial: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotateZ: 360
  },
  leaving: {
    scale: 0,
    opacity: 0,
    y: 20
  }
};

function App() {
  const [showing, setShowing] = useState(false);

  const toggleShowing = () => {
    setShowing(!showing);
  };

  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVars}
            initial={"initial"}
            animate={"visible"}
            exit={"leaving"}
            transition={{ duration: 3 }}
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
