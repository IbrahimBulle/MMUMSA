import { BookOpen, GraduationCap, HandHeart, Globe2, ArrowUpRight } from "lucide-react";

const programmes = [
  { id: "religious-development", number: "01", icon: BookOpen, title: "Islamic Awareness & Religious Development", intro: "Creating opportunities for religious learning, spiritual development and stronger relationships among members.", activities: ["Iftaar and Eid celebrations", "Gents’ talks", "Ladies’ talks and empowerment", "Madrasa and mosque-based learning"] },
  { id: "student-empowerment", number: "02", icon: GraduationCap, title: "Leadership & Student Empowerment", intro: "Equipping Muslim students with leadership opportunities, practical skills and resources for personal and professional growth.", activities: ["Leaders’ training", "First-year orientation and retreats", "Sports and tournaments", "Conferences and institutional engagement"] },
  { id: "community-outreach", number: "03", icon: HandHeart, title: "Community Outreach & Social Responsibility", intro: "Encouraging members to serve beyond their immediate university environment and contribute to the wider community.", activities: ["Madrasa outreach", "Outreach to other institutions", "Mosque and community activities", "Student welfare and mutual support"] },
  { id: "social-cohesion", number: "04", icon: Globe2, title: "Interfaith Dialogue & Social Cohesion", intro: "Promoting mutual respect, peaceful coexistence and constructive relationships across religious and cultural backgrounds.", activities: ["Interfaith engagement", "Inter-institutional sports and social interaction", "Participation in wider student forums"] },
];

export default function ProgrammesSection() {
  return (
    <section id="our-programmes" className="bg-[#F4F0E6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#96763E]">What we do</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173D30] sm:text-4xl lg:text-5xl">Programmes that bring our mission to life.</h2><p className="mt-5 leading-8 text-gray-600">MMUMSA organises its activities around four programme areas that reflect the objectives established in its constitution.</p></div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {programmes.map(({id, number, icon: Icon, title, intro, activities}) => (
            <article key={id} className="rounded-2xl border border-[#E5DFD2] bg-white p-7 sm:p-9">
              <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF0E9] text-[#246247]"><Icon size={23}/></div><span className="text-sm font-bold tracking-[0.15em] text-[#B39A6A]">{number}</span></div>
              <h3 className="mt-6 max-w-md text-xl font-bold leading-snug text-[#173D30] sm:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{intro}</p>
              <div className="mt-6 border-t border-[#EEEAE1] pt-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#96763E]">Key activities</p><ul className="mt-4 grid gap-3 sm:grid-cols-2">{activities.map((activity) => <li key={activity} className="flex items-start gap-2 text-sm leading-6 text-gray-600"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B89A5E]"/>{activity}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
