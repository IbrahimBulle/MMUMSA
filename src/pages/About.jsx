import Navbar from "../components/About/Navbar";
import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import HistorySection from "../components/About/HistorySection";
import VisionMission from "../components/About/VissionMission";
import ObjectivesSection from "../components/About/ObjectivesSection";
import ProgrammesSection from "../components/About/ProgrammesSection";
import LeadershipSection from "../components/About/LeadershipSection";
import MembershipSection from "../components/About/MembershipSection";
import AboutCTA from "../components/About/AboutCTA";

export default function About() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <HistorySection />
      <VisionMission />
      <ObjectivesSection />
      <ProgrammesSection />
      <LeadershipSection />
      <MembershipSection />
      <AboutCTA />
    </main>
  );
}
