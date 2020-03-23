export function getLastWeek() {
  let currWeek = {};

  let curr = new Date();
  curr.setHours(0, 0, 0, 0);

  let date = curr.getDate() - (curr.getDay() === 0 ? 7 : curr.getDay()) - 6;
  let day = new Date(curr.setDate(date));
  currWeek.startDate = { displayValue: day.toLocaleDateString(), value: day };

  date = curr.getDate() - (curr.getDay() === 0 ? 7 : curr.getDay()) + 8;
  day = new Date(curr.setDate(date));
  currWeek.endDate = { displayValue: day.toLocaleDateString(), value: day };

  return currWeek;
}

export function getCurrentWeek() {
  let nextWeek = {};

  let curr = new Date();
  curr.setHours(0, 0, 0, 0);

  let date = curr.getDate() - (curr.getDay() === 0 ? 7 : curr.getDay()) + 1;
  let day = new Date(curr.setDate(date));
  nextWeek.startDate = { displayValue: day.toLocaleDateString(), value: day };

  date = curr.getDate() - (curr.getDay() === 0 ? 7 : curr.getDay()) + 8;
  day = new Date(curr.setDate(date));
  nextWeek.endDate = { displayValue: day.toLocaleDateString(), value: day };

  return nextWeek;
}

export function getLastWeekStartDate() {
  let curr = new Date();
  curr.setHours(0, 0, 0, 0);

  let date = curr.getDate() - (curr.getDay() === 0 ? 7 : curr.getDay()) - 6;
  let startDay = new Date(curr.setDate(date));
  return startDay;
}

export function getFirstDayofTheMonth() {
  let startDate = new Date();
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);
  return startDate;
}
export function getLastDayofTheMonth() {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(today.getFullYear(), today.getMonth() + 1, 0);
}

export function addDaysToDate(curr, days) {
  let oldDate = new Date(curr.valueOf());
  let date = oldDate.getDate() + days;
  let newDate = new Date(oldDate.setDate(date));
  return newDate;
}

export function compareDates(date1, date2) {
  date1 = new Date(date1);
  if (date1 >= date2) return 1;
  else return -1;
}
