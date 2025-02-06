import { useState } from "react";
import { BiSolidUserAccount } from "react-icons/bi";
import { SubmissionForm } from "@/components/SubmissionForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const ProfileForm = () => {
  
  let currentDate = new Date();
  let dueDate = new Date("2025-04-19T23:59:59");

  const [portalOpen, setPortalOpen] = useState(currentDate < dueDate);

  return (
    <div className="flex flex-col items-center px-4 py-20 bg-background text-foreground w-full min-h-[80vh]">
        <Card className="w-full md:w-4/6 bg-foreground text-background">
            <CardHeader className="bg-primary rounded-t-lg mb-4">
                <CardTitle className="text-2xl font-bold text-primary-foreground text-center">Candidate Profile Submission</CardTitle>
            </CardHeader>
            <CardContent>
            {portalOpen ? (
                    
                <SubmissionForm></SubmissionForm>
                    
                ) : (
                    <>
                    <h4 className="text-center">The portal is closed for submissions.</h4>
                    <h4 className="text-center">Closed At: {dueDate.toLocaleString(undefined,{
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                    } )}</h4>
                    <h4 className="text-center">Contact the elections committee if you believe this is a mistsake.</h4>
                    </>
                )
            }
            </CardContent>
        </Card>

    </div>
  );
};

export default ProfileForm;
