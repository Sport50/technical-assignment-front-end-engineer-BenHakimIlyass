"use client";

import { makeStyles } from "@mui/styles";
import { AnimatePresence, motion } from "framer-motion";
import Drawing from "../logo/drawing";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    zIndex: 999,
    width: "100%",
  },
  reflection: {
    width: 100,
    height: 40,
    // background: "red",
    position: "absolute",
    backgroundImage:
      "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
  },
}));

const Loading = ({ show }: { show: boolean }) => {
  const styles = useStyles();

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box
            position="relative"
            style={{
              overflow: "hidden",
              boxShadow: "0px 10px 45px 0px rgba(62,66,66,0.19)",
              borderRadius: 10,
            }}
          >
            <motion.div
              className={styles.reflection}
              style={{ rotate: 40 }}
              initial={{ x: 10, y: -40 }}
              animate={{ x: -20, y: 120 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
              }}
            />
            <Drawing size={100} animate />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
