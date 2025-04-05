import Hero from "@/components/Hero"
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
 
export default function Home() {



  return (
    <div>
      <Hero title="Page Not Found" subTitle="">
        <Button asChild>
          <Link viewTransition to="/">Take Me Back</Link>
        </Button>
      </Hero>
      
    </div>
  )
}