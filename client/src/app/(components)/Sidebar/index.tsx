"use client";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Image from "next/image";
import { SubProject } from "./sub-project";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "../../../state/index";
export function Sidebar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const closeSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center  justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/logo.svg"}
            alt="logo"
            height={30}
            width={40}
            className="w-10 h-6"
          />
          <h1 className="text-super-blue text-2xl">Sucrose </h1>
        </div>
        <button onClick={closeSidebar}>
          <KeyboardDoubleArrowLeftIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="w-full bg-line-gray h-0.5"></div>
      <div className="flex flex-col gap-6 px-6 py-4">
        <button className="flex items-center gap-3 ">
          <Image
            alt="home"
            src={"/assets/home.svg"}
            height={22}
            width={22}
            className="h-6 w-6"
          />
          <p className="text-text-gray text-lg">Home</p>
        </button>
        <button className="flex items-center gap-3 ">
          <Image
            alt="message"
            src={"/assets/sent-message.svg"}
            height={22}
            width={22}
            className="h-6 w-6"
          />
          <p className="text-text-gray text-lg">Messages</p>
        </button>
        <button className="flex items-center gap-3 ">
          <Image
            alt="tasks"
            src={"/assets/tasks.svg"}
            height={22}
            width={22}
            className="h-6 w-6"
          />
          <p className="text-text-gray text-lg">Tasks</p>
        </button>
        <button className="flex items-center gap-3 ">
          <Image
            alt="memebers"
            src={"/assets/members.svg"}
            height={22}
            width={22}
            className="h-6 w-6"
          />
          <p className="text-text-gray text-lg">Members</p>
        </button>
        <button className="flex items-center gap-3 ">
          <Image
            alt="settings"
            src={"/assets/settings.svg"}
            height={22}
            width={22}
            className="h-6 w-6"
          />
          <p className="text-text-gray text-lg">Settings</p>
        </button>
      </div>
      <div className="w-11/12 mx-2 bg-line-gray h-0.5"></div>

      <div className="w-full">
        <button className="flex items-center justify-between w-full gap-3 px-2 py-4">
          <p className="text-text-gray font-bold text-sm">My Projects</p>
          <Image
            alt="projects"
            src={"/assets/add-projects.svg"}
            height={22}
            width={22}
            className="h-5 w-5"
          />
        </button>
      </div>

      <div className="flex flex-col gap-4 px-6 py-4">
        <SubProject color="blue" title="HRMS" />
        <SubProject color="blue" title="Vokal" />
        <SubProject color="blue" title="Internal" />
      </div>
    </div>
  );
}
