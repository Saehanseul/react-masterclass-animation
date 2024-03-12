import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
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

const boxVars = {
  start: {},
  end: {}
};

function App() {
  const x = useMotionValue(0);
  const { scrollY, scrollYProgress } = useScroll();
  const rotateZ = useTransform(x, [-400, 400], [360, -360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  const gradient = useTransform(
    x,
    [-400, 400],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))"
    ]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("scrollY : ", latest);
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scrollYProgress : ", latest);
  });

  useMotionValueEvent(x, "change", (latest) => {
    console.log(latest);
  });
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag={"x"}></Box>
    </Wrapper>
  );
}

export default App;
