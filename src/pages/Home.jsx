import { useEffect, useRef } from "react";

const Home = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Skip on mobile

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
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black">
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-16 h-16 rounded-full backdrop-blur-xs bg-white/8 z-40 pointer-events-none mix-blend-lighten transition-transform duration-75 ease-out hidden md:block"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Navbar */}
      <div className="fixed max-w-[500px] w-[80%] h-14 top-6 left-1/2 -translate-x-1/2 flex justify-around items-center backdrop-blur-sm z-50 bg-[#ffffff16] rounded-3xl">
        <a href="#hero" className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition hover:font-normal hover:text-lg">
          Home
        </a>
        <a href="#about" className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition hover:font-normal hover:text-lg">
          About
        </a>
        <a href="#projects" className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition hover:font-normal hover:text-lg">
          Projects
        </a>
        <a href="#contact" className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition hover:font-normal hover:text-lg">
          Contact
        </a>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center snap-start"
      >
        {/* Background only for hero */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
          }}
        />

        <div className="z-10 flex flex-col justify-start text-center px-4">
          <div className="text-white font-poppins font-extralight text-sm sm:text-base">
            Hello, I'm Haseeth. An Aspiring Engineer.
          </div>
          <div className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-tr from-[#8E8E8E] to-[#F5F5F5] bg-clip-text text-transparent mt-2">
            FULLSTACK DEVELOPER
          </div>
          <button className="mx-auto px-6 py-2 mt-6 text-[#ffffffd7] backdrop-blur-sm z-10 bg-[#ffffff16] rounded-xl text-center font-poppins font-extralight border border-[#ffffff3b] transition-all duration-200 ease-in-out hover:scale-105 hover:text-lg w-fit">
            Resume
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen w-full flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 snap-start"
      >
        <div className="max-w-4xl text-white text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-tr from-[#8E8E8E] to-[#F5F5F5] bg-clip-text text-transparent font-montserrat">
            About Me
          </h2>
          <p className="text-sm sm:text-base font-light text-gray-300 leading-relaxed font-poppins">
            I'm Haseeth, a passionate fullstack developer with a strong interest
            in building efficient, scalable, and user-friendly web applications.
            I enjoy solving real-world problems through code, exploring new
            technologies, and collaborating on impactful projects.
          </p>
        </div>
      </section>

      {/* Future Sections: Add here */}
      {/* <section id="projects" className="h-screen snap-start">...</section> */}
      {/* <section id="contact" className="h-screen snap-start">...</section> */}
    </div>
  );
};

export default Home;
