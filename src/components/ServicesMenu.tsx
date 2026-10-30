"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { otherServiceLinks } from "@/lib/services-data";

type ServicesMenuProps = {
  currentPath?: string;
};

export function ServicesMenuDesktop({ currentPath }: ServicesMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const active = currentPath === "/services" || currentPath?.startsWith("/services/");

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 cursor-pointer text-sm font-semibold transition-colors ${
          active || open ? "text-white" : "text-gray-300 hover:text-white"
        }`}
        onClick={() => setOpen(true)}
      >
        <span className={`nav-link ${active || open ? "nav-link-active" : ""}`}>Services</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full pt-3 z-50">
          <div className="w-64 bg-primary-dark border border-white/10 rounded-2xl shadow-2xl p-3">
            {otherServiceLinks.map((s) => {
              const href = `/services/${s.slug}`;
              return (
                <Link
                  key={s.slug}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 px-3 rounded-lg text-sm transition-colors hover:bg-white/5 ${
                    href === currentPath ? "text-white font-bold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {s.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function ServicesMenuMobile({
  currentPath,
  onNavigate,
}: ServicesMenuProps & { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="w-full flex items-center justify-between py-2 text-sm font-semibold text-white/80"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-3 pb-2 space-y-1">
          {otherServiceLinks.map((s) => {
            const href = `/services/${s.slug}`;
            return (
              <Link
                key={s.slug}
                href={href}
                className={`block py-1.5 text-sm font-medium ${
                  href === currentPath ? "text-white font-bold" : "text-white/70"
                }`}
                onClick={onNavigate}
              >
                {s.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
