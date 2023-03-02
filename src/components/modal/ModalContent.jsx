import { Box, Modal } from "@mui/material";
import React, { useLayoutEffect, useMemo, useState } from "react";

function ModalContent({ height, openModal, onClose, src }) {
  const [windowWidth, setWindowWidth] = useState(() =>
    window.innerWidth >= 768 ? 700 : 320
  );

  useLayoutEffect(() => {
    function handleResizeWidth() {
      setWindowWidth(window.innerWidth >= 768 ? 700 : 320);
    }

    window.addEventListener("resize", handleResizeWidth);
  }, []);

  const style = useMemo(
    () => ({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: windowWidth,
      height,
      border: "2px solid #000",
      boxShadow: 24,
    }),
    [windowWidth]
  );

  return (
    <Modal keepMounted onClose={onClose} open={openModal}>
      <Box sx={style}>
        <iframe
          width={windowWidth}
          height={height}
          src={src}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Box>
    </Modal>
  );
}

export default ModalContent;
