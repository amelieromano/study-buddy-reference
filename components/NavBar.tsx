// The nav bar shown on every page, with the current page's link highlighted in tomato.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BlobAvatar from "@/components/BlobAvatar";

const links = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse buddies" },
  { href: "/profile", label: "My profile" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold">
        <BlobAvatar shape="flower" color="tomato" eyes="wide" size={40} />
        Study Buddy
      </Link>
      <nav className="flex gap-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full border-[3px] border-ink px-4 py-2 font-display font-semibold ${
                isActive ? "bg-tomato" : "bg-paper hover:bg-cream"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
