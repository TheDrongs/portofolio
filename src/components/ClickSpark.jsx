import { useEffect, useRef } from "react";

function ClickSpark({
  children,
  sparkColor = "#a8ecff",
  sparkSize = 10,
  sparkRadius = 18,
  sparkCount = 8,
  duration = 420,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (timestamp) => {
      const rect = container.getBoundingClientRect();
      context.clearRect(0, 0, rect.width, rect.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.createdAt;
        const progress = Math.min(elapsed / duration, 1);
        const distance = sparkRadius * progress;
        const opacity = 1 - progress;

        context.save();
        context.globalAlpha = opacity;
        context.strokeStyle = sparkColor;
        context.lineWidth = 2;
        context.lineCap = "round";

        spark.rays.forEach((angle) => {
          const startX = spark.x + Math.cos(angle) * distance;
          const startY = spark.y + Math.sin(angle) * distance;
          const endX = spark.x + Math.cos(angle) * (distance + sparkSize);
          const endY = spark.y + Math.sin(angle) * (distance + sparkSize);

          context.beginPath();
          context.moveTo(startX, startY);
          context.lineTo(endX, endY);
          context.stroke();
        });

        context.restore();
        return progress < 1;
      });

      if (sparksRef.current.length > 0) {
        frameRef.current = requestAnimationFrame(draw);
      } else {
        frameRef.current = 0;
      }
    };

    const handleClick = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      sparksRef.current.push({
        x,
        y,
        createdAt: performance.now(),
        rays: Array.from({ length: sparkCount }, (_, index) => (
          (index / sparkCount) * Math.PI * 2
        )),
      });

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    window.addEventListener("resize", resize);
    container.addEventListener("click", handleClick, true);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      container.removeEventListener("click", handleClick, true);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [duration, sparkColor, sparkCount, sparkRadius, sparkSize]);

  return (
    <div ref={containerRef} className="click-spark-root">
      {children}
      <canvas ref={canvasRef} className="click-spark-canvas" aria-hidden="true" />
    </div>
  );
}

export default ClickSpark;
