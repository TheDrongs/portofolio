const timeZone = 'Asia/Jakarta';
const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
});
const dayFormatter = new Intl.DateTimeFormat('en-GB', { timeZone, weekday: 'long' });
const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone,
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatJakartaClock(date) {
  return {
    day: dayFormatter.format(date),
    time: timeFormatter.format(date),
    date: dateFormatter.format(date),
  };
}
