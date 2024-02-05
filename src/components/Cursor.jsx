import { useRef ,useState, useEffect } from "react";
import "./Cursor.css"

export default function Cursor () {
  const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newX = e.clientX;
            const newY = e.clientY;

            setPosX(newX);
            setPosY(newY);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
  return (
      <>
          <div class="cursor-dot" style={{ left: `${posX}px`, top: `${posY}px` }}></div>
          <div class="cursor-outline"  style={{ left: `${posX}px`, top: `${posY}px` }}></div>
      </>
  )
}