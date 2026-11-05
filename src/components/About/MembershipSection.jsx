import { UserRound, Users, CheckCircle2 } from "lucide-react";

export default function MembershipSection() {
  return (
    <section id="membership" className="bg-[#F8F7F2] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#96763E]">Belong and participate</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173D30] sm:text-4xl">Membership at MMUMSA.</h2><p className="mt-5 leading-8 text-gray-600">The constitution provides for full and associate membership, each with defined eligibility and participation rights.</p></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#DDE5DC] bg-white p-8 sm:p-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF0E9] text-[#246247]"><UserRound size={23}/></div><p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#96763E]">Membership category 01</p><h3 className="mt-2 text-2xl font-bold text-[#173D30]">Full membership</h3><p className="mt-4 text-sm leading-7 text-gray-600">Open to Muslim students admitted to MMUST for certificate, diploma or degree programmes.</p><ul className="mt-7 space-y-3 border-t border-[#ECEAE3] pt-5 text-sm text-gray-600"><li className="flex gap-2"><CheckCircle2 size={17} className="shrink-0 text-[#39805C]"/> Participate in association programmes.</li><li className="flex gap-2"><CheckCircle2 size={17} className="shrink-0 text-[#39805C]"/> Contribute ideas and volunteer in activities.</li></ul></article>
          <article className="rounded-2xl border border-[#E9E7DF] bg-white p-8 sm:p-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F0E6] text-[#96763E]"><Users size={23}/></div><p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#96763E]">Membership category 02</p><h3 className="mt-2 text-2xl font-bold text-[#173D30]">Associate membership</h3><p className="mt-4 text-sm leading-7 text-gray-600">Includes former Muslim students of MMUMSA, Muslim academic and non-academic university staff, and Muslim students pursuing higher studies at the university, as specified in the constitution.</p><p className="mt-6 rounded-lg bg-[#F8F7F2] p-4 text-sm leading-7 text-gray-600">Associate members may attend general meetings but cannot vote or hold positions on the Executive Council.</p></article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-gray-500">MMUMSA is free to everyone. We welcome all members and allow everyone to participate fully in the association.</p>
      </div>
    </section>
  );
}
