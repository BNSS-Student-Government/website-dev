import { ReactNode } from "react";

export default function InfoCard({title, desc, children} : {title: string, desc: string , children: ReactNode}){

    return (
    <div className="flex flex-col items-center bg-foreground rounded-lg shadow-sm md:flex-row w-5/6 opacity-0 intersect:animate-fade-right m-5">
        <div className="rounded-full bg-primary p-5 m-5 text-primary-foreground">{children}</div>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-background">{title}</h5>
            <p className="mb-3 font-normal text-muted">{desc}</p>
        </div>
    </div>
    )
}