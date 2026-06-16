import { useEffect, useState } from "react";

/**
 * A soft spotlight that follows the cursor on pointer-capable (desktop) devices.
 * Purely decorative; disabled on touch devices and for reduced-motion users.
 */
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] transition-opacity duration-300"
      style={{
        background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, hsl(var(--primary) / 0.12), transparent 70%)`,
      }}
    />
  );
};

export default CursorGlow;
