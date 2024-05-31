import React from "react";
import Link from "next/link";

const ErrorPage: React.FC = () => {
  return (
    <main className="min-h-[calc(100svh-210px)] w-full bg-[#d9dadd] mx-auto px-4 flex items-center justify-start md:px-8">
      <div className="max-w-lg mx-auto space-y-3 text-center">
        <h3 className="text-red-600 font-semibold">404 Error</h3>
        <p className="text-slate-900 text-4xl font-semibold sm:text-5xl">
          Page not found
        </p>
        <p className="text-gray-800">
          Sorry, the page you are looking for could not be found or has been
          removed.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg"
          >
            Go back
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
