import { UserRound, UsersRound, Wallet, CalendarDays, BookOpen, Newspaper, Scale } from "lucide-react";

const executives = [
  { title: "Chairman", icon: UserRound, role: "Coordinates association activities, presides over meetings, represents MMUMSA and serves as custodian of its constitution." },
  { title: "Chairlady", icon: UserRound, role: "Deputises the Chairman and leads matters relating to the Ladies’ Wing." },
  { title: "Secretary General", icon: Newspaper, role: "Manages secretarial responsibilities, coordinates association affairs and issues meeting notices and agendas." },
  { title: "Treasurer", icon: Wallet, role: "Oversees financial management, maintains accounts and handles funds in accordance with Executive Council direction." },
  { title: "Organizing Secretary", icon: CalendarDays, role: "Coordinates event-organising committees and supports the planning of association activities." },
  { title: "Imam", icon: BookOpen, role: "Leads the Da’wah Committee and supports the association’s religious programme." },
  { title: "Chief Editor", icon: Newspaper, role: "Heads the magazine committee and supports publication activities." },
];
const committees = ["Da’wah Committee", "Finance Committee", "Outreach Committee", "Welfare Committee", "Ladies’ Wing"];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#96763E]">Leadership & governance</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173D30] sm:text-4xl">A structure built on responsibility.</h2><p className="mt-5 leading-8 text-gray-600">MMUMSA operates under a constitutional leadership structure that defines responsibilities and supports coordinated programme implementation.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map(({title, icon: Icon, role}) => <article key={title} className="rounded-xl border border-[#E9E7DF] bg-[#FAFAF7] p-6"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF0E9] text-[#246247]"><Icon size={21}/></div><h3 className="mt-5 font-bold text-[#173D30]">{title}</h3><p className="mt-2 text-sm leading-7 text-gray-600">{role}</p></article>)}
        </div>
        <div className="mt-8 grid gap-8 rounded-2xl bg-[#173D30] p-8 text-white lg:grid-cols-[.8fr_1.2fr] lg:p-10">
          <div><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-[#D7C18D]"><UsersRound size={22}/></div><h3 className="mt-5 text-2xl font-bold">Committees & advisory</h3><p className="mt-3 text-sm leading-7 text-white/70">Committees support the association’s religious, financial, outreach, welfare and women’s affairs. The Advisory Council, also known as the Majlis, provides guidance.</p></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D7C18D]">Standing committees</p><div className="mt-4 flex flex-wrap gap-2">{committees.map((item) => <span key={item} className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90">{item}</span>)}</div><div className="mt-7 border-t border-white/15 pt-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D7C18D]">Advisory Council — Majlis</p><p className="mt-2 text-sm leading-7 text-white/75">Comprises the Patron, University Imam, MMUMSA Chairman and Muslim university staff. The constitution also provides for Annual General Meetings and Special General Meetings.</p></div></div>
        </div>
      </div>
    </section>
  );
}
