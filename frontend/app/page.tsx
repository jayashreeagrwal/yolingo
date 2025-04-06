"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HandIcon, BookOpenIcon, BrainIcon } from "lucide-react"

export default function LandingPage() {
  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col lg:mx-6 mx-3">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <HandIcon className="h-6 w-6 text-blue-700" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">Yolingo</span>
          </Link>
          <nav className="hidden md:flex gap-6">
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
          <Button
            asChild
            size="sm"
            // onClick={scrollToFeatures}
            className="md:hidden bg-gradient-to-br from-blue-700 to-teal-700 hover:bg-primary/90 btn-bounce rounded-full"
          >
            <Link href="#feateres">Explore</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Learn American Sign Language with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">Yolingo</span>
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              A simple, intuitive way to learn ASL through interactive wordcards, flashcards, and quizzes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-br from-blue-700 to-teal-700 rounded-full border-primary border-b-2 hover:border-none"
              >
                <Link href="/wordcards">Get Started</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full border-blue-500 border-b-2 hover:border-none">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="container py-12 md:py-16">
          <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl">How Yolingo Works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="card-gradient flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-all border-blue-500 border-2">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full border-blue-500 border-2 p-4 w-fit mx-auto">
                  <BookOpenIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Wordcards</h3>
                <p className="mt-2 text-muted-foreground">Visual collections of ASL signs</p>
                <div className="mt-6 relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/wordcards.jpg"
                    alt="Wordcards preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <Button variant="link" className="mt-4 text-blue-500" asChild>
                  <Link href="/wordcards">Explore Wordcards</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient flex flex-col items-center text-center p-6 border-indigo-500 border-2 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full border-2 border-indigo-500 p-4 w-fit mx-auto">
                  <HandIcon className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold">Flashcards</h3>
                <p className="mt-2 text-muted-foreground">Interactive flip cards for learning</p>
                <div className="mt-6 relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/flashcards.jpg"
                    alt="Flashcards preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <Button variant="link" className="mt-4 text-indigo-500" asChild>
                  <Link href="/flashcards">Try Flashcards</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-all border-purple-500 border-2">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full p-4 w-fit mx-auto border-purple-500 border-2">
                  <BrainIcon className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">Daily Quiz</h3>
                <p className="mt-2 text-muted-foreground">Test your ASL knowledge daily</p>
                <div className="mt-6 relative h-32 rounded-lg overflow-hidden">
                  <Image src="/quiz.jpg" alt="Quiz preview" fill className="object-cover" />
                </div>
                <Button variant="link" className="mt-4 text-purple-500" asChild>
                  <Link href="/quiz">Take Quiz</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-secondary/50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <HandIcon className="h-5 w-5 text-blue-700" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">Yolingo</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Yolingo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

