import useClickOutside from "@/hooks/useClickAway";
import { Paper } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { forwardRef, useImperativeHandle } from "react";

interface CustomMenuProps {
  children: React.ReactNode;
  right?: boolean;
}

const CustomMenu = forwardRef(
  ({ children, right }: CustomMenuProps, parentRef) => {
    const ref = React.useRef(null);

    const [menu, setMenu] = React.useState(false);

    const handleToggleMenu = () => {
      setMenu((prev) => !prev);
    };

    useClickOutside(ref, handleToggleMenu);

    useImperativeHandle(parentRef, () => ({
      toggle: handleToggleMenu,
    }));

    return (
      <AnimatePresence mode="wait">
        {menu && (
          <AnimatedPaper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
            style={{
              padding: 2,
              width: 200,
              position: "absolute",
              zIndex: 99,
              top: 60,
              ...(right ? { right: 0 } : {}),
            }}
          >
            {children}
          </AnimatedPaper>
        )}
      </AnimatePresence>
    );
  }
);

const AnimatedPaper = motion(Paper);

CustomMenu.displayName = "CustomMenu";

export default CustomMenu;
