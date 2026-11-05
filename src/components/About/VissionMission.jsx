import { Eye, Target, Award } from "lucide-react";

const values = [
  { icon: Award, title: "Excellence", description: "Pursuing high standards in academic, religious and organisational responsibilities." },
  { icon: Target, title: "Professionalism", description: "Promoting responsible conduct, accountability, respect and effective management." },
];

export default function VisionMission() {
  return (
    <section id="vision-mission" className="bg-[#F4F0E6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#96763E]">What guides us</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173D30] sm:text-4xl">Our vision, mission and values.</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-[#173D30] p-8 text-white sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#D7C18D]"><Eye size={24}/></div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#D7C18D]">Our vision</p>
            <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-relaxed sm:text-3xl">To be a model Muslim organisation governed by principles and values of Islam.</h3>
          </article>
          <article className="rounded-2xl border border-[#E3DDCF] bg-white p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF0E9] text-[#246247]"><Target size={24}/></div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#96763E]">Our mission</p>
            <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-relaxed text-[#173D30] sm:text-3xl">To foster Islamic brotherhood in a dynamic and inclusive Muslim community.</h3>
          </article>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {values.map(({icon: Icon, title, description}) => (
            <article key={title} className="flex gap-5 rounded-xl border border-[#E3DDCF] bg-white p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#F4F0E6] text-[#96763E]"><Icon size={21}/></div>
              <div><h3 className="font-bold text-[#173D30]">{title}</h3><p className="mt-2 text-sm leading-7 text-gray-600">{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
