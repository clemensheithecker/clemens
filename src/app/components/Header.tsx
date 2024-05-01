"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const Pathname = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <div className="flex items-start justify-between gap-x-4">
        <h1 className="text-sm font-normal lg:text-base">
          <strong className="font-serif text-lg font-bold lg:text-xl">
            Clemens Heithecker
          </strong>
          <br />
          Software Engineer
        </h1>
        <Link
          href={isHome ? "/personal" : "/"}
          className="flex items-center gap-x-1 rounded border border-slate-200 bg-white px-4 py-1 font-serif text-sm font-normal shadow-sm hover:bg-slate-50"
        >
          {isHome ? "Personal" : "Work"}
        </Link>
      </div>
      {children}
    </>
  );
};
