import React, { useRef, useEffect, useState } from "react";
import "./Dino.css";

export default function Dino() {
  const dinoRef = useRef(null);
  const cactusRef = useRef(null); 
  // const gameOver = useRef(null);
  const [score, setScore] = useState(0); // State to keep track of the score
  const [hasCollision, setHasCollision] = useState(false); // State to track collision
 
  const [isAlive, setIsAlive] = useState(true);

  useEffect(() => {
    const dino = dinoRef.current;
    const cactus = cactusRef.current;

    function jump() {
      if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function () {
          dino.classList.remove("jump");
        }, 500);

        setScore(score + 1);
      }
    }

    const handleKeyDown = (event) => {
      if (event.keyCode === 32 && isAlive) {
        jump();
      } else if (event.keyCode === 32 && !isAlive) { // Start game again if spacebar is pressed and game over
        restartGame();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const gameInterval = setInterval(() => {
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

      if (cactusLeft < 100 && cactusLeft > -50 && dinoTop >= 80) {
        setIsAlive(false);
        cactus.style.display = "none";
        clearInterval(gameInterval);
        setHasCollision(true); // Set collision state to true
        setTimeout(() => {
          restartGame();
        }, 1200);
      }
    }, 100);

    const restartGame = () => {
      setIsAlive(true);
      cactus.style.display = "block";
      setScore(0); // Reset the score when the game restarts
      // Reset game elements and restart the game loop
      setHasCollision(false); 
    };

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(gameInterval);
    }
  }, [isAlive, score])

  return (
    <>
      <div className="game">
        <div id="dino" ref={dinoRef}></div>
        <div id="cactus" ref={cactusRef}></div>
      </div>

      <div className=" flex">
      {hasCollision && (
        <div className="game-over-message">
          <h1>Game Over!</h1>
    
        </div>
      )}

        <p className="ml-96 font-semibold">SCORE : {score}</p>
      </div>
    </>
  );
}