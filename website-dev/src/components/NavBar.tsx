import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { GiVikingHelmet } from "react-icons/gi";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-20 w-full shrink-0 items-center bg-background/50 backdrop-blur-sm px-4 md:px-6 shadow-md">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="mt-4">
          <a href="/" className="mr-6 lg:flex">
          <GiVikingHelmet className="h-12 w-12 text-primary hover:text-primary-hover" />
            <span className="sr-only">BNS Student Gov</span>
          </a>
          </div>
          <div className="grid gap-2 py-1">
            <a href="/" className="flex w-full items-center py-2 text-lg font-medium">
              Home
            </a>
            <a href="/team" className="flex w-full items-center py-2 text-lg font-medium">
              Our Team 24/25
            </a>
            {/*<a href="/contact" className="flex w-full items-center py-2 text-lg font-medium">
              Contact
            </a>*/}
          </div>
        </SheetContent>
      </Sheet>
      <a href="/" className="mr-6 hidden lg:flex">
        <GiVikingHelmet className="h-10 w-10 text-primary hover:text-primary-hover transition-colors" />
        <span className="sr-only">BNS Student Gov</span>
      </a>
      <nav className="ml-auto hidden lg:flex gap-6">
        <a
          href="/"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-primary"
        >
          Home
        </a>
        <a
          href="/team"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-primary"
        >
          Our Team 24/25
        </a>
        {/*<a
          href="/contact"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-primary"
        >
          Contact
        </a>*/}
      </nav>
    </header>
  );
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

