import { months } from '@/constants';

const overDaysInMonth = 32;

export const getYears = () => {
  const startYear = 1900;
  const endYear = new Date().getFullYear();
  const years = [];

  for (let i = 0; i <= endYear - startYear; i += 1) {
    years.push(startYear + i);
  }
  return years.reverse();
};

export const getMonths = (year: null | number) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  if (currentYear === year) {
    return months.filter((_, index) => index <= currentMonth);
  }

  return months;
};

export const getDateDays = (month: number | null, year: number | null) => {
  const days = [];
  const defaultDaysInMonth = 31;

  if (!month || !year) {
    for (let i = 1; i <= defaultDaysInMonth; i += 1) {
      days.push(i);
    }
    return days;
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInCurrentDate = overDaysInMonth - new Date(year, month, overDaysInMonth).getDate();

  if (currentYear === year && currentMonth === month) {
    for (let i = 1; i <= currentDate.getDate(); i += 1) {
      days.push(i);
    }

    return days;
  }

  for (let i = 1; i <= daysInCurrentDate; i += 1) {
    days.push(i);
  }
  return days;
};
