import { useEffect, useState } from "react";
//import { FaVoteYea } from "react-icons/fa";
import { positions } from "@/data/positions";
import { Candidate, CandidatesData } from "@/components/candidate/Candidate";

export default function Candidates() {
  const [candidates, setCandidates] = useState<CandidatesData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://govapi.peterpeterp.xyz/api/candidates?populate=*&pagination[pageSize]=100"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCandidates(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // loading state for wireframe
  const wireframe = [1,2,3,4];
  if (loading || candidates == undefined) {
    return (
        <div className="flex top-0 h-fit w-full items-center flex-col py-20 gap-6 bg-background text-foreground text-center">
        <h1 className="text-center text-foreground text-3xl font-bold block p-5 animate-fade-down">
          2025 Elections Candidates
        </h1>
        {/*<VoteButton></VoteButton>*/}
        <div className="flex flex-col justify-center items-center flex-wrap bg-foreground text-background w-4/5 text-center rounded-lg">
             {positions.slice(0, 4).map(pos =>(
                <div>
                <h2 className="text-center text-background text-2xl font-bold block p-5">{pos.title}</h2>
                <div className="flex flex-row justify-center items-center flex-wrap text-background w-full gap-0 bg-foreground">
                    {wireframe.map((candidate) => (
                    <Candidate key={candidate} candidate={undefined} />
                    ))}
                </div>
                </div>
            ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex top-0 h-fit w-full items-center flex-col py-20 gap-6 bg-background text-foreground text-center">
      <h1 className="text-center text-foreground text-3xl font-bold block p-5 animate-fade-down">
        2025 Elections Candidates
      </h1>
      {/*<VoteButton></VoteButton>*/}
      <div className="flex flex-col justify-center items-center flex-wrap bg-foreground text-background w-full md:w-4/5 text-center md:rounded-lg">
        {positions.map(pos =>(
            <>
            <h2 className="text-center text-background text-2xl font-bold block p-5">{pos.title}</h2>
            <div className="flex flex-row justify-center items-center flex-wrap text-background w-full gap-0 bg-background/5">
                {candidates.data
                    .filter(
                    (candidate) =>
                        candidate.validated === true &&
                        candidate.position === pos.id
                    )
                    .map((candidate) => (
                        <Candidate key={candidate.id} candidate={candidate} />
                ))}
            </div>
            </>
        ))}
      </div>
    </div>
  );
};




function VoteButton(){
    return ( <div>
        {/*
        <button
          className={styles.btnMain}
          onClick={() => {
            window.location.assign("/secure-vote");
          }}
        >
          <pre
            style={{
              margin: "unset",
              padding: "unset",
              marginTop: "0.1rem",
              fontSize: "0.8rem",
            }}
          >
            ready to vote?
          </pre>
          <div
            id="main line"
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <h3
              id="vote text"
              style={{
                margin: "unset",
                padding: "unset",
              }}
            >
              {" "}
              Cast your vote
            </h3>
            <div
              id="vote icon"
              style={{
                display: "flex",
                alignItems: "center",
                verticalAlign: "bottom",
              }}
            >
              <FaVoteYea style={{ aspectRatio: "1", width: "1.4rem" }} />
            </div>
          </div>
        </button>*/}
        </div>
        
    )
}