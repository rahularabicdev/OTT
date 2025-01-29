"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { twMerge } from "tailwind-merge";

import { Logo } from "@/static/images";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-6 px-10 relative">
      <div className="flex items-centerc justify-between">
        <div className="flex items-center gap-5">
          <Link href="/" className="relative inline-block w-56 h-auto">
            <Image
              src={Logo}
              alt="Spectraflix"
              priority
              width="200"
              height="150"
            />
          </Link>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/tv-shows"
                className={twMerge(
                  "text-lightAlt transition-all duration-100 hover:text-light",
                  pathname.startsWith("/tv-shows") && "text-light"
                )}
              >
                TV Shows
              </Link>
            </li>
            <li>
              <Link
                href="/latest-releases"
                className={twMerge(
                  "text-lightAlt transition-all duration-500 hover:text-light",
                  pathname.startsWith("/latest-releases") && "text-light"
                )}
              >
                Latest Releases
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
