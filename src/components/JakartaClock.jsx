import { useEffect, useState } from 'react';
import { formatJakartaClock } from '../jakartaClock';

export default function JakartaClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const update = () => setNow(new Date());
    const interval = window.setInterval(update, 1000);
    document.addEventListener('visibilitychange', update);
    window.addEventListener('focus', update);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', update);
      window.removeEventListener('focus', update);
    };
  }, []);

  const clock = formatJakartaClock(now);
  const description = `${clock.date}, ${clock.time} WIB (GMT+7)`;
  return (
    <time className="taskbar-location taskbar-clock" dateTime={now.toISOString()}
      title={description} aria-label={`Bandung, Indonesia. ${description}`}>
      <span className="clock-place">Bandung, ID</span>
      <span className="clock-readout">
        <span className="clock-day">{clock.day}</span>
        <span className="clock-time">{clock.time} WIB</span>
      </span>
    </time>
  );
}
