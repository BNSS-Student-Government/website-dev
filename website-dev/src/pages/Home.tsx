import Hero from "@/components/Hero"
import InfoCard from "@/components/InfoCard";
import { createRef } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl"
import { FaHandshake} from "react-icons/fa"
import { MdGroups3 } from "react-icons/md";
import { RiMegaphoneFill } from "react-icons/ri";
import Team from "./Team";
import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router";
 
export default function Home() {

  const featured = createRef<HTMLDivElement>();

  const scroll = (ref: any) => {
    window.scrollTo({
      top: ref.current.offsetTop - convertRemToPixels(5),
      behavior: "smooth",
    });
  };


  return (
    <div>
      <Hero title="Burnaby North Student Government" subTitle="Elections Now Open">
        <Link className="w-13 h-13 m-5 flex items-center justify-center text-foreground text-3xl hover:text-primary hover:scale-125 transition-all" to="/candidates" viewTransition>
          2025 Candidates
          <FiChevronsRight className="w-10 h-10" id="icon" />
        </Link>
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

function convertRemToPixels(rem: number) {    
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}