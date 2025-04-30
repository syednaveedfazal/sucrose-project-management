import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { redirect } from "next/navigation";
export function SubProject({ title, href }: { title: string; href: string }) {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  return (
    <div
      className="flex items-center justify-between"
      onClick={() => redirect(href)}
    >
      <div className="flex items-center gap-4">
        <div
          className={`rounded-full h-2 w-2 flex items-center  bg-[${randomColor}]`}
          style={{ backgroundColor: randomColor }}
        ></div>
        <p className="text-text-gray text-[1rem]">{title}</p>
      </div>
      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          "&::before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<MoreHorizIcon />}
          aria-controls="panel-content"
          id="panel-header"
        ></AccordionSummary>

        <AccordionDetails className="flex flex-col space-y-2 text-black bg-white rounded-md shadow-md p-2 absolute top-10 right-0 z-10 w-40">
          <button className="text-left hover:bg-gray-100 p-2 rounded-md">
            Leave Project
          </button>
          <button className="text-left hover:bg-gray-100 p-2 rounded-md">
            Edit Project Details
          </button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
