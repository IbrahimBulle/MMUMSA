import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/mmumsa.png";

const links = [
  { label: "About", href: "#top" },
  { label: "Our Story", href: "#our-story" },
  { label: "Programmes", href: "#our-programmes" },
  { label: "Leadership", href: "#leadership" },
  { label: "Membership", href: "#membership" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header id="top" className="sticky top-0 z-50 border-b border-white/10 bg-[#123C30] text-white shadow-sm">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img src={Logo} alt="MMUMSA logo" className="h-12 w-12 object-contain" />
          <span className="text-lg font-bold tracking-wide">MMUMSA</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">{link.label}</a>)}
        </div>
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="rounded-md p-2 text-white transition hover:bg-white/10 md:hidden" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen}>
          {isOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>
      {isOpen && <div className="border-t border-white/10 bg-[#123C30] px-5 py-3 md:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/10">{link.label}</a>)}</div>}
    </header>
  );
}
