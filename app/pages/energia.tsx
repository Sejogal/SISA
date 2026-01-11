import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Content_Area from "@/components/Content_Area";

export default function Energia() {
  return (
      <div className="layout">
        <Navbar title="Energia" />
        <div className="main">
          <Sidebar />
          <Content_Area />
        </div>
      </div>
  );
}