import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const t = e.target;
      if (
        t.closest("a, button, [data-cursor='hover'], input, textarea, [role='button']")
      ) {
        setHover(true);
      } else {
        setHover(false);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`cursor-dot ${hover ? "hover" : ""}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` }}
      data-testid="custom-cursor"
    />
  );
};

export default CustomCursor;
