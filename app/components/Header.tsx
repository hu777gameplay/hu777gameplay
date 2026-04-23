"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useAuth } from "@/lib/auth";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo.jpeg";
import { routes } from "../untils/RouteEndPoint";

interface HeaderProps {
  navigationLinks?: { name: string; href: string }[];
}

export default function Header({ navigationLinks }: HeaderProps = {}) {
  const pathname = usePathname();
  const { user } = useAuth();

  const defaultNavLinks = [
    { name: "Home", path: routes.HOME },
    { name: "About", path: routes.ABOUT },
    { name: "Blog", path: routes.BLOG },
    { name: "Disclaimer", path: routes.DISCLAIMER },
    { name: "Privacy Policy", path: routes.PRIVACY_POLICY },
  ];

  const navLinks = navigationLinks
    ? navigationLinks.map((link) => ({ name: link.name, path: link.href }))
    : defaultNavLinks;

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* LOGO */}
          <Link href={routes.HOME} className="flex items-center gap-2 group">
            <Image
              src={logo}
              alt="logo"
              width={36}
              height={36}
              className="rounded-md transition-transform group-hover:scale-110"
            />
            <span className="font-bold text-black tracking-tight text-lg">
              HU777
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((item: any, index: any) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`relative transition-all duration-300 ${
                    isActive ? "text-black" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE DRAWER */}
          <div className="md:hidden">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                  <Menu size={26} />
                </button>
              </DrawerTrigger>

              <DrawerContent className="h-full w-80 right-0 left-auto fixed bg-white/95 backdrop-blur-xl border-l border-gray-200 shadow-2xl outline-none">
                <div className="flex flex-col h-full">
                  {/* HEADER */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <Image
                        src={logo}
                        alt="logo"
                        width={36}
                        height={36}
                        className="rounded-lg"
                      />
                      <span className="font-bold text-lg text-gray-900">
                        HU777
                      </span>
                    </div>

                    <DrawerClose asChild>
                      <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                        ✕
                      </button>
                    </DrawerClose>
                  </div>

                  {/* SCROLL AREA */}
                  <div className="flex-1 overflow-y-auto px-4 py-6">
                    <div className="flex flex-col gap-1">
                      {navLinks.map((item: any, index: any) => {
                        const isActive = pathname === item.path;

                        return (
                          <DrawerClose asChild key={index}>
                            <Link
                              href={item.path}
                              className={`flex items-center px-4 py-3 rounded-xl transition-all ${
                                isActive
                                  ? "bg-gray-100 text-black font-semibold border-l-4 border-yellow-500"
                                  : "text-gray-600 hover:text-black hover:bg-gray-50"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </DrawerClose>
                        );
                      })}
                    </div>
                  </div>

                  {/* FOOTER CTA */}
                  <div className="p-5 border-t border-gray-200">
                    <DrawerClose asChild>
                      <Link
                        href="https://invite.hu777.club/?code=DU7ITHS"
                        className="block w-full text-center bg-gradient-to-r from-red-500 to-yellow-400 text-black font-bold py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-sm tracking-wide"
                      >
                        🚀 Download APK
                      </Link>
                    </DrawerClose>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}
