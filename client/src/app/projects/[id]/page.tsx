"use client";
import React, { use, useState } from "react";
import ProjectHeader from "./project-header";
import { BoardView } from "(components)/BoardView";

type Props = {
  params: { id: string };
};
export default function Project({ params }: Props) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);
  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
    </div>
  );
}
