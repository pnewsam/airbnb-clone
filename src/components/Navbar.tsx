"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 w-full">
      <div className="CONTENT py-4 flex items-center justify-between">
        <div className="">
          {/* Left Section */}
          <Link href="/">
            <span className="font-display text-stone-700 text-2xl">
              Airbnb Clone
            </span>
          </Link>
        </div>

        <div>
          {/* Right Section */}
          {process.env.NODE_ENV === "development" &&
            pathname !== "/restaurants/new" && (
              <Link
                href="/restaurants/new"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "inline-flex text-xs gap-2"
                )}
              >
                Add Restaurant
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
        </div>
      </div>
    </nav>
  );
};
