import Hero from "@/components/Hero"
import InfoCard from "@/components/InfoCard";
import { FaHandshake} from "react-icons/fa"
import { MdGroups3 } from "react-icons/md";
import { RiMegaphoneFill } from "react-icons/ri";
import Team from "./Team";
import { FiChevronsRight } from "react-icons/fi";

export default function Home() {
  window.location.replace("https://gov.bnss.ca");

  return (
    <div>
      <Hero title="We've Moved!" subTitle="Redirecting you to gov.bnss.ca...">
        <p className="text-foreground/70 text-lg mt-2 animate-fade-down text-center px-4">
          The Burnaby North Student Government has a new home for 2025/2026.
        </p>
        <a
          href="https://gov.bnss.ca"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:scale-105 hover:brightness-110 transition-all animate-fade-up"
        >
          Visit gov.bnss.ca
          <FiChevronsRight className="w-6 h-6" />
        </a>
      </Hero>
      
      <div  className="flex flex-col justify-center items-center">
        <div className="mt-10">
          <h1 className="text-center text-3.5xl font-bold block p-5 intersect:animate-fade-down intersect-once">About Burnaby North's Student Government</h1>
        </div>
        <InfoCard 
        title="Service" 
        desc="Service is at the core of Student Government at Burnaby North. Whether it's running fundraisers or organizing staff appreciation events, we are determined to support and uplift students and staff."
        >
          <FaHandshake className="w-20 h-20" />
        </InfoCard>
        <InfoCard 
        title="Community" 
        desc="We act as a bridge between students from various backgrounds and experiences. Through team activities and spirit weeks, we aim to foster a welcoming environment and community for all."
        >
          <MdGroups3 className="w-20 h-20" />
        </InfoCard>
        <InfoCard 
        title="Advocacy" 
        desc="As an elected body, we take our roles as student representatives seriously. From town halls to grade councils, we are here to amplify students' voices and advocate for the needs of our community."
        >
          <RiMegaphoneFill className="w-20 h-20" />
        </InfoCard>
        
      </div>
      <div  className="mt-10 -mb-8">
        <h1 className="text-center text-3.5xl font-bold block p-5 intersect:animate-fade-down intersect-once">Student Government 2024/2025</h1>
      </div>
      <Team></Team>
    </div>
  )
}