import { ArrowRight, BookOpen, Users, Compass } from "lucide-react";
import Logo from "../../assets/mmumsa.png";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#123C30] text-white">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-16 -top-24 h-[22rem] w-[22rem] rounded-full border border-white/10" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#D7C18D]">
            <span className="h-px w-8 bg-[#D7C18D]" /> Masinde Muliro University
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Faith. Brotherhood.<span className="block text-[#D7C18D]">Service.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            The Masinde Muliro University Muslim Students’ Association brings Muslim students together through spiritual growth, leadership, fellowship and community service.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#our-story" className="inline-flex items-center gap-2 rounded-md bg-[#C7A76C] px-6 py-3.5 text-sm font-bold text-[#123C30] transition hover:bg-[#D9BE8D] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#123C30]">
              Discover our story <ArrowRight size={17} />
            </a>
            <a href="#our-programmes" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5">
              <BookOpen size={17} /> Our programmes
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[31rem]">
          <div className="absolute -inset-4 rounded-[2rem] border border-[#C7A76C]/50" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#1B4A3B] p-8 shadow-2xl sm:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#C7A76C]/10 blur-2xl" />
            <div className="relative flex min-h-[20rem] flex-col items-center justify-center text-center">
              <img src={Logo} alt="MMUMSA emblem" className="h-40 w-40 object-contain sm:h-48 sm:w-48" />
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-[#D7C18D]">MMUMSA</p>
              <h2 className="mt-3 max-w-sm text-2xl font-semibold leading-snug sm:text-3xl">A place to grow in faith and purpose.</h2>
              <div className="mt-8 grid w-full grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-6">
                <div className="px-2"><Users className="mx-auto mb-2 text-[#D7C18D]" size={20}/><span className="text-xs text-white/75">Brotherhood</span></div>
                <div className="px-2"><BookOpen className="mx-auto mb-2 text-[#D7C18D]" size={20}/><span className="text-xs text-white/75">Knowledge</span></div>
                <div className="px-2"><Compass className="mx-auto mb-2 text-[#D7C18D]" size={20}/><span className="text-xs text-white/75">Purpose</span></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-7 -left-5 hidden rounded-lg bg-[#F4F0E6] px-5 py-4 text-[#173D30] shadow-xl sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#96763E]">Our guiding principle</p>
            <p className="mt-1 text-sm font-bold">Islamic values in action</p>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-[#123C30] via-[#C7A76C] to-[#123C30]" />
    </section>
  );
}
