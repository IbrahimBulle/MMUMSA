import { ArrowRight, UsersRound } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#123C30] px-7 py-12 text-white sm:px-12 lg:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-[#D7C18D]"><UsersRound size={22}/></div><p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#D7C18D]">Be part of the community</p><h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Grow in faith. Build connections. Serve with purpose.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/70">Discover the programmes, participate in activities and contribute to a stronger Muslim student community at MMUST.</p></div>
          <a href="#membership" className="inline-flex w-fit items-center gap-2 rounded-md bg-[#C7A76C] px-6 py-3.5 text-sm font-bold text-[#123C30] transition hover:bg-[#D9BE8D]">Explore membership <ArrowRight size={17}/></a>
        </div>
      </div>
    </section>
  );
}
