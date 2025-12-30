import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { getBlogBySlug } from "../blogsdata/blogs";

// Code block component with syntax highlighting styling
const CodeBlock = ({ code, language }) => {
  return (
    <div className="relative my-6 rounded-xl overflow-hidden">
      {/* Language badge */}
      <div className="absolute top-0 right-0 px-3 py-1 bg-[#ffffff15] text-[#ffffff80] text-xs font-mono rounded-bl-lg">
        {language}
      </div>
      <pre className="bg-[#0a0a0a] border border-[#ffffff20] p-4 pt-8 overflow-x-auto">
        <code className="text-sm font-mono text-[#e2e8f0] leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
};

// Image component with caption
const BlogImage = ({ src, alt, caption }) => {
  return (
    <figure className="my-8">
      <div className="rounded-xl overflow-hidden border border-[#ffffff15]">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-[#ffffff60] font-poppins text-sm italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// Helper function to parse inline formatting (bold text with **)
const parseInlineFormatting = (text) => {
  if (!text || typeof text !== 'string') return text;
  
  // Split by **text** pattern and create elements
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove ** markers and wrap in strong tag
      const boldText = part.slice(2, -2);
      return <strong key={index} className="font-[600] text-white">{boldText}</strong>;
    }
    return part;
  });
};

// Content renderer
const ContentRenderer = ({ content }) => {
  return content.map((block, index) => {
    switch (block.type) {
      case "heading":
        const HeadingTag = `h${block.level}`;
        const headingClasses = {
          2: "text-2xl sm:text-3xl font-montserrat font-[400] text-[#ffffffd7] mt-10 mb-4",
          3: "text-xl sm:text-2xl font-montserrat font-[400] text-[#ffffffd7] mt-8 mb-3",
          4: "text-lg sm:text-xl font-montserrat font-[400] text-[#ffffffd7] mt-6 mb-2",
        };
        return (
          <HeadingTag key={index} className={headingClasses[block.level]}>
            {block.text}
          </HeadingTag>
        );

      case "text":
        return (
          <p
            key={index}
            className="text-[#ffffffe8] font-poppins font-[400] text-base leading-relaxed mb-4"
          >
            {parseInlineFormatting(block.text)}
          </p>
        );

      case "image":
        return (
          <BlogImage
            key={index}
            src={block.src}
            alt={block.alt}
            caption={block.caption}
          />
        );

      case "code":
        return (
          <CodeBlock key={index} code={block.code} language={block.language} />
        );

      case "quote":
        return (
          <blockquote
            key={index}
            className="my-6 pl-4 border-l-4 border-[#ffffff40] italic"
          >
            <p className="text-[#ffffffe8] font-poppins font-[400] text-base leading-relaxed">
              "{parseInlineFormatting(block.text)}"
            </p>
            {block.author && (
              <footer className="mt-2 text-[#ffffff60] font-poppins text-sm">
                — {block.author}
              </footer>
            )}
          </blockquote>
        );

      case "list":
        return (
          <ul
            key={index}
            className="my-4 pl-6 space-y-2"
          >
            {block.items.map((item, i) => (
              <li
                key={i}
                className="text-[#ffffffe8] font-poppins font-[400] text-base leading-relaxed list-disc"
              >
                {parseInlineFormatting(item)}
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  });
};

const BlogDetail = () => {
  const { slug } = useParams();
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

  const blog = getBlogBySlug(slug);

  useEffect(() => {
    // Scroll to top when blog loads
    window.scrollTo(0, 0);

    // Send analytics request when blog is opened
    if (blog && blog.title) {
      fetch("https://blogs-backend-analytics.vercel.app/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: String(blog.title) }),
      }).catch(() => {
        // Silently fail - analytics should not affect user experience
      });
    }
  }, [slug, blog]);

  // 404 - Blog not found
  if (!blog) {
    return (
      <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center">
        <h1 className="text-white font-montserrat text-3xl mb-4">
          Blog Not Found
        </h1>
        <p className="text-[#ffffff80] font-poppins mb-8">
          The blog you're looking for doesn't exist.
        </p>
        <Link
          to="/blogs"
          className="px-6 py-2 bg-[#ffffff16] text-white rounded-xl font-poppins hover:bg-[#ffffff25] transition-colors"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen w-full bg-black">
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
            "radial-gradient(ellipse 100% 90% at 50% 0%, rgba(226, 232, 240, 0.06), transparent 40%), #000000",
        }}
      />

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-16 px-4 sm:px-8">
        <article className="max-w-3xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/blogs")}
            className="flex items-center gap-2 text-[#ffffff80] font-poppins text-sm mb-8 hover:text-white transition-colors group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blogs
          </motion.button>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-[#ffffff10] text-[#ffffffa0] font-poppins"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-[500] text-white mb-4 leading-tight">
              {blog.title}
            </h1>

            {/* Date */}
            <p className="text-[#ffffff60] font-poppins text-sm">
              {formattedDate}
            </p>
          </motion.header>

          {/* Thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl overflow-hidden mb-10 border border-[#ffffff15]"
          >
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContentRenderer content={blog.content} />
          </motion.div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#ffffff30] to-transparent" />

          {/* Back to blogs CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff10] border border-[#ffffff20] text-white rounded-xl font-poppins hover:bg-[#ffffff20] transition-all duration-200"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              View All Blogs
            </Link>
          </motion.div>
        </article>
      </main>

      {/* Footer */}
      <div className="relative z-10 py-8">
        <Footer />
      </div>
    </div>
  );
};

export default BlogDetail;
