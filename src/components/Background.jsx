import React, { useRef, useEffect } from "react"
import bg from "../assets/bg.png"
import Dino from "./Dino"
import Navbar from "./Navbar"
import "../App.css"
import gsap from "gsap"

export default function Background () {
   const float404 = useRef(null);
//    console.log(float404)
    
  useEffect(() => {
    // Use GSAP to animate the floating effect
    gsap.to(float404.current, {
      y: -20, // Move the div 20 pixels up
      duration: 1, // Animation duration in seconds
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Yoyo back and forth (up and down)
      ease: 'power1.inOut' // Easing function
    });

    // Clean up on component unmount
    return () => {
      gsap.killTweensOf(float404.current); // Kill the animation
    };
  }, []); // Run effect only once on component mount

   return (
    <div className="w-full h-screen bg-hero-pattern bg-no-repeat bg-cover flex flex-col justify-center items-center gap-10">
        {/* <img src={bg} alt="image" className="w-screen h-full w-96"/> */}
        <Navbar/>
        <h3 className="text-9xl mt-[-2rem] tracking-widest font-['Arvo'] font-bold text-shadow" ref={float404}>4 <span className="text-10xl tracking-widest font-['Arvo'] font-bold">0</span> 4</h3>
        <p className="text-2xl mt-[-2rem] font-bold">Error - Page Not Found</p>
        <p className="text-lg mt-[-2rem]">The page you requested could not be found!</p>
        <Dino/>
    </div>
   )
}