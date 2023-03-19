import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box } from "@mui/material";

export default function ControlledAccordions({ title, ...props }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ color: "#8D91A0" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#8D91A0" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={props.sx}
        >
          {props.avatar ? (
            <Avatar
              alt={props.alt}
              src={props.src}
              sx={{ marginRight: "10px" }}
            />
          ) : (
            <Box sx={{ flexShrink: 0, marginRight: "10px" }}>{props.icon}</Box>
          )}

          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#2B2B4B" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {props.children}
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
