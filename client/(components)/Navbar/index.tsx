import Image from "next/image";
import React from "react";
import Accordion from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
export function Navbar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const closeSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  return (
    <div className="flex items-center justify-between w-full">
      {!isSidebarCollapsed && (
        <button onClick={closeSidebar}>
          <KeyboardDoubleArrowRightIcon className="w-6 h-6" />
        </button>
      )}
      <div className="bg-grey-input px-2 py-4 flex items-center gap-1 h-6 rounded-md w-2/5">
        <Image
          src={"/assets/search.svg"}
          alt="search"
          height={22}
          width={22}
          className="h-6 w-6"
        />
        <input
          placeholder="Search for anything..."
          className="flex-2 text-black text-sm outline-none bg-transparent"
          type="text"
          name="search"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={"/assets/calender.svg"}
            alt="notification"
            height={22}
            width={22}
            className="h-6 w-6"
          />
          <Image
            src={"/assets/messages.svg"}
            alt="notification"
            height={22}
            width={22}
            className="h-6 w-6"
          />
          <Image
            src={"/assets/notification.svg"}
            alt="notification"
            height={22}
            width={22}
            className="h-6 w-6"
          />
        </div>
        <div className="flex items-center gap-4">
          <h3>Syed Naveed Fazal</h3>
          <Image
            src={"/assets/user.svg"}
            alt="user"
            height={22}
            width={22}
            className="h-6 w-6 rounded-full"
          />
          <Accordion sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
              id="panel-header"
            ></AccordionSummary>
            <AccordionDetails className="flex flex-col space-y-2 text-black bg-white rounded-md shadow-md p-2 absolute top-10 right-0 z-10 w-40">
              <button className="text-left hover:bg-gray-100 p-2 rounded-md">
                Profile
              </button>
              <button className="text-left hover:bg-gray-100 p-2 rounded-md">
                Logout
              </button>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
