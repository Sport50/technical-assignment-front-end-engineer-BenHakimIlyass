"use client";

import { Box } from "@mui/material";
import {
  MotionStyle,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const cover =
  "https://images.unsplash.com/photo-1642789659128-79aa9560a125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1959&q=80";

const Hero = () => {
  const { scrollY } = useScroll();

  const cassetteY = useTransform(scrollY, [0, 1000], [0, -600]);
  const footballY = useTransform(scrollY, [0, 1000], [0, -1200]);
  const bitcoinY = useTransform(scrollY, [0, 1000], [0, -400]);
  const avocadoY = useTransform(scrollY, [0, 1000], [0, -200]);
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <Box style={{ height: 300, position: "relative" }}>
      <AnimatedImage
        style={{ rotate: 40, top: "20vh", left: "10%", scale: 0.4 }}
        scrollY={scrollY}
        alt="Leaf"
        src="/leaf.png"
        width={220}
        height={300}
        slowTo={-200}
      />
      <AnimatedImage
        style={{ top: "30vh", left: "70%", scale: 0.4 }}
        scrollY={scrollY}
        src="/football.png"
        alt="Football"
        width={400}
        height={420}
        slowTo={-1200}
      />
      <AnimatedImage
        style={{ rotate: -20, top: "10vh", left: "30%", scale: 0.6 }}
        scrollY={scrollY}
        src="/cassette.png"
        alt="Music"
        width={420}
        height={280}
        slowTo={-600}
      />

      <motion.div style={{ y: backgroundY }}>
        <Image
          priority
          src={cover}
          width={2962}
          height={920}
          style={{
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 600,
          }}
          alt="Article page image"
        />
      </motion.div>
    </Box>
  );
};
const commonStyle = {
  position: "absolute",
  zIndex: 999,
} as const;

interface AnimatedImage {
  scrollY: MotionValue;
  style: MotionStyle;
  src: string;
  alt: string;
  width: number;
  height: number;
  slowTo: number;
}
const AnimatedImage = ({ scrollY, style, slowTo, ...rest }: AnimatedImage) => {
  const y = useTransform(scrollY, [0, 1000], [0, slowTo]);

  return (
    <motion.div style={{ y, ...style, ...commonStyle }}>
      <Image {...rest} alt={rest.alt} />
    </motion.div>
  );
};
export default Hero;
