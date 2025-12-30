// Blog data structure
// Each blog contains metadata and content sections
// Content sections can be: heading, text, image, or code

export const blogs = [
  {
    id: 1,
    slug: "how-to-stay-consistent",
    title: "How to stay consistent?",
    excerpt: "My journey with consistency, lessons learned, and what truly worked for me.",
    date: "2025-12-30",
    tags: ["Intellectual", "Personal Growth"],
    thumbnail:
      "https://imgs.search.brave.com/g9Da2YvI0uvuVtSz7kGk5R5jR3OUzS-y2R7eyfFxl6s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MTk2NTc5L3Bob3Rv/L2NoYWxrLWRyYXdp/bmctb2YtYS1wb3Np/dGl2ZS1ncm93dGgt/c2FsZXMtZ3JhcGgt/d2l0aC1hcnJvdy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Yk9LTjJhZGJIZzhO/bWhpTDVMMHhlQTRx/cDdOLTAwb3o2bVkt/aElmNi1GWT0",
    content: [
      {
        type: "text",
        text: "Before going into this blog, let me introduce myself."
      },
      {
        type: "text",
        text: "I’m Haseeth, a computer science student passionate about tech, and this is my first blog."
      },
      {
        type: "text",
        text: "I wanted to write about something I truly understand — not theory, not motivation quotes, but something I’ve struggled with and learned the hard way: consistency."
      },
      {
        type: "text",
        text: "To give you a little context, I am doing a 365daysofcode challenge on X where I post my learnings daily for a year. By the time this blog goes online, it would be the 332nd day of my challenge."
      },
      {
        type: "heading",
        level: 2,
        text: "Here is all I did this year"
      },
      {
        type: "list",
        items: [
          "**Knight on LeetCode, solved 750+ problems**",
          "**3⭐ on CodeChef**",
          "**Cracked an internship**",
          "**Built multiple projects**",
          "**Participated in multiple hackathons**",
          "**Continuously learning new tech**"
        ]
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dbzcsfi3e/image/upload/v1767086226/Screenshot_2025-12-30_083930_jeqot7.png"
      },
      {
        type: "text",
        text: "I believe I’m at least somewhat qualified to share what worked for me."
      },
      {
        type: "heading",
        level: 2,
        text: "Do What You Love"
      },
      {
        type: "text",
        text: "I won't say you can't do something for years without loving it, but doing something that you love is way easier."
      },
      {
        type: "quote",
        text: "**The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.** — Steve Jobs"
      },
      {
        type: "text",
        text: "I'm assuming most of those who read this are young people, so if you haven't found something you truly love, keep searching."
      },
      {
        type: "heading",
        level: 2,
        text: "Find Your Reason"
      },
      {
        type: "text",
        text: "Find your reason. Everybody has their own."
      },
      {
        type: "text",
        text: "I come from a lower-middle-class family. I understand the value of money, and I know I can be the one to change my family’s fate. The stronger your reason, the higher the chance you’ll sustain consistency."
      },
      {
        type: "heading",
        level: 2,
        text: "Start Small"
      },
      {
        type: "text",
        text: "You don't need to do everything at once. Always start small. Don't let yourself burn out."
      },
      {
        type: "text",
        text: "Maybe you can start by solving 1-2 problems a day. Maybe within a week or a month, you start solving 3-4 problems. If you feel like you are doing too much and you might burn out, reduce the work, go back to solving 1-2 problems again, and gradually increase."
      },
      {
        type: "text",
        text: "See the bigger picture. You can always solve more problems later as long as you don't burnout today."
      },
      {
        type: "heading",
        level: 2,
        text: "Find Inspiration"
      },
      {
        type: "text",
        text: "I watch a lot of sports. I idolized Virat Kohli. I take my inspiration from him. You might be into football, f1 or any other sport or niche. You'll always have people who defeated the odds and made their way. Try to find inspiration from them. If they can do it, why can't you?"
      },
      {
        type: "text",
        text: "Inspiration can strike from anywhere. Early in my challenge, I used to watch solutions from Striver. Most of his videos were recorded after 12am. He used to work fulltime at Google, came home, prepare himself, recorded at night. He used to be constantly coughing and suffering from pain, yet he didn't stop. Why would a guy working at Google, earning 6-7 figures, do such stuff? So, try to take inspiration from people."
      },
      {
        type: "heading",
        level: 2,
        text: "Accountability"
      },
      {
        type: "text",
        text: "You used to do homework in school, not because you liked it, but because if you didn't, you would be held accountable by the teacher. This might be a lame example that I took, but it's real."
      },
      {
        type: "text",
        text: "This is where X came into the picture for me. This is why I started 365daysofcode because I wanted to be accountable. I can't break my streak; if I broke it, then people will ask why I broke it. Though they might not care, I would still feel bad about it. This feeling or fear will help you stay consistent."
      },
      {
        type: "heading",
        level: 2,
        text: "Devil’s Day"
      },
      {
        type: "text",
        text: "Truth be told, there will always be days when you can't seem to do anything. Sometimes you need to listen to your brain and body. It's okay to take a break."
      },
      {
        type: "text",
        text: "But here is what I feel. Even on your worst day, try to do the minutest thing possible. For me, whenever I felt like I needed desperate sleep or rest, I always opened Leetcode, looked at the problem of the day, and if it was a very easy problem, I solved it within 5 mins and slept. If it was something I couldn't solve in 10 mins, I just copy pasted the solution and slept. The next day, when I wokeup, I went back to the problem and solved it. This way the streak stayed and so did my motivation to increase the streak, because if I hadn't copy pasted the solution, I would've comeback to Day-0 again. I would've been done with it. I would have had zero motivation."
      },
      {
        type: "text",
        text: "Sometimes it’s okay to cheat a little — as long as you’re playing the long game."
      },
      {
        type: "heading",
        level: 2,
        text: "Trust the Process"
      },
      {
        type: "text",
        text: "This is the most crucial part. Results take time. Don’t chase them — enjoy the process and blindly trust it."
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion"
      },
      {
        type: "text",
        text: "Consistency is not about doing something big every day. It’s about showing up, even when you don’t feel like it."
      },
      {
        type: "text",
        text: "The first 30–50 days are the hardest. If you survive that phase, you’re no longer forcing yourself — you’re building a habit."
      },
      {
        type: "text",
        text: "Keep fighting. Never give up.\nAll the best, soldier. 🫡"
      }
    ]
  }
];


// Helper function to get blog by slug
export const getBlogBySlug = (slug) => {
  return blogs.find(blog => blog.slug === slug);
};

// Helper function to get all blog previews (without full content)
export const getBlogPreviews = () => {
  return blogs.map(({ id, slug, title, excerpt, date, tags, thumbnail }) => ({
    id,
    slug,
    title,
    excerpt,
    date,
    tags,
    thumbnail
  }));
};
