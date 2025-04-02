"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

// Mock data - in a real app, this would come from an API or database
const collections = {
  alphabet: {
    title: "Alphabet",
    cards: [
      {
        id: "a",
        title: "Letter A",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "b",
        title: "Letter B",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "c",
        title: "Letter C",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      // More cards would be here
    ],
  },
  numbers: {
    title: "Numbers",
    cards: [
      {
        id: "1",
        title: "Number 1",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "2",
        title: "Number 2",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "3",
        title: "Number 3",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      // More cards would be here
    ],
  },
  greetings: {
    title: "Greetings",
    cards: [
      {
        id: "hello",
        title: "Hello",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "goodbye",
        title: "Goodbye",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "thankyou",
        title: "Thank You",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      // More cards would be here
    ],
  },
  family: {
    title: "Family",
    cards: [
      {
        id: "mother",
        title: "Mother",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "father",
        title: "Father",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "sister",
        title: "Sister",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      // More cards would be here
    ],
  },
  colors: {
    title: "Colors",
    cards: [
      {
        id: "red",
        title: "Red",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "blue",
        title: "Blue",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "green",
        title: "Green",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      // More cards would be here
    ],
  },
  food: {
    title: "Food",
    cards: [
      {
        id: "apple",
        title: "Apple",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "bread",
        title: "Bread",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "water",
        title: "Water",
        image1: "/placeholder.svg?height=300&width=300",
        image2: "/placeholder.svg?height=300&width=300",
      },
      // More cards would be here
    ],
  },
}

export default function CollectionPage({ params }: { params: { collection: string } }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get the collection data or default to alphabet if not found
  const collection = collections[params.collection as keyof typeof collections] || collections.alphabet
  const cards = collection.cards

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
  }

  const currentCard = cards[currentIndex]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-secondary/50 to-background lg:mx-6 md:mx-4 sm:mx-2 xs:mx-1">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" asChild className="mr-2 text-primary hover:bg-primary/10">
            <Link href="/wordcards">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Collections
            </Link>
          </Button>
        </div>

        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">{collection.title}</h1>
          <div className="inline-block bg-primary/20 text-primary font-medium text-sm px-3 py-1 rounded-full mt-2">
            {cards.length} signs
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="bg-gradient-to-r from-primary/10 to-secondary p-4">
              <h2 className="text-2xl font-semibold text-center">{currentCard.title}</h2>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-square bg-white rounded-lg p-2">
                  <Image
                    src={currentCard.image1 || "/placeholder.svg"}
                    alt={`${currentCard.title} - View 1`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-square bg-white rounded-lg p-2">
                  <Image
                    src={currentCard.image2 || "/placeholder.svg"}
                    alt={`${currentCard.title} - View 2`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-8">
                <Button
                  onClick={goToPrevious}
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary/10"
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous card</span>
                </Button>
                <div className="text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                  {currentIndex + 1} of {cards.length}
                </div>
                <Button
                  onClick={goToNext}
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary/10"
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next card</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

