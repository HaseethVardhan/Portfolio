import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const { slug, title, excerpt, date, tags, thumbnail } = blog;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group h-full"
    >
      <Link to={`/blogs/${slug}`} className="block h-full">
        <div
          className="backdrop-blur-sm bg-[#0d0d0dc0] border border-[#ffffff24] 
          rounded-xl overflow-hidden flex flex-col h-full
          hover:border-[#ffffff40] transition-all duration-300 ease-in-out
          hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5"
        >
          {/* Thumbnail */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-[#ffffff10] text-[#ffffffa0] font-poppins"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-white font-montserrat font-semibold text-lg mb-2 group-hover:text-[#ffffffee] transition-colors line-clamp-2 h-14">
              {title}
            </h2>

            {/* Excerpt */}
            <p className="text-[#ffffff99] font-poppins font-light text-sm mb-4 line-clamp-2 flex-grow">
              {excerpt}
            </p>

            {/* Date & Read More */}
            <div className="flex justify-between items-center mt-auto pt-3 border-t border-[#ffffff15]">
              <span className="text-[#ffffff60] font-poppins text-xs">
                {formattedDate}
              </span>
              <span className="text-[#ffffffa0] font-poppins text-sm group-hover:text-white transition-colors flex items-center gap-1">
                Read more
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
