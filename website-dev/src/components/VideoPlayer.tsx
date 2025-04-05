import ReactPlayer from "react-player";

export function VideoPlayer({url}: {url: string | undefined}){
    return <div className="relative w-full pt-[56.25%] my-2">
    {url?.match("drive.google.com") ? 

        <iframe className="absolute top-0 left-0" allowFullScreen src={fixurl(url)} width="100%" height="100%"></iframe>
    
    : <ReactPlayer
      className="absolute top-0 left-0"
      width="100%"
      height="100%"
      url={url}
      controls
    />
    }
  </div>
}

function fixurl(driveURL: string){
    let parts = driveURL.split("file");
    let parts2 = parts[1].split("/");
    let ret = `${parts[0]}file/${parts2[1]}/${parts2[2]}/preview`;
    return ret;

}