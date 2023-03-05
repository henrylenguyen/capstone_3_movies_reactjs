import React, { useMemo, useState } from "react";
import Slide from "@mui/material/Slide";
import { Alert, Snackbar } from "@mui/material";

function SnackbarComponent({ booleanState, type, message, onClose, time }) {
  const [snackbar, setSnackbar] = useState({
    vertical: "top",
    horizontal: "right",
    Transition: Slide,
  });

  function handleCloseSnackbar(event, reason) {
    if (reason === "clickaway") {
      if (onClose) onClose();
    }

    if (onClose) onClose();
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: snackbar.vertical,
        horizontal: snackbar.horizontal,
      }}
      open={booleanState}
      autoHideDuration={time}
      onClose={handleCloseSnackbar}
      TransitionComponent={snackbar.Transition}
    >
      <div hidden={type !== "success"}>
        <Alert
          severity="success"
          className="w-full"
          onClose={handleCloseSnackbar}
        >
          {message}
        </Alert>
      </div>
    </Snackbar>
  );
}

export default SnackbarComponent;
