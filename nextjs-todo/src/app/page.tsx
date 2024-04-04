"use client";
import ReduxProvider from "@/store/reduxProvider";
import Home from "../components/Home/Home";

export default function Main() {
  return (
    <ReduxProvider>
    <div className="main">
      <Home />
    </div>
    </ReduxProvider>
  );
}
