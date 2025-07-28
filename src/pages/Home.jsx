import { useEffect, useRef } from "react";

const Home = () => {

  const cursorRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
  const cursor = cursorRef.current;
  let mouseX = 0;
  let mouseY = 0;

  const updateCursor = () => {
    if (cursor) {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }
    requestRef.current = requestAnimationFrame(updateCursor);
  };

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener("mousemove", handleMouseMove);
  requestRef.current = requestAnimationFrame(updateCursor);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    cancelAnimationFrame(requestRef.current);
  };
}, []);


  return (
    <div className="min-h-screen w-full relative bg-black flex flex-col items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />

       <div
  ref={cursorRef}
  className="fixed top-0 left-0 w-16 h-16 rounded-full backdrop-blur-xs bg-white/8 z-40 pointer-events-none mix-blend-lighten transition-transform duration-75 ease-out"
  style={{
    transform: "translate(-50%, -50%)",
  }}
></div>

      <div className="fixed max-w-[500px] w-[80%] h-14 top-6 flex flex-row justify-around items-center backdrop-blur-sm z-999 bg-[#ffffff16] rounded-3xl">
        <p className="font-[200] text-[#ffffffd7] font-poppins transition-all duration-100 ease-in-out hover:font-normal hover:text-lg">Home</p>
        <p className="font-[200] text-[#ffffffd7] font-poppins transition-all duration-100 ease-in-out hover:font-normal hover:text-lg">About</p>
        <p className="font-[200] text-[#ffffffd7] font-poppins transition-all duration-100 ease-in-out hover:font-normal hover:text-lg">Projects</p>
        <p className="font-[200] text-[#ffffffd7] font-poppins transition-all duration-100 ease-in-out hover:font-normal hover:text-lg">Contact</p>
      </div>

      <div className="relative h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col justify-start text-center">
          <div className="text-white font-poppins font-extralight pl-1">
            Hello, I'm Haseeth. An Aspiring Engineer.
          </div>
          <div className="font-montserrat text-6xl font-bold bg-gradient-to-tr from-[#8E8E8E] via-[#A7A7A7] via-[#BFBFBF] via-[#D7D7D7] to-[#F5F5F5] bg-clip-text text-transparent ">
            FULLSTACK DEVELOPER
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
