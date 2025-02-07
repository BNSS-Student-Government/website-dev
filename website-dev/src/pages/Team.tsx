import Member from "@/components/Member.tsx";
import { membersArr } from "../data/members.tsx";

export default function Team() {
  return (
    <div className="flex flex-col justify-center pt-16 bg-background">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 md:gap-x-0 md:gap-y-12 px-8 md:px-16 py-6">
        {membersArr.map((member) => (
          <Member name={member.name} position={member.position} />
        ))}
      </div>
    </div>
  );
};


