import { useEffect, useRef, useState } from "react";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import pic from "../assets/tailwindcss-mark.d52e9897.svg";
import partnr_logo from "../assets/partnr_promo.png";
import watr_logo from "../assets/watrlogo.png";
import flairai_logo from "../assets/flairai_logo.png"
import finai_logo from "../assets/finai_logo.png";
import valentines_logo from "../assets/valentines_logo.png";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { getBlogPreviews } from "../blogsdata/blogs";

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
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind",
        src: pic,
      },
      {
        name: "HTML",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    backend: [
      {
        name: "Java",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Node.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Nest.JS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
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
        name: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/postgresql.svg",
      },
      {
        name: "Socket.IO",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
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
      {
        name: "Docker",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        bg: true,
      },
      {
        name: "Postman",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        bg: true,
      },
      {
        name: "VS Code",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        bg: true,
      },
    ],
  };

  const projects = [
    {
      title: "Partnr",
      image: partnr_logo, // Replace with your actual image URLs
      description:
        "A social platform to find people in tech based on skills and interests.",
      github: "https://github.com/haseethvardhan/partnr",
      live: "https://partnr.onrender.com",
    },
    {
      title: "FinAI",
      image: finai_logo,
      description:
        "A Personal Finance tool integrated with AI to perform multi-step financial analysis.",
      github: "https://github.com/HaseethVardhan/FinAI",
      live: "https://finaisite.onrender.com/",
    },
    {
      title: "Valentines Wrapped",
      image: valentines_logo,
      description:
        "A website which allows you to craft a beautiful love story by adding photos, love coupons, music, and heartfelt messages.",
      github: "https://github.com/HaseethVardhan/valentineswrapped",
      live: "https://valentineswrapped.vercel.app",
    },
    {
      title: "Watr",
      image: watr_logo,
      description:
        "A prototype subscription-based water delivery web platform for local suppliers and users.",
      github: "https://github.com/haseethvardhan/watr-delivery-app",
      live: "null",
    },
    {
      title: "FlairAI-Clone",
      image: flairai_logo,
      description:
        "A purely frontend UI clone of flairAI website made with React. It has nothing to do with official flair ai website.",
      github: "https://github.com/HaseethVardhan/flairaiClone",
      live: "https://flairai-clone.vercel.app/",
    },
  ];

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
        <Link
          to="/blogs"
          className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition-all duration-100 ease-in-out hover:font-normal hover:text-lg"
        >
          Blogs
        </Link>
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
          <button className="mx-auto px-6 py-2 mt-6 text-[#ffffffd7] backdrop-blur-sm z-45 bg-[#ffffff16] rounded-xl text-center font-poppins font-extralight border border-[#ffffff3b] transition-all duration-200 ease-in-out hover:scale-105 hover:text-lg w-fit">
            <Link to="https://drive.google.com/file/d/1ydK5i28aWERsoKb34TE9GsxQAqcT_m9N/view?usp=sharing" >Resume</Link>
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

            <div className="flex flex-col w-full px-4 py-3 justify-between backdrop-blur-sm z-45 bg-[#0d0d0dc0] rounded-xl border border-[#ffffff24] text-xs sm:text-base">
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

          <div className="p-4 sm:p-6 rounded-xl backdrop-blur-sm relative isolate z-45 bg-[#0d0d0dc0] border border-[#ffffff24] max-w-3xl mx-auto">
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

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen w-full flex flex-col items-center justify-center 
  px-4 sm:px-8 md:px-20 snap-start scroll-mt-24"
      >
        <div className="w-full max-w-4xl text-center text-[#ffffffd7] mx-auto">
          <h1 className="font-montserrat font-[400] text-2xl sm:text-3xl mb-4">
            Projects
          </h1>

          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="z-45 w-full xs:w-[90%] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] 
  max-w-[350px] backdrop-blur-sm bg-[#0d0d0dc0] border border-[#ffffff24] 
  rounded-xl p-3 sm:p-4 flex flex-col justify-between 
  hover:scale-[1.02] transition-transform duration-200 ease-in-out"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 sm:h-40 object-cover rounded-md mb-3"
                  />
                  <h2 className="text-white font-montserrat font-semibold text-lg mb-2">
                    {project.title}
                  </h2>
                  <p className="text-[#ffffffd7] font-poppins text-sm font-light mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between text-sm font-poppins text-[#ffffffd7]">
                    {project.live !== "null" && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="underline hover:text-white transition"
                      >
                        Live
                      </a>
                    )}
                    {project.live === "null" && (
                      <p
                        href={project.live}
                        target="_blank"
                        className="underline hover:text-white transition opacity-0 select-none"
                      >
                        Live
                      </p>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      className="underline hover:text-white transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section
        id="blogs"
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 snap-start"
      >
        <div className="w-full max-w-4xl text-center text-[#ffffffd7] mx-auto">
          <h1 className="font-montserrat font-[400] text-2xl sm:text-3xl mb-8">
            Recent Blogs
          </h1>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {getBlogPreviews().slice(0, 3).map((blog) => (
              <div key={blog.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[380px] flex">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff10] border border-[#ffffff24] text-white rounded-xl font-poppins hover:bg-[#ffffff20] transition-all duration-200 hover:scale-105"
          >
            View All Blogs
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen w-full snap-start flex flex-col items-center justify-center px-4 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto p-6 sm:p-10 backdrop-blur-sm bg-[#0d0d0dc0] border border-[#ffffff24] rounded-xl z-45"
        >
          <p className="font-poppins font-[200] text-sm sm:text-base mb-6 leading-relaxed text-[#ffffffd7]">
            I'm always open to discussing new opportunities, collaborations, or
            simply chatting about tech. Feel free to reach out via any of the
            platforms below!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/haseethvardhankaduru"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#ffffff30] text-white hover:bg-white/10 transition-all"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              <span className="font-poppins text-sm">LinkedIn</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/haseethvardhan"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#ffffff30] text-white hover:bg-white/10 transition-all"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                alt="X"
                className="w-4 h-4 invert-100"
              />
              <span className="font-poppins text-sm">X / Twitter</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=haseethvardhan01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#ffffff30] text-white hover:bg-white/10 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              <span className="font-poppins text-sm">Email</span>
            </motion.a>
          </div>
        </motion.div>
        <div className="w-full py-5">
          <Footer />
        </div>
      </section>
        {/* <div className="w-full flex justify-center items-center p-4">
          <Footer />
        </div> */}

    </div>
  );
};

export default Home;
