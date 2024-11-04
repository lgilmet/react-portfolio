import BusinessCard from "@/components/BusinessCard";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="">
      <nav className="flex flex-col row-start-2 items-center pt-20">
        <div className="p-8">
          <BusinessCard />
        </div>
        <div className="container">
          <ul className="flex gap-4 justify-between">
            {/* <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <Separator orientation="vertical" />
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li> */}
            {/* <li>
              <Separator orientation="vertical" />
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </div>
      </nav>
      {/* {children} */}
    </div>
  );
}