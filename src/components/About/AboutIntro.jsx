import { ArrowUpRight } from "lucide-react";
import { aboutPillars } from "../../data/aboutIntroData";
import Logo from "../../assets/mmumsa.png";

export default function AboutIntro() {
  return (
    <section id="who-we-are" className="bg-[#F8F7F2] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#96763E]">Get to know MMUMSA</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173D30] sm:text-4xl lg:text-5xl">A community united by faith and purpose.</h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-bl-3xl border-b-4 border-l-4 border-[#C7A76C]" />
            <div className="relative z-10 flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#173D30] px-8 text-center shadow-lg sm:h-96">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-[#C7A76C]/25" />
              <img src={Logo} alt="MMUMSA emblem" loading="lazy" className="relative h-32 w-32 object-contain sm:h-40 sm:w-40" />
              <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.24em] text-[#D7C18D]">Masinde Muliro University</p>
              <p className="relative mt-2 max-w-sm text-xl font-semibold text-white sm:text-2xl">Fostering Islamic Brotherhood, Leadership and Community Service</p>
            </div>
            <div className="absolute -bottom-5 right-4 z-20 rounded-lg bg-[#173D30] px-5 py-4 text-white shadow-lg sm:right-8">
              <p className="text-xs text-white/70">Our guiding principle</p>
              <p className="mt-1 font-semibold">Brotherhood through Islam</p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <h3 className="text-2xl font-bold text-[#173D30] sm:text-3xl">Who We Are</h3>
            <p className="mt-5 leading-8 text-gray-600">The Masinde Muliro University Muslim Students’ Association (MMUMSA) is an association that brings together Muslim students at Masinde Muliro University of Science and Technology.</p>
            <p className="mt-4 leading-8 text-gray-600">Guided by Islamic principles and values, the association provides a platform for spiritual growth, student leadership, social interaction, and community service.</p>
            <p className="mt-4 leading-8 text-gray-600">Through religious programmes, leadership development, educational initiatives, and outreach activities, MMUMSA seeks to nurture responsible students who contribute positively to the university and the wider community.</p>
            <a href="#our-objectives" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#246247] transition hover:text-[#96763E]">Explore our objectives <ArrowUpRight size={18}/></a>
          </div>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.id} className="group rounded-xl border border-[#E7E5DC] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C7A76C] hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF0E9] text-[#246247] transition group-hover:bg-[#173D30] group-hover:text-white"><Icon size={23} strokeWidth={1.8}/></div>
                <h4 className="mt-5 text-lg font-semibold text-[#173D30]">{pillar.title}</h4>
                <p className="mt-3 text-sm leading-7 text-gray-600">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
