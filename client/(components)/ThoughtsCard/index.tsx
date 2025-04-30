import React from "react";
import { Lightbulb } from "lucide-react";

export function ThoughtsCard() {
  return (
    <div className="relative w-fit h-[197px] bg-white rounded-xl border border-blue-400 shadow-sm flex flex-col items-center justify-center p-4 text-center">
      {/* Glow Bulb Icon */}
      <div className="absolute -top-5 bg-yellow-100 p-2 rounded-full shadow-md">
        <Lightbulb className="text-yellow-400 w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="mt-6 font-semibold text-gray-800 text-lg">
        Thoughts Time
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">
        We dont have any notice for you, till then you can share your thoughts
        with your peers.
      </p>

      {/* Button */}
      <button className="mt-4 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
        Write a message
      </button>
    </div>
  );
}
