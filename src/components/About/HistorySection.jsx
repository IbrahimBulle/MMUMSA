import { History, Landmark, BookOpen, Radio, UsersRound } from "lucide-react";

const milestones = [
  { year: "1972", title: "The early WECO years", description: "Western College of Education (WECO) opened on 5 January 1972. During the institution’s early years, Muslim students organised religious activities informally and travelled to Kakamega Jamia Mosque and Islamic Centre for congregational prayers.", icon: Landmark },
  { year: "December 2003", title: "Formation of WUMSA", description: "Following the institution’s development into a constituent college of Moi University, Muslim students established the Western University Muslim Students’ Association (WUMSA).", icon: UsersRound },
  { year: "December 2006", title: "MMUMSA takes shape", description: "After the institution attained full university status as Masinde Muliro University of Science and Technology, WUMSA became the Masinde Muliro University Muslim Students’ Association (MMUMSA).", icon: History },
  { year: "16 February 2018", title: "Uislamu Radio Show", description: "The association’s historical initiatives included the Uislamu Radio Show, which began on 16 February 2018, extending its religious engagement through radio.", icon: Radio },
  { year: "13 November 2023", title: "Constitution adopted", description: "MMUMSA adopted its constitution, setting out the framework for membership, leadership, financial management and programme implementation.", icon: BookOpen },
];

export default function HistorySection() {
  return (
    <section id="our-story" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#96763E]">Our journey</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173D30] sm:text-4xl lg:text-5xl">A history built by generations.</h2>
          <p className="mt-5 leading-8 text-gray-600">From informal student-led religious activities to a constitutionally governed association, MMUMSA’s journey reflects the commitment of generations of Muslim students.</p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute bottom-5 left-5 top-5 w-px bg-[#D9D4C7] sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-8">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.year} className={`relative grid sm:grid-cols-2 sm:gap-12 ${index % 2 ? "" : ""}`}>
                  <div className={`pl-14 sm:pl-0 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:row-start-1 sm:pl-12"}`}>
                    <div className="rounded-xl border border-[#E9E7DF] bg-[#FAFAF7] p-6 transition hover:border-[#C7A76C] hover:shadow-md">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#96763E]">{item.year}</span>
                      <h3 className="mt-2 text-xl font-bold text-[#173D30]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className={`absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#173D30] text-[#E8D4A7] shadow sm:left-1/2 sm:-translate-x-1/2 ${index % 2 === 0 ? "" : ""}`}><Icon size={16}/></div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-7 text-gray-500">The association’s historical account recognises Mr Abdihud Qayes as its founding chairman and acknowledges the contributions of early members and successive leaders.</p>
      </div>
    </section>
  );
}
