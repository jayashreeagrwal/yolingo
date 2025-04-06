import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { BookOpenIcon } from "lucide-react"

const collections = [
  { id: "alphabet", title: "Alphabet", count: 26, image: "/alphabet.jpeg" },
  { id: "numbers", title: "Numbers", count: 20, image: "/numbers.jpeg" },
  { id: "animals", title: "Animals", count: 5, image: "/animals.jpeg" },
  { id: "family", title: "Family", count: 12, image: "/family.jpeg" },
  { id: "colors", title: "Colors", count: 10, image: "/colors.jpeg" },
  { id: "food", title: "Food", count: 18, image: "/food.jpeg" },
]

export default function WordcardsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-secondary/50 to-background lg:mx-6 md:mx-4 sm:mx-2 xs:mx-1">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">ASL Wordcards</h1>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">Explore visual collections of ASL signs</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mx-24">
          {collections.map((collection) => (
            <Link key={collection.id} href={`/wordcards/${collection.id}`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-xl hover:border-blue-500 border-primary border-b-2 group">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors z-10" />
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:border-blue-500 border-primary border-b-2"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{collection.title}</h2>
                    <div className="bg-primary/20 text-primary font-medium text-sm px-2 py-1 rounded-full">
                      {collection.count} signs
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <BookOpenIcon className="h-4 w-4 mr-1" />
                    <span>Tap to explore</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

