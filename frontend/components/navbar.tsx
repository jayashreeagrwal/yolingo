import Link from "next/link"
import { HandIcon, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-blue-900/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <HandIcon className="h-6 w-6 text-blue-700" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">Yolingo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 ">
          <Link href="/" className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:to-teal-600">
            Home
          </Link>
          <Link href="/wordcards" className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:to-teal-600">
            Wordcards
          </Link>
          <Link href="/flashcards" className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:to-teal-600">
            Flashcards
          </Link>
          <Link href="/quiz" className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:to-teal-600">
            Quiz
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex items-center gap-2 text-xl font-bold mb-8">
              <HandIcon className="h-6 w-6 text-blue-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">Yolingo</span>
            </div>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-medium hover:text-primary py-2 border-b">
                Home
              </Link>
              <Link href="/wordcards" className="text-lg font-medium hover:text-primary py-2 border-b">
                Wordcards
              </Link>
              <Link href="/flashcards" className="text-lg font-medium hover:text-primary py-2 border-b">
                Flashcards
              </Link>
              <Link href="/quiz" className="text-lg font-medium hover:text-primary py-2">
                Quiz
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

