"use client";

import { useEffect, useState } from "react";

const BIRTH_DATE = new Date("2026-02-05T00:00:00");

interface AgeData {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateAge(): AgeData {
  const now = new Date();
  const diff = now.getTime() - BIRTH_DATE.getTime();

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { years, months, days, hours, minutes, seconds };
}

interface AgeCounterProps {
  className?: string;
}

const ageUnitsConfig = [
  { label: "Years", valueKey: "years" as const, color: "text-amber-600 dark:text-amber-400", border: "border-amber-100 dark:border-amber-900/50" },
  { label: "Months", valueKey: "months" as const, color: "text-rose-600 dark:text-rose-400", border: "border-rose-100 dark:border-rose-900/50" },
  { label: "Days", valueKey: "days" as const, color: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-100 dark:border-emerald-900/50" },
  { label: "Hours", valueKey: "hours" as const, color: "text-sky-600 dark:text-sky-400", border: "border-sky-100 dark:border-sky-900/50" },
  { label: "Minutes", valueKey: "minutes" as const, color: "text-violet-600 dark:text-violet-400", border: "border-violet-100 dark:border-violet-900/50" },
  { label: "Seconds", valueKey: "seconds" as const, color: "text-orange-600 dark:text-orange-400", border: "border-orange-100 dark:border-orange-900/50" },
];

export default function AgeCounter({ className = "" }: AgeCounterProps) {
  const [age, setAge] = useState<AgeData>(calculateAge);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-wrap justify-center gap-4 md:gap-6 ${className}`}
      role="timer"
      aria-live="polite"
      aria-label="Baby Aarvik's age counter"
    >
      {ageUnitsConfig.map((unit) => (
        <div
          key={unit.valueKey}
          className="relative group"
        >
          <div className={`bg-gradient-to-br from-white to-amber-50 dark:from-zinc-900 dark:to-amber-950/30 rounded-2xl p-6 min-w-[110px] text-center border ${unit.border} shadow-lg shadow-amber-100/50 dark:shadow-amber-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/50 dark:hover:shadow-amber-900/30 hover:-translate-y-1`}>
            <div className={`font-serif text-4xl md:text-5xl font-bold ${unit.color}`}>
              {String(age[unit.valueKey]).padStart(2, "0")}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}