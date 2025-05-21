export function humanReadableDuration(date1, date2) {
  const ms = Math.abs(date1 - date2);
  const seconds = Math.floor(ms / 1000);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts = [];

  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (hours === 0 && minutes === 0 && secs > 0) parts.push(`${secs}s`);
  if (parts.length === 0) parts.push(`0s`);

  return parts.join('');
}
