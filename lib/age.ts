/**
 * Calculate age from birthdate to current date with high precision
 * Handles leap years and varying month lengths correctly
 *
 * Birth date: February 5, 2026 at 13:14 IST (UTC+5:30)
 * We treat the birth date as local time in IST without conversion,
 * assuming the user's local time is also IST or we want to display
 * the age as if calculated in IST.
 */

export function getAgeFromBirthday(birthDate: Date, now: Date = new Date()): {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
} {
  // Convert to UTC milliseconds for easy difference calculation
  const birthTime = birthDate.getTime();
  const nowTime = now.getTime();

  // Total milliseconds difference
  let diffMs = nowTime - birthTime;

  // Handle case where now is before birth (shouldn't happen but just in case)
  if (diffMs < 0) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalDays: 0
    };
  }

  // Calculate total days (for reference)
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Calculate years, months, days using date manipulation
  let tempDate = new Date(birthTime);
  let years = 0;
  let months = 0;
  let days = 0;

  // Calculate years
  while (tempDate.getFullYear() < now.getFullYear()) {
    tempDate.setFullYear(tempDate.getFullYear() + 1);
    if (tempDate.getTime() > nowTime) {
      tempDate.setFullYear(tempDate.getFullYear() - 1);
      break;
    }
    years++;
  }

  // Calculate months
  while (tempDate.getMonth() < now.getMonth() ||
         (tempDate.getMonth() === now.getMonth() && tempDate.getDate() <= now.getDate())) {
    if (tempDate.getMonth() === 11) {
      tempDate.setMonth(0);
      tempDate.setFullYear(tempDate.getFullYear() + 1);
    } else {
      tempDate.setMonth(tempDate.getMonth() + 1);
    }

    if (tempDate.getTime() > nowTime) {
      // Revert the last month addition
      if (tempDate.getMonth() === 0) {
        tempDate.setMonth(11);
        tempDate.setFullYear(tempDate.getFullYear() - 1);
      } else {
        tempDate.setMonth(tempDate.getMonth() - 1);
      }
      break;
    }
    months++;
  }

  // Calculate days
  tempDate = new Date(birthTime);
  tempDate.setFullYear(tempDate.getFullYear() + years);
  tempDate.setMonth(tempDate.getMonth() + months);

  while (tempDate.getTime() <= nowTime) {
    tempDate.setDate(tempDate.getDate() + 1);
    if (tempDate.getTime() > nowTime) {
      tempDate.setDate(tempDate.getDate() - 1);
      break;
    }
    days++;
  }

  // Calculate remaining time for hours, minutes, seconds
  tempDate.setDate(tempDate.getDate() + days);
  const remainingMs = nowTime - tempDate.getTime();

  const hours = Math.floor(remainingMs / (1000 * 60 * 60));
  const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDays
  };
}