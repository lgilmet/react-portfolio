"use client";
import { useEffect, useState } from "react";

export default function DateDisplay({ dateString }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    setFormattedDate(date.toLocaleString("en-US", options));
  }, [dateString]);

  return <span>{formattedDate || ""} </span>;
}
