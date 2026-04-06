"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { routes } from "../untils/RouteEndPoint";
import logo from "../../public/images/logo.jpg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: routes.HOME },
    { name: "About", path: routes.ABOUT },
    { name: "Blog", path: routes.BLOG },
    { name: "Disclaimer", path: routes.DISCLAIMER },
    { name: "Privacy Policy", path: routes.PRIVACY_POLICY },
  ];

  return (
    <header className="w-full border-b border-border bg-bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href={routes.HOME} className="flex items-center gap-2 group">
            <Image
              src={logo}
              alt="logo"
              width={36}
              height={36}
              className="rounded-md transition-transform group-hover:scale-110"
            />
            <span className="font-bold text-white tracking-tight">HU777</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((item: any, index: any) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`transition-all duration-300 ease-in-out ${
                    isActive
                      ? "text-accent drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="md:hidden">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <button className="p-2 rounded-md hover:bg-bg-card text-white transition-colors">
                  <Menu size={26} />
                </button>
              </DrawerTrigger>

              <DrawerContent className="h-full w-72 right-0 left-auto fixed bg-bg-secondary border-l border-border rounded-none outline-none">
                <div className="p-6 flex flex-col h-full">
                  <DrawerClose asChild>
                    <div className="flex items-center gap-2 mb-8 border-b border-border pb-4">
                      <Image
                        src={logo}
                        alt="logo"
                        width={32}
                        height={32}
                        className="rounded-md"
                      />
                      <span className="font-bold text-white text-lg">
                        HU777 Menu
                      </span>
                    </div>
                  </DrawerClose>

                  <div className="flex flex-col gap-2 flex-grow">
                    {navLinks.map((item: any, index: any) => {
                      const isActive = pathname === item.path;

                      return (
                        <DrawerClose asChild key={index}>
                          <Link
                            href={item.path}
                            className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                              isActive
                                ? "text-accent bg-bg-card"
                                : "text-text-secondary hover:text-white hover:bg-bg-card"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </DrawerClose>
                      );
                    })}
                  </div>

                  <DrawerClose asChild>
                    <Link
                      href="https://invite.hu777.club/?code=DU7ITHS"
                      className="mt-auto bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-4 rounded-2xl text-center font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest text-xs"
                    >
                      Download APK
                    </Link>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}
