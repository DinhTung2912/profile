// Formatted by hand rather than with Intl: the server and the browser can ship
// different ICU data for vi-VN, which produces a hydration mismatch on dates.
// The input is already an ISO date, so it doubles as <time dateTime="…">.
export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  if (!year || !month || !day) return dateString;
  return `${day} tháng ${month}, ${year}`;
}
