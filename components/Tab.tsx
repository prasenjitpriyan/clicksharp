import React from "react";
import { Tabs } from "@/components/ui/tabs";

const Tab: React.FC = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white bg-[cadetblue] rounded-md dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
          <p>Product</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white bg-[cadetblue] rounded-md dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
          <p>Services</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white bg-[cadetblue] rounded-md dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
          <p>Playground</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white bg-[cadetblue] rounded-md dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
          <p>Content</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white bg-[cadetblue] rounded-md">
          <p>Random</p>
          <DummyContent />
        </div>
      ),
    },
  ];
  return (
    <div className="h-[20rem] md:h-[40rem] min-h-screen [perspective:1000px] relative b flex flex-col mx-auto w-[95vw] items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Tab;

const DummyContent = () => {
  return <p>Image</p>;
};
