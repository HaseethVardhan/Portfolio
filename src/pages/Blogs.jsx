import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import { getBlogPreviews } from "../blogsdata/blogs";

const Blogs = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const blogs = getBlogPreviews();
  const navigate = useNavigate();

  // Handle navigation to home page sections
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    if (window.innerWidth < 768) return;

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
    <div className="min-h-screen w-full bg-black">
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
        <Link
          to="/"
          className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition-all duration-100 ease-in-out hover:font-normal hover:text-lg"
        >
          Home
        </Link>
        <a
          href="/#about"
          onClick={(e) => handleNavClick(e, "about")}
          className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition-all duration-100 ease-in-out hover:font-normal hover:text-lg"
        >
          About
        </a>
        <a
          href="/#projects"
          onClick={(e) => handleNavClick(e, "projects")}
          className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition-all duration-100 ease-in-out hover:font-normal hover:text-lg"
        >
          Projects
        </a>
        <Link
          to="/blogs"
          className="text-sm sm:text-base text-white font-poppins font-normal transition-all duration-100 ease-in-out"
        >
          Blogs
        </Link>
        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="text-sm sm:text-base text-[#ffffffd7] font-poppins font-[200] transition-all duration-100 ease-in-out hover:font-normal hover:text-lg"
        >
          Contact
        </a>
      </div>

      {/* Background gradient */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 90% at 50% 0%, rgba(226, 232, 240, 0.08), transparent 50%), #000000",
        }}
      />

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-16 px-4 sm:px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-[#ffffffd7] font-montserrat font-[400] text-3xl sm:text-4xl mb-4">
              Blogs
            </h1>
          </motion.div>

          {/* Blog Grid */}
          {blogs.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {blogs.map((blog) => (
                <div key={blog.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[380px]">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#ffffff60] font-poppins text-lg">
                No blogs yet. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10 py-8">
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
