"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, navLinks } from "@/lib/data";
import Icon from "@/components/Icon";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 rounded-lg" priority />
          <span className="whitespace-nowrap text-lg font-bold tracking-tight text-foreground">
            {company.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            if (!link.children) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:text-foreground ${
                    active ? "text-foreground" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:text-foreground ${
                    active ? "text-foreground" : "text-muted"
                  }`}
                >
                  {link.label}
                  <Icon name="chevronDown" className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-20 w-64 rounded-xl border border-border bg-surface p-2 opacity-0 shadow-xl transition duration-150 group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface-2 hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Book a free consultation
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border bg-background px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex-1 rounded-md px-3 py-2.5 text-sm font-medium ${
                      pathname === link.href
                        ? "bg-surface text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() =>
                        setOpenMobileGroup((v) => (v === link.href ? null : link.href))
                      }
                      className="p-2.5 text-muted"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <Icon
                        name="chevronDown"
                        className={`h-4 w-4 transition ${
                          openMobileGroup === link.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {link.children && openMobileGroup === link.href && (
                  <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background"
            >
              Book a free consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
