import { useState } from "react";
import profile from "../../assets/profile.png"
import CandidateModal from "./CandidateModal";

export function Candidate({ candidate, forceURL }: {candidate?: CandidateData , forceURL?: string}) {
    const [text, setText] = useState("");
    const [showModal, setShowModal] = useState(false);
  
    const handleMouseEnter = () => {
      if(!forceURL) setText("View Profile");
    };
    const handleMouseLeave = () => {
      setText("");
    };
    const getThumbnailImg = () => {
      if(forceURL) return forceURL;
      if (!(candidate && candidate.headshot)) {
        return profile;
      }
      if (candidate && candidate.headshot) {
        if (candidate.headshot.formats.small) {
          return `https://govapi.peterpeterp.xyz${candidate.headshot.formats.small.url}`;
        } else if (candidate.headshot.formats.thumbnail) {
          return `https://govapi.peterpeterp.xyz${candidate.headshot.formats.thumbnail.url}`;
        }
      }
    };
  
    const thumbnailImg = getThumbnailImg();

  
    return (
      <>
        {forceURL == undefined ? <CandidateModal
          open={showModal}
          onClose={() => setShowModal(false)}
          candidate={candidate}
        ></CandidateModal> : <></>}
  
        <div
          className="flex flex-col intersect:animate-fade-right justify-start items-center w-32 min-h-32 md:min-h-48 rounded-lg shadow-lg transition-all m-4 bg-background cursor-pointer 
hover:shadow-xl hover:bg-background/90 group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setShowModal(true)}
        >
          <div
            className="aspect-square w-32 flex flex-col justify-center items-center rounded-t-lg transition-all text-foreground 
group-hover:bg-background/50 group-hover:bg-blend-color"
            style={{
              backgroundImage: `url(${thumbnailImg})`,
              backgroundSize: "cover", // Cover the entire div
              backgroundRepeat: "no-repeat", // No repeating the image
              backgroundPosition: "top", // Center the image
            }}
          >
            <h4 className="font-bold">{text}</h4>
          </div>
          <div className="flex flex-col justify-center items-center text-foreground py-1 text-center font-semibold text-sm md:text-base min-h-10 md:min-h-16">
            {candidate && candidate.firstName && candidate.lastName ? (
              `${candidate.firstName} ${candidate.lastName}`
            ) : forceURL ? "Preview" : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  width: "90%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="flex min-w-5 p-[0.1rem] min-h-1 bg-foreground/30 rounded-lg"></div>
                <div className="flex min-w-5 p-[0.1rem] min-h-1 bg-foreground/30 rounded-lg"></div>
              </div>
            )}
          </div>
        </div>
      </>
    );
};
  
export interface CandidateData{
    id: number,
    documentId: string,
    validated: boolean,
    firstName: string,
    lastName: string,
    vision: string,
    experience: string,
    additional: string,
    videoLink: string,
    position: string,
    headshot: any
}

export interface CandidatesData{
    data: CandidateData[];
}