"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { positions } from "@/data/positions"
import { ChangeEvent, useEffect, useState } from "react"
import { Candidate, CandidateData } from "./candidate/Candidate"
import { Textarea } from "./ui/textarea"

const STRAPI_URL = "https://govapi.peterpeterp.xyz"
function getImageData(event: ChangeEvent<HTMLInputElement>) {
    // FileList is immutable, so we need to create a new one
    const dataTransfer = new DataTransfer();
  
    // Add newly uploaded images
    Array.from(event.target.files!).forEach((image) =>
      dataTransfer.items.add(image)
    );
  
    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);
  
    return { files, displayUrl };
  }

const formSchema = z.object({
    firstName: z.string().min(1,{
      message:"Required"
    }).max(30, {
        message: "30 characters maximum.",
      }),
      lastName: z.string().min(1).max(30, {
        message: "30 characters maximum.",
      }),
      position: z.string({message: "Select your position!"}).min(1, {
        message: "Select your position!"
      }),
      headshot: z.instanceof(FileList, {
        message: "Upload a File!"
      }),
      vision: z.string().min(1,{
        message:"Required"
      }).max(600, {
        message: "10-600 characters!"
      }),
      experience: z.string().min(1,{
        message:"Required"
      }).max(600, {
        message: "10-600 characters!"
      }),
      additional: z.string().min(1,{
        message:"Required"
      }).max(600, {
        message: "10-600 characters!"
      }),
      videoLink: z.string().url({message: "Make sure you have a URL!"})
})

export function SubmissionForm() {

    const [preview, setPreview] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [candidate, setCandidate] = useState<CandidateData | undefined>(undefined);

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),

    })
    
    const watchedValues = form.watch();

    // Update candidate state whenever the form changes
    useEffect(() => {
        setCandidate({
            firstName: watchedValues.firstName,
            lastName: watchedValues.lastName,
            position: watchedValues.position,
            vision: watchedValues.vision,
            experience: watchedValues.experience,
            additional: watchedValues.additional,
            videoLink: watchedValues.videoLink,
            id: 0,
            documentId: "",
            validated: true,
            headshot: preview, 
        });
    }, [watchedValues, preview]);


    async function onSubmit(values: z.infer<typeof formSchema>) {

      try {
      
        const formData = new FormData();
        
        formData.append("files", values.headshot[0], values.headshot[0].name);
        // upload file
        const uploadResponse = await fetch(`${STRAPI_URL}/api/upload`, {
          method: "post",
          body: formData,
        });
    
        // get result of upload
        const uploadedImage = await uploadResponse.json();
    
        // if error
        if (uploadedImage.error) {
          throw new Error(uploadedImage.error.message);
        }
    
        // create entry
        const newEntry = {
          data: {
            firstName: values.firstName,
            lastName: values.lastName,
            position: values.position,
            vision: values.vision,
            experience: values.experience,
            additional: values.additional,
            videoLink: values.videoLink,
            headshot: uploadedImage[0].id
          },
        };
    
        // Create entry API request
        const response = await fetch(`${STRAPI_URL}/api/candidates`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEntry),
        });
    
        const result = await response.json();
    
        if (result.error) {
          throw new Error(result.error.message);
        }
    
        console.log("Profile uploaded successfully:", result);
        setSuccess(true);
        setError("");
        return;
      } catch (error) {
        console.error("Error uploading data:", error);
        setError(
          "Error uploading data, please check your wifi, try again, or contact the elections committee!"
        );
      }
    }
    if(success){
        return (
            <div className="animate-fade flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold my-8">Submission Successful!</h1>
                <h2>Thank you for submitting your profile. Good Luck!</h2>
            </div>
        )
    }

    return (
        <Form {...form}>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-wrap flex-row w-full justify-between">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-[47%] md:w-[30%]">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Bob" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-[47%] md:w-[30%]">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="w-full mt-4 md:mt-0 md:w-[30%]">
                    <FormLabel>Position</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your position" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {positions.map((value)=>(
                            <SelectItem value={value.id}>{value.title}</SelectItem>
                        ))}
                        
                        </SelectContent>
                    </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <div className="flex flex-col justify-center items-center">
            {preview !== "" ? <Candidate candidate={candidate} forceURL={preview}></Candidate>: <></>}
            </div>
                
            <FormField
                control={form.control}
                name="headshot"
                render={({ field: { onChange, value, ...rest } }) => (
                <>
                    <FormItem>
                    <FormLabel>Profile Head Shot</FormLabel>
                    <FormControl>
                        <Input className="file:text-background"
                        type="file"
                        accept="image/*"
                        {...rest}
                        onChange={(event) => {
                            const { files, displayUrl} = getImageData(event)
                            setPreview(displayUrl);
                            onChange(files);
                        }}
                        />
                    </FormControl>
                    <FormDescription>
                        Upload a clear head shot with focus on your face!
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                </>
                )}
            />

            <FormField
            control={form.control}
            name="vision"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Your Vision for Burnaby North</FormLabel>
                <FormControl>
                    <Textarea
                    placeholder="600 Characters MAX"
                    className="resize-none h-32"
                    {...field}
                    />
                </FormControl>
                <FormDescription>
                    {field.value?.length ?? 0}/600
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Your Leadership Experience</FormLabel>
                <FormControl>
                    <Textarea
                    placeholder="600 Characters MAX"
                    className="resize-none h-32"
                    {...field}
                    />
                </FormControl>
                <FormDescription>
                    {field.value?.length ?? 0}/600
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="additional"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Additional Information About You</FormLabel>
                <FormControl>
                    <Textarea
                    placeholder="600 Characters MAX"
                    className="resize-none h-32"
                    {...field}
                    />
                </FormControl>
                <FormDescription>
                    {field.value?.length ?? 0}/600
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="videoLink"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Campaign Video Link</FormLabel>
                <FormControl>
                    <Input placeholder="https://www.youtube.com/..." {...field} />
                </FormControl>
                <FormDescription>
                    Youtube, Vimeo, or Google Drive ONLY.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

            
            
            <Button className="w-full md:w-auto"type="submit">Submit Candidate Profile</Button>
            {error != "" ? <div className="text-destructive text-sm font-normal">{error}</div>:<></>}
          </form>
        </Form>
    )
}