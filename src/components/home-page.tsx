"use client"

import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "@/app/globals.css"

export function HomePage() {
  const [currentSalary, setCurrentSalary] = useState<number | "">("");
  const [percentageIncrease, setPercentageIncrease] = useState<number | "">("");
  const [salary1, setSalary1] = useState<number | "">("");
  const [salary2, setSalary2] = useState<number | "">("");
  const [updatedSalary, setUpdatedSalary] = useState<number>(0);
  const [percentageDifference, setPercentageDifference] = useState<number>(0);

  const handleSalaryIncreaseSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (typeof currentSalary === "number" && typeof percentageIncrease === "number") {
      const updatedSalary = currentSalary * (1 + percentageIncrease / 100);
      setUpdatedSalary(updatedSalary);
    }
  };

  const handleSalaryComparisonSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (typeof salary1 === "number" && typeof salary2 === "number") {
      const percentageDifference = ((salary2 - salary1) / salary1) * 100;
      setPercentageDifference(percentageDifference);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container max-w-5xl">
          {/* Salary Calculator Title & Description */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-left">
              Salary Calculator
            </h1>
            <p className="max-w-[600px] text-lg text-left">
              Easily calculate your updated salary after a percentage increase or determine the percentage hike between
              two salary amounts.
            </p>
          </div>
        </div>
      </header>

      {/* Centering the main content */}
      <main className="flex-1 bg-background flex items-center justify-center">
        <section className="container max-w-5xl py-12 md:py-16 text-center">
          {/* Existing Heading and Description Above the Boxes */}
          <div className="text-left mb-8">
            {/* The existing heading and description remain here */}
          </div>

          {/* Content with Vertical Line */}
          <div className="grid gap-8 md:grid-cols-2 md:divide-x md:divide-line-color md:divide-thick">
            <div className="md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Salary Increase Calculator</h2>
              <form onSubmit={handleSalaryIncreaseSubmit} className="space-y-4">
                <div>
                  <label htmlFor="current-salary" className="block text-xl font-medium mb-1">
                    Current Salary
                  </label>
                  <Input
                    id="current-salary"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="Enter your current salary"
                    className="w-full text-xl"
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(parseFloat(e.target.value))}
                  />
                </div>
                <div>
                  <label htmlFor="percentage-increase" className="block text-xl font-medium mb-1">
                    Percentage Increase
                  </label>
                  <Input
                    id="percentage-increase"
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    placeholder="Enter the percentage increase"
                    className="w-full text-xl"
                    value={percentageIncrease}
                    onChange={(e) => setPercentageIncrease(parseFloat(e.target.value))}
                  />
                </div>
                <Button type="submit" className="w-full text-xl">
                  Calculate Updated Salary
                </Button>
                {updatedSalary > 0 && (
                  <div className="bg-muted p-4 rounded-md text-xl">
                    <p>Your updated salary is: ₹{updatedSalary.toFixed(2)}</p>
                  </div>
                )}
              </form>
            </div>
            <div className="md:pl-8">
              <h2 className="text-2xl font-bold mb-4">Salary Comparison</h2>
              <form onSubmit={handleSalaryComparisonSubmit} className="space-y-4">
                <div>
                  <label htmlFor="salary-1" className="block text-xl font-medium mb-1">
                    Salary 1
                  </label>
                  <Input
                    id="salary-1"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="Enter the first salary amount"
                    className="w-full text-xl"
                    value={salary1}
                    onChange={(e) => setSalary1(parseFloat(e.target.value))}
                  />
                </div>
                <div>
                  <label htmlFor="salary-2" className="block text-xl font-medium mb-1">
                    Salary 2
                  </label>
                  <Input
                    id="salary-2"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="Enter the second salary amount"
                    className="w-full text-xl"
                    value={salary2}
                    onChange={(e) => setSalary2(parseFloat(e.target.value))}
                  />
                </div>
                <Button type="submit" className="w-full text-xl">
                  Calculate Percentage Difference
                </Button>
                {percentageDifference !== 0 && (
                  <div className="bg-muted p-4 rounded-md text-xl">
                    <p>The percentage difference between the two salaries is: {percentageDifference.toFixed(2)}%</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Centering the footer */}
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 flex items-center justify-center">
        <div className="container max-w-5xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between text-center sm:text-left">
          <p className="text-lg">&copy; 2024 Salary Calculator. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-lg hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-lg hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-lg hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
