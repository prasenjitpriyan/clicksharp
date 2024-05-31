"use client";

import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { cn } from "@/utils/cn";

const BackgroundBoxes: React.FC = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[50svh] relative w-full overflow-hidden bg-red-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Click Sharp
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        A dynamic and memorable photography gallery website.
      </p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default BackgroundBoxes;
