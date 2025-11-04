"use client";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Updates", href: "/updates" },
    { name: "Pooja", href: "/pooja" },
    { name: "Donations", href: "/donations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="
        bg-black
        p-4
        flex justify-between items-center
        shadow-lg
        transition-all duration-300
        hover:bg-gradient-to-r hover:from-black hover:to-[#FF9933]
        hover:shadow-[0_0_15px_#FF9933]
      "
    >
      {/* Temple Title */}
      <div className="text-[#FFD700] font-bold text-xl transition-colors duration-300 hover:text-[#FF9933]">
        🕉️ బచ్చన్నపేట్ అయ్యప్ప స్వామి దేవాలయం
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="
                text-[#FFD700]
                hover:text-[#FF9933]
                font-medium
                transition-colors duration-200
              "
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
