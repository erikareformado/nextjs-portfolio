import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import KeyCapabilities from "@/components/KeyCapabilities";
import PersonalDetails from "@/components/PersonalDetails";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkExperiences from "@/components/WorkExperiences";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PersonalDetails />
        <AboutMe />
        <KeyCapabilities />
        <WorkExperiences />
        <Feedback />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
