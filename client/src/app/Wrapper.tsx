"use client";
import React from "react";
import { Navbar } from "./(components)/Navbar";
import { Sidebar } from "./(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";
export const DashBoardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isSidebarOpen = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`${!isSidebarOpen ? "hidden" : ""}  md:w-64 bg-white shadow-md border-r-line-gray border-r-2`}
      >
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1 w-full">
        <nav className="h-16 bg-white shadow-md flex items-center px-16 w-full ">
          <Navbar />
        </nav>

        <main className="flex-1 p-6 overflow-auto">
          main
          {children}
        </main>
      </div>
    </div>
  );
};

export const DashboardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StoreProvider>
      <DashBoardLayout>{children}</DashBoardLayout>
    </StoreProvider>
  );
};
