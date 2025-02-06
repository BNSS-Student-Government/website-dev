export default function Member({ name, position }: {name: string, position: string}){
    const img = `/assets/members-photos-480p/${name}.jpg`;
    return (
      <div className="flex flex-col justify-center items-center w-36 md:w-64 opacity-0 intersect:animate-fade" >
        <img className="size-28 md:size-40 hover:scale-105 transition-all rounded-full object-cover border-4 border-solid border-foreground opacity-0 intersect:animate-fade" src={img} alt="Avatar" />
        <h2 className="my-1.5 md:my-2.5 text-center font-bold block text-lg md:text-2xl opacity-0 intersect:animate-fade md:whitespace-nowrap">{name}</h2>
        <label className="text-center">{position}</label>
      </div>
    );
  };