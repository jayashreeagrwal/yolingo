"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react"

// Mock data - in a real app, this would come from an API or database
const flashcards = [
  {
    id: 1,
    title: "Hello",
    frontImage: "/placeholder.svg?height=400&width=300",
    backImage: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "Thank You",
    frontImage: "/placeholder.svg?height=400&width=300",
    backImage: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "Please",
    frontImage: "/placeholder.svg?height=400&width=300",
    backImage: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "Sorry",
    frontImage: "/placeholder.svg?height=400&width=300",
    backImage: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    title: "Yes",
    frontImage: "/placeholder.svg?height=400&width=300",
    backImage: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    title: "No",
    frontImage: "/placeholder.svg?height=400&width=300",
    backImage: "/placeholder.svg?height=400&width=300",
  },
]

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const goToPrevious = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev === 0 ? flashcards.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev === flashcards.length - 1 ? 0 : prev + 1))
  }

  const flipCard = () => {
    setIsFlipped((prev) => !prev)
  }

  const currentCard = flashcards[currentIndex]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-secondary/50 to-background lg:mx-6 md:mx-4 sm:mx-2 xs:mx-1">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Flashcards</h1>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">Tap the card to flip and see both sides</p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Card flip container */}
          <div className="h-[450px] w-full perspective-[1000px]" onClick={flipCard}>
            {/* Card */}
            <div
              className={`relative h-full w-full transition-transform duration-500 transform-style-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front of card */}
              <div className="absolute h-full w-full backface-hidden">
                <Card className="h-full w-full shadow-lg border-2 border-primary/20 overflow-hidden">
                  <div className="relative h-[350px] w-full">
                    <Image
                      src={currentCard.frontImage || "/placeholder.svg"}
                      alt={currentCard.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 text-center bg-gradient-to-r from-primary/10 to-secondary">
                    <h2 className="text-xl font-semibold">{currentCard.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">Tap to flip</p>
                  </div>
                </Card>
              </div>

              {/* Back of card */}
              <div className="absolute h-full w-full backface-hidden rotate-y-180">
                <Card className="h-full w-full shadow-lg border-2 border-primary/20 overflow-hidden">
                  <div className="relative h-[350px] w-full">
                    <Image
                      src={currentCard.backImage || "/placeholder.svg"}
                      alt={`${currentCard.title} (alternate view)`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 text-center bg-gradient-to-r from-secondary to-primary/10">
                    <h2 className="text-xl font-semibold">{currentCard.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">Tap to flip back</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary/10"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous card</span>
            </Button>
            <div className="flex items-center gap-2">
              <Button
                onClick={flipCard}
                variant="outline"
                size="sm"
                className="flex items-center gap-1 border-primary text-primary hover:bg-primary/10"
              >
                <RotateCw className="h-4 w-4" />
                <span>Flip</span>
              </Button>
              <div className="text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                {currentIndex + 1} of {flashcards.length}
              </div>
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
        </div>
      </main>
    </div>
  )
}

