"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { CheckCircle, XCircle, Trophy } from "lucide-react"

// Mock quiz data - in a real app, this would come from an API or database
const quizQuestions = [
  {
    id: 1,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
    ],
  },
  {
    id: 2,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
    ],
  },
  {
    id: 4,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
    ],
  },
  {
    id: 5,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
    ],
  },
  {
    id: 6,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
    ],
  },
  {
    id: 7,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
    ],
  },
  {
    id: 8,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
    ],
  },
  {
    id: 9,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
    ],
  },
  {
    id: 10,
    questionImage: "/placeholder.svg?height=300&width=300",
    options: [
      { id: 1, image: "/placeholder.svg?height=150&width=150", isCorrect: true },
      { id: 2, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
      { id: 3, image: "/placeholder.svg?height=150&width=150", isCorrect: false },
    ],
  },
]

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [dailyQuestions, setDailyQuestions] = useState(quizQuestions)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)

  // Shuffle questions on component mount to get a random set for the day
  useEffect(() => {
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random()).slice(0, 10)
    setDailyQuestions(shuffled)
  }, [])

  const currentQuestion = dailyQuestions[currentQuestionIndex]

  const handleOptionSelect = (optionId: number) => {
    if (selectedOptionId !== null) return // Prevent changing answer after selection

    setSelectedOptionId(optionId)
    const selectedOption = currentQuestion.options.find((option) => option.id === optionId)
    const correct = selectedOption?.isCorrect || false
    setIsCorrect(correct)

    if (correct) {
      setScore((prev) => prev + 1)
    }

    setAnsweredQuestions((prev) => prev + 1)

    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestionIndex < dailyQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
        setSelectedOptionId(null)
        setIsCorrect(null)
      } else {
        setQuizComplete(true)
      }
    }, 1500)
  }

  const restartQuiz = () => {
    // Shuffle questions again for a new quiz
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random()).slice(0, 10)
    setDailyQuestions(shuffled)
    setCurrentQuestionIndex(0)
    setSelectedOptionId(null)
    setIsCorrect(null)
    setScore(0)
    setAnsweredQuestions(0)
    setQuizComplete(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-secondary/50 to-background lg:mx-6 md:mx-4 sm:mx-2 xs:mx-1">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Daily ASL Quiz</h1>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">Test your knowledge with visual challenges</p>
        </div>

        {quizComplete ? (
          <div className="max-w-md mx-auto text-center">
            <Card className="mb-6 overflow-hidden border-none shadow-lg">
              <div className="bg-primary/20 py-4">
                <Trophy className="h-16 w-16 text-primary mx-auto" />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
                <div className="text-5xl font-bold mb-6 text-primary">{score} / 10</div>
                <p className="mb-6 text-muted-foreground">
                  {score === 10
                    ? "Perfect score! Amazing job!"
                    : score >= 7
                      ? "Great job! Keep practicing!"
                      : score >= 5
                        ? "Good effort! Try again to improve!"
                        : "Keep practicing! You'll get better!"}
                </p>
                <Button onClick={restartQuiz} className="bg-primary hover:bg-primary/90 btn-bounce">
                  Try Again
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                Question {currentQuestionIndex + 1} of 10
              </div>
              <div className="text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                Score: {score}/{answeredQuestions}
              </div>
            </div>

            <Card className="mb-6 overflow-hidden border-none shadow-lg">
              <div className="bg-gradient-to-r from-primary/10 to-secondary p-6">
                <div className="relative aspect-square max-w-xs mx-auto">
                  <Image
                    src={currentQuestion.questionImage || "/placeholder.svg"}
                    alt="ASL Sign"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold mb-2">What does this sign mean?</h2>
                <p className="text-sm text-muted-foreground">Select the matching image below</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                    selectedOptionId === option.id
                      ? option.isCorrect
                        ? "border-green-500 shadow-lg shadow-green-200"
                        : "border-red-500 shadow-lg shadow-red-200"
                      : "border-transparent hover:border-primary shadow-md hover:shadow-lg"
                  }`}
                  disabled={selectedOptionId !== null}
                >
                  <div className="aspect-square relative">
                    <Image src={option.image || "/placeholder.svg"} alt="Option" fill className="object-contain" />
                  </div>

                  {selectedOptionId === option.id && (
                    <div className="absolute top-2 right-2">
                      {option.isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

