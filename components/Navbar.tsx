"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

const Navbar: React.FC = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Company">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About</HoveredLink>
            <HoveredLink href="/history">History</HoveredLink>
            <HoveredLink href="/join">Join the team</HoveredLink>
            <HoveredLink href="/blog">Blog</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Product">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/developers-api">Developers API</HoveredLink>
            <HoveredLink href="/dataset">Dataset</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Community">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contributor">Become a contributor</HoveredLink>
            <HoveredLink href="/topics">Topics</HoveredLink>
            <HoveredLink href="/collections">Collections</HoveredLink>
            <HoveredLink href="/trends">Trends</HoveredLink>
            <HoveredLink href="/awards">Awards</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
