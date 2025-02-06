import img from "../assets/newschool.png";


export default function Hero({title, subTitle, children} : {title: string, subTitle: string, children: React.ReactNode }){

  return <div style={{ backgroundImage: `url(${img})` }} 
  className="bg-cover bg-center bg-no-repeat w-full h-screen flex justify-center items-center flex-col">
    <div className="backdrop-blur-sm backdrop-brightness-125 bg-black/75 flex flex-col justify-center items-center w-full h-full">
      <h1 className="text-center text-3.5xl font-bold block p-5 animate-fade-down">{title}</h1>
      <pre className="animate-fade-down">{subTitle}</pre>
      {children}
    </div>
  </div>
}
