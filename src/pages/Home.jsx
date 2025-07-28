import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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

  const [activeTab, setActiveTab] = useState("frontend");

  const techStacks = {
    frontend: [
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        bg: true,
      },
      {
        name: "Tailwind",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "HTML",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
    backend: [
      {
        name: "Node.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        bg: true,
      },
      {
        name: "MongoDB",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
    others: [
      {
        name: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        bg: true,
      },
      {
        name: "Figma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Vercel",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        bg: true,
      },
    ],
  };

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
        <a
          href="#hero"
          className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition-all duration-100 ease-in-out hover:font-normal hover:text-lg"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition-all duration-100 ease-in-out hover:font-normal hover:text-lg"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition-all duration-100 ease-in-out hover:font-normal hover:text-lg"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition-all duration-100 ease-in-out hover:font-normal hover:text-lg"
        >
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
              "radial-gradient(ellipse 100% 90% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
          }}
        />

        <div className="flex flex-col justify-start text-center px-4">
          <div className="text-white font-poppins font-extralight text-sm sm:text-base z-1">
            Hello, I'm Haseeth. An Aspiring Engineer.
          </div>
          <div className="z-1 font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-tr from-[#8E8E8E] to-[#F5F5F5] bg-clip-text text-transparent mt-2">
            FULLSTACK DEVELOPER
          </div>
          <button className="mx-auto px-6 py-2 mt-6 text-[#ffffffd7] backdrop-blur-sm z-99 bg-[#ffffff16] rounded-xl text-center font-poppins font-extralight border border-[#ffffff3b] transition-all duration-200 ease-in-out hover:scale-105 hover:text-lg w-fit">
            Resume
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen w-full flex flex-col items-center justify-center 
 px-4 sm:px-8 md:px-20 snap-start"
      >
        <div className="max-w-4xl text-center w-full">
          <h1 className="text-[#ffffffd7] font-montserrat font-[400] text-2xl sm:text-3xl">
            Who am I
          </h1>

          <p className="text-[#ffffffd7] font-poppins font-[200] text-left py-4 text-sm sm:text-base leading-relaxed">
            Hey, I’m <span className="font-[500]">HASEETH!</span> I’m currently
            pursuing a degree in{" "}
            <span className="font-[500]">COMPUTER SCIENCE</span> and working my
            way into becoming a strong{" "}
            <span className="font-[500]">FULLSTACK DEVELOPER</span>.
            <br />
            <br />
            I enjoy solving problems with code, learning new technologies, and
            building web apps that actually work well and look great.
            <br />
            <br />
            I’m passionate about creating things — whether it’s writing logic,
            fixing bugs, or just making the UI feel smooth. I believe in
            constantly learning and pushing boundaries.
          </p>

          <div className="text-[#ffffffd7] flex flex-col gap-2">
            <h1 className="text-left font-montserrat font-[400] text-lg sm:text-xl py-2">
              Education
            </h1>

            <div className="flex flex-col w-full px-4 py-3 justify-between backdrop-blur-sm z-99 bg-[#0d0d0dc0] rounded-xl border border-[#ffffff24] text-xs sm:text-base">
              <div className="flex flex-row w-full justify-between">
                <p className="font-poppins">Computer Science</p>
                <p className="font-poppins text-[#ffffff8d] font-extralight">
                  Sept 2023 - May 2027
                </p>
              </div>
              <div className="text-left font-poppins text-[#ffffff8d] font-extralight">
                Vignan's Institute of Information Technology
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 snap-start"
      >
        <div className="w-full max-w-4xl text-center text-[#ffffffd7] mx-auto">
          <h1 className="font-montserrat font-[400] text-2xl sm:text-3xl mb-4">
            Skills
          </h1>

          <div className="p-4 sm:p-6 rounded-xl backdrop-blur-sm relative isolate z-99 bg-[#0d0d0dc0] border border-[#ffffff24] max-w-3xl mx-auto">
            {/* Tab Headers */}
            {/* Tab Headers with Animation */}
            <div className="relative flex justify-around mb-6 flex-wrap sm:flex-nowrap">
  {["frontend", "backend", "others"].map((tab) => {
    const isActive = activeTab === tab;
    return (
      <div
        key={tab}
        onClick={() => setActiveTab(tab)}
        className="relative z-10 px-4 sm:px-8 py-1 sm:py-2 font-poppins cursor-pointer text-xs sm:text-sm"
      >
        {isActive && (
          <motion.div
            layoutId="tabHighlight"
            className="absolute inset-0 bg-[#ffffff16] rounded-md backdrop-blur-sm"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
            }}
          />
        )}
        <span
          className={`relative z-10 ${
            isActive
              ? "text-white font-medium"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </span>
      </div>
    );
  })}
</div>


            {/* Tech Grid */}
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 px-3 sm:px-5 min-h-[220px]">
                  {techStacks[activeTab].map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center text-center w-24"
                    >
                      <img
                        src={tech.src}
                        alt={tech.name}
                        className={`w-10 h-10 sm:w-12 sm:h-12 mb-2 ${
                          tech.bg ? "bg-white rounded-full p-1" : ""
                        }`}
                      />
                      <h2 className="text-white font-poppins font-[200] text-xs sm:text-sm">
                        {tech.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Sections: Add here */}
      {/* <section id="projects" className="h-screen snap-start">...</section> */}
      {/* <section id="contact" className="h-screen snap-start">...</section> */}
    </div>
  );
};

export default Home;
