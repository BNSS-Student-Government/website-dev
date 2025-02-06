import Hero from "@/components/Hero"
import { Button } from "@/components/ui/button";
 
export default function Home() {



  return (
    <div>
      <Hero title="Page Not Found" subTitle="">
        <Button asChild>
          <a href="/">Take Me Back</a>
        </Button>
      </Hero>
      
    </div>
  )
}