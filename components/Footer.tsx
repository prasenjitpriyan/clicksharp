import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-10 ml-4 sm:ml-10 mr-4 sm:mr-10">
      <div className="w-full">
        <div className="mt-10 py-10 grid grid-cols-1 sm:grid-cols-2">
          <p className="text-gray-600 flex items-center justify-center sm:justify-start">
            Click Sharp © {currentYear}. All rights reserved.
          </p>
          <div className="flex justify-center sm:justify-end items-center gap-x-6 text-gray-600 mt-6">
            <Link href="/">
              <FaLinkedin className="w-6 h-6 hover:text-gray-700 duration-150" />
            </Link>
            <Link href="/">
              <FaTwitter className="w-6 h-6 hover:text-gray-700 duration-150" />
            </Link>
            <Link href="/">
              <FaGithub className="w-6 h-6 hover:text-gray-700 duration-150" />
            </Link>
            <Link href="/">
              <FaFacebook className="w-6 h-6 hover:text-gray-700 duration-150" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
