"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/app/globals.css";

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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="bg-primary text-primary-foreground py-4 px-4 sm:py-6 sm:px-6 w-full max-w-full">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-left">
              New Salary Calculator
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-[600px] text-left">
              Calculate your updated salary after a percentage hike or determine the percentage hike between your previous and new salaries.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-background flex items-center justify-center px-4">
        <section className="container mx-auto max-w-5xl py-12 md:py-16 text-center">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="sm:pr-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Salary Increase Calculator</h2>
              <form onSubmit={handleSalaryIncreaseSubmit} className="space-y-4">
                <div>
                  <label htmlFor="current-salary" className="block text-lg sm:text-xl font-medium mb-1">
                    Current Salary
                  </label>
                  <Input
                    id="current-salary"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter your current salary"
                    className="w-full text-lg sm:text-xl"
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(parseFloat(e.target.value))}
                  />
                </div>
                <div>
                  <label htmlFor="percentage-increase" className="block text-lg sm:text-xl font-medium mb-1">
                    Percentage Increase
                  </label>
                  <Input
                    id="percentage-increase"
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    placeholder="Enter the percentage increase"
                    className="w-full text-lg sm:text-xl"
                    value={percentageIncrease}
                    onChange={(e) => setPercentageIncrease(parseFloat(e.target.value))}
                  />
                </div>
                <Button type="submit" className="w-full text-lg sm:text-xl">
                  Calculate Updated Salary
                </Button>
                {updatedSalary > 0 && (
                  <div className="bg-muted p-4 rounded-md text-lg sm:text-xl">
                    <p>Your updated salary is: ₹{updatedSalary.toFixed(2)}</p>
                  </div>
                )}
              </form>
            </div>
            <div className="sm:pl-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Hike Percentage Calculator</h2>
              <form onSubmit={handleSalaryComparisonSubmit} className="space-y-4">
                <div>
                  <label htmlFor="salary-1" className="block text-lg sm:text-xl font-medium mb-1">
                    Current Salary
                  </label>
                  <Input
                    id="salary-1"
                    type="number"
                    min="0"
                    step="0"
                    placeholder="Enter your current salary amount"
                    className="w-full text-lg sm:text-xl"
                    value={salary1}
                    onChange={(e) => setSalary1(parseFloat(e.target.value))}
                  />
                </div>
                <div>
                  <label htmlFor="salary-2" className="block text-lg sm:text-xl font-medium mb-1">
                    Updated Salary
                  </label>
                  <Input
                    id="salary-2"
                    type="number"
                    min="0"
                    step="0"
                    placeholder="Enter your new salary amount"
                    className="w-full text-lg sm:text-xl"
                    value={salary2}
                    onChange={(e) => setSalary2(parseFloat(e.target.value))}
                  />
                </div>
                <Button type="submit" className="w-full text-lg sm:text-xl">
                  Calculate Percentage Difference
                </Button>
                {percentageDifference !== 0 && (
                  <div className="bg-muted p-4 rounded-md text-lg sm:text-xl">
                    <p>The percentage difference between the two salaries is: {percentageDifference.toFixed(2)}%</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted text-muted-foreground py-6 px-4 sm:px-6 w-full max-w-full">
        <div className="container mx-auto max-w-5xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between text-center sm:text-left">
          <p className="text-base sm:text-lg">&copy; 2024 New Salary Calculator. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-base sm:text-lg hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-base sm:text-lg hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-base sm:text-lg hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="container mx-auto max-w-5xl text-center mt-4">
          <p className="text-base sm:text-lg">Designed by Arnav Singh</p>
        </div>
      </footer>
    </div>
  );
}
