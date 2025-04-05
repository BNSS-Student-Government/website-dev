
import ReactDom from "react-dom";
import profile from "../../assets/profile.png";
import { IoClose } from "react-icons/io5";
import { CandidateData } from "./Candidate";
import { MouseEventHandler } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import ReactPlayer from 'react-player'
import { Separator } from "@/components/ui/separator"
import { posMap } from "@/data/positions";
import { VideoPlayer } from "../VideoPlayer";


export default function CandidateModal({ open, onClose, candidate, forceURL }: {open: boolean, onClose: MouseEventHandler<Element>, candidate: CandidateData|undefined, forceURL?: string}) {
  if (!open) return null;

  const makePosessive = (name: string) => {
    if (name.charAt(name.length - 1) === "s") {
      return `${name}'`;
    } else {
      return `${name}'s`;
    }
  };

  const openNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[999] bg-black/50" onClick={onClose}></div>
      <div className="flex animate-fade flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] bg-foreground rounded-lg z-[1000] max-h-[90vh]">
        <div className="flex flex-row justify-end items-center py-4 w-full bg-background rounded-t-lg h-16">
          <h2 className="text-foreground font-semibold text-lg md:text-2xl text-center left-1/2 fixed -translate-x-1/2">Candidate Profile {forceURL? "Preview" : ""} </h2>
          <IoClose className="text-foreground text-2xl m-3 hover:text-foreground/50 cursor-pointer transition-all" onClick={onClose}></IoClose>
        </div>
        <div id="modal content" className="flex flex-row justify-center items-start p-4 gap-8 flex-wrap h-full w-full overflow-auto">
          <div id="info container left" className="flex flex-col justify-center items-center my-4 w-3/4 md:w-1/3 max-h-[80vh] overflow-auto">
            <div id="img container" className="aspect-[5/6] w-full rounded-2xl overflow-hidden bg-[url(/assets/profile.png)] bg-center bg-foreground bg-no-repeat">
              <img className="w-full h-full object-cover"
                src={
                  forceURL ? forceURL :

                  candidate && candidate.headshot
                    ? `https://govapi.peterpeterp.xyz${candidate.headshot.url}`
                    : profile
                }
                alt={profile}
              />
            </div>
            
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: "100%",
                textAlign: "center",
              }}
              id="name container"
            >
              <h1 className="text-background font-bold text-3xl text-center mt-4 mb-2">
                {candidate && candidate.firstName + " " + candidate.lastName}
              </h1>
            </div>
            <Separator className="my-2 bg-primary h-1 rounded-sm" />
            {/*candidate && candidate.videoLink && (
              <Button className="w-full h-12 font-semibold text-lg rounded-xl" 
              onClick={() => openNewTab(candidate.videoLink)}>
                <FaExternalLinkAlt/> View Campaign Video
              </Button>
            )*/}
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: "100%",
                textAlign: "center",
              }}
              id="name container"
            >
              <h1 className="text-muted font-bold text-xl text-center">
                Running For {candidate && posMap[candidate.position]}
              </h1>
            </div>
          </div>
          <div id="right container" className="flex flex-col justify-start items-start w-full md:w-3/5 h-full md:my-4 max-h-[70vh] overflow-auto">
            <h3 className="text-background font-bold text-xl mb-2">
              {candidate &&
                candidate.videoLink &&
                
                  "Campaign Video"}
            </h3>
            <Separator className="mb-2 bg-primary h-1 rounded-sm" />
            
            <VideoPlayer url={candidate?.videoLink}></VideoPlayer>
            <h3 className="text-background font-bold text-xl my-2">
              {candidate &&
                candidate.vision &&
                makePosessive(candidate.firstName) +
                  " vision for Burnaby North"}
            </h3>
            <Separator className="mb-1 bg-muted-foreground h-0.5 rounded-sm" />
            <p className="text-background my-2">{candidate && candidate.vision && candidate.vision}</p>
            <h3 className="text-background font-bold text-xl my-2">
              {candidate &&
                candidate.experience &&
                makePosessive(candidate.firstName) + " leadership experience"}
            </h3>
            <Separator className="mb-1 bg-muted-foreground h-0.5 rounded-sm" />
            <p className="text-background my-2">{candidate && candidate.experience && candidate.experience}</p>
            <h3 className="text-background font-bold text-xl my-2">
              {candidate &&
                candidate.additional &&
                "Additional information " +
                  candidate.firstName +
                  " wants to share"}
            </h3>
            <Separator className="mb-1 bg-muted-foreground h-0.5 rounded-sm" />
            <p className="text-background my-2">{candidate && candidate.additional && candidate.additional}</p>
            
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};


