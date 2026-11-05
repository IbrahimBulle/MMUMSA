import { BookOpen, HeartHandshake, MessagesSquare, Lightbulb } from "lucide-react";

const objectives = [
  { number: "01", icon: BookOpen, title: "Islamic awareness", description: "Promote Islamic awareness and understanding among Muslim students through learning opportunities and activities that deepen knowledge of Islamic principles." },
  { number: "02", icon: HeartHandshake, title: "Social and charitable activities", description: "Offer social and charitable activities that contribute positively to the university and the wider community." },
  { number: "03", icon: MessagesSquare, title: "Interfaith understanding", description: "Promote interfaith dialogue and understanding through initiatives grounded in mutual respect, cooperation and peaceful coexistence." },
  { number: "04", icon: Lightbulb, title: "Student empowerment", description: "Empower Muslim students through leadership opportunities, skills-building workshops and resources for personal and professional development." },
];

export default function ObjectivesSection() {
  return (
    <section id="our-objectives" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#96763E]">Our constitutional direction</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173D30] sm:text-4xl lg:text-5xl">What we strive to achieve.</h2></div>
          <p className="max-w-md text-sm leading-7 text-gray-600">Four objectives guide MMUMSA’s programmes, priorities and contribution to university life and the wider community.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {objectives.map(({number, icon: Icon, title, description}) => (
            <article key={number} className="group relative overflow-hidden rounded-xl border border-[#E9E7DF] bg-[#FAFAF7] p-7 transition hover:border-[#C7A76C] hover:shadow-lg sm:p-9">
              <span className="absolute right-6 top-2 text-6xl font-black text-[#173D30]/[0.045]">{number}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF0E9] text-[#246247] transition group-hover:bg-[#173D30] group-hover:text-white"><Icon size={23}/></div>
              <h3 className="mt-6 text-xl font-bold text-[#173D30]">{title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
