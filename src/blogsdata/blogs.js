// Blog data structure
// Each blog contains metadata and content sections
// Content sections can be: heading, text, image, or code

import { text } from "framer-motion/client";

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
  },
  {
    id: 2,
    slug: "understanding-context-in-ai",
    title: "Understanding Context in AI: A Beginner’s Guide to Vector Databases",
    excerpt: "Learn about context, it's importance in AI and how to manage it using vector databases",
    date: "2026-01-25",
    tags: ["AI", "Database"],
    thumbnail:
      "https://res.cloudinary.com/dbzcsfi3e/image/upload/v1769348493/Gemini_Generated_Image_c04qnpc04qnpc04q_d67gbe.png",
    content: [
  {
    type: "text",
    text: "If you are a beginner or a developer looking to get into Gen-AI or Agentic AI, but have no prior knowledge, this might be a good starting point. If you already dipped your hands into AI, this might seem very basic for you, so you may skip it."
  },
  {
    type: "text",
    text: "There are no major prerequisites for this, but if you know how basic APIs work, it would be easy to follow. This article is purely theoretical and has no code."
  },
  {
    type: "text",
    text: "It has been kept in mind that almost everyone can understand it, so some things might have been simplified for the sake of understanding."
  },
  {
    type: "text",
    text: "Throughout the article, we'll learn by taking the example of an AI chatbot. So let's dive in."
  },
  {
    type: "heading",
    level: 2,
    text: "What is context?"
  },
  {
    type: "text",
    text: "In English, context means _\"the situation within which something exists or happens, and that can help explain it\"_."
  },
  {
    type: "text",
    text: "Emphasize the words **\"that can help explain it\"**."
  },
  {
    type: "text",
    text: "To understand simply, let's take an example. You overheard your friends talking about something. One of your friends said,"
  },
  {
    type: "quote",
    text: "I like the yellow one. I love the way it sounds"
  },
  {
    type: "text",
    text: "Since you weren't there from the beginning, you don't know what they are talking about. Maybe they are talking about a yellow car that makes a great exhaust sound, maybe they are talking about a yellow bluetooth speaker, or maybe it is something entirely different. You don't exactly know what it is."
  },
  {
    type: "text",
    text: "Why? Because you don't know the **CONTEXT**."
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dbzcsfi3e/image/upload/c_pad,b_gen_fill,ar_16:9/v1769345228/Screenshot_2026-01-25_181537_yvurvx.png" 
  },
  {
    type: "text",
    text: "If you know the situation or previous conversation, you would have explained it. To prove this, now I'll show you the conversation the friends are having. Can you guess what they are talking about?"
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dbzcsfi3e/image/upload/v1769345726/Screenshot_2026-01-25_182506_ylfpua.png" 
  },
  {
    type: "text",
    text: "Yes. They are talking about a yellow car. You were able to explain it now because you know the situation and the previous conversations."
  },
  {
    type: "text",
    text: "I hope you understand what context means."
  },
  {
    type: "text",
    text: "From now on, let's learn with an example of an AI chatbot."
  },
  {
    type: "text",
    text: "This is how it works,"
  },
  {
    type: "list",
    items: [
      "There is an app where users will send a message",
      "This message comes to your server",
      "Now your server will ask your AI provider’s server (OpenAI, Gemini, etc) for a response through an API call",
      "They will send a response to your server",
      "Which sends it to your app",
      "Now your user can see the response"
    ]
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dbzcsfi3e/image/upload/v1769346421/Gemini_Generated_Image_4b1jwr4b1jwr4b1j_lhck8h.png"
  },
  {
    type: "text",
    text: "But whenever you are using an API from OpenAI, Google Gemini, etc, every call you make is treated as a fresh new independent message. It doesn't remember any previous interactions."
  },
  {
    type: "text",
    text: "So we have a problem now. It doesn't remember anything the user has said apart from the latest message. How can we solve it?"
  },
  {
    type: "text",
    text: "Let's discuss solutions."
  },
  {
    type: "text",
    text: "You might say, Haseeth, since my API doesn't remember anything,"
  },
  {
    type: "list",
    items: [
      "I will save all the previous messages in my database",
      "When a user sends a new message, I will combine the previous messages and the new message and send all the messages through the API",
      "Now AI has all the previous messages, so it has the context, hence it can answer and explain properly."
    ]
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dbzcsfi3e/image/upload/v1769346798/Gemini_Generated_Image_j6qhzhj6qhzhj6qh_apxtz4.png"
  },
  {
    type: "text",
    text: "Yes. You are correct. This time, AI will answer properly."
  },
  {
    type: "text",
    text: "But there are a few problems with this."
  },
  {
    type: "list",
    items: [
      "API calls are costly",
      "All of them have some limits you cannot cross",
      "Today, you might have a few messages, but with time, the number of messages will grow exponentially, maybe thousands of messages. You cannot send all the messages after a certain limit."
    ]
  },
  {
    type: "heading",
    level: 4,
    text: "How can we overcome this limitation?"
  },
  {
    type: "text",
    text: "First of all, do we need to send all the messages?"
  },
  {
    type: "text",
    text: "Let's take the example of a conversation. These are the messages stored in your database."
  },
  {
    type: "list",
    items: [
      "_\"I want to buy an iPhone 16 pro.\"_",
      "_\"I like the camera on it.\"_",
      "_\"It has a good display.\"_",
      "_\"I don't know about the battery though.\"_",
      "_\"I like the blue color.\"_"
    ]
  },
  {
    type: "text",
    text: "Now the user has prompted _\"What's the price?\"_"
  },
  {
    type: "text",
    text: "Since AI doesn't remember anything, it doesn't know which price the user is talking about. So we need to send the previous messages."
  },
  {
    type: "text",
    text: "But do you think we need to send all five messages?"
  },
  {
    type: "text",
    text: "No."
  },
  {
    type: "text",
    text: "We can just send _\"I want to buy an iPhone 16 Pro\"_ and _\"I like the blue color\"_."
  },
  {
    type: "text",
    text: "Now AI knows that the user is talking about a blue colored iPhone 16 Pro."
  },
  {
    type: "text",
    text: "All the other messages are irrelevant to this message. This way, we only send the necessary information to the AI, not all the messages."
  },
  {
    type: "text",
    text: "But how do we know what messages are relevant and what are irrelevant?"
  },
  {
    type: "text",
    text: "Here is where Vector Databases come into the picture."
  },
  {
    type: "heading",
    level: 2,
    text: "What are Vector Databases?"
  },
  {
    type: "text",
    text: "Vector databases are used to store and manage vector data."
  },
  {
    type: "text",
    text: "Now, what is vector data?"
  },
  {
    type: "text",
    text: "Any data or information that is represented as an array of numerical values is called vector data."
  },
  {
    type: "text",
    text: "You can convert images, texts, documents, and many other forms of data into numerical array values by using different tools."
  },
  {
    type: "text",
    text: "Now, suppose let's say we can convert a text into a numerical array. These are called Text embeddings. You can convert any form of text data into text embeddings using text embedding models. OpenAI, Gemini, and many others provide these models."
  },
  {
    type: "text",
    text: "Let us visually see how these text embeddings work."
  },
  {
    type: "text",
    text: "Below, you can see the text, and it's respective vector data/text embeddings. These numerical values will change depending on the order, spacing, and essentially the semantics of the sentence. It will capture not only plain words, but also the meaning or emotion behind the sentence. How it does is out of scope for today's article, but for now, a text embedding model will give us some numerical data, that's all we need to know."
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dbzcsfi3e/image/upload/v1769347888/Screenshot_2026-01-25_161053_vjunp2.png"
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dbzcsfi3e/image/upload/v1769347896/Screenshot_2026-01-25_161104_hjxz4l.png"
  },
  {
    type: "text",
    text: "These numerical values will change depending on the order, spacing, and essentially the semantics of the sentence. It will capture not only plain words, but also the meaning or emotion behind the sentence. How it does is out of scope for today's article, but for now, a text embedding model will give us some numerical data, that's all we need to know."
  },
  {
    type: "text",
    text: "A vector database will store this numerical data in a high-dimensional space. High-dimensional space allows the model to capture many subtle features of meaning at once."
  },
  {
    type: "text",
    text: "You can see the picture below, where every dot represents a piece of text (a word, sentence, or message). These words are arranged in the space based on the closeness and relation to other words. So words that are similar or have a close relationship will always stay closer to eachother."
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dbzcsfi3e/image/upload/v1769348018/Screenshot_2026-01-25_160817_jjzswl.png"
  },
  {
    type: "text",
    text: "Now, let us understand how search works in vector databases."
  },
  {
    type: "text",
    text: "In a traditional database, search depends on exact matching."
  },
  {
    type: "text",
    text: "For example, if you write a query to find a \"car\", you will exactly find a \"car\" if it is present in the database, otherwise you will get null or nothing."
  },
  {
    type: "text",
    text: "In a vector database, search works by approximate matching. It need not be exactly matched."
  },
  {
    type: "text",
    text: "If you try to find \"car\", it might return you \"racecar\", \"sportscar\", \"car\", \"bike\", \"motorsports\", etc depending on your data."
  },
  {
    type: "text",
    text: "This is called semantic search. It tries to search by meaning rather than exact value. It uses multiple algorithms and models to do this. Some basic examples would be Cosine Similarity, Nearest Neighbours, etc."
  },
  {
    type: "text",
    text: "Now, coming back to our original example of an AI chatbot. Instead of storing these messages in a traditional database, we can store them in a vector database."
  },
  {
    type: "text",
    text: "When a user sends a new message, we send this message to our vector database and ask it to find related messages."
  },
  {
    type: "text",
    text: "It uses semantic search and finds a list of related messages. Now you take these messages and send it to your AI model. This way, you only send the relevant messages to your AI model."
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dbzcsfi3e/image/upload/v1769348493/Gemini_Generated_Image_c04qnpc04qnpc04q_d67gbe.png"
  },
  {
    type: "text",
    text: "By sending only relevant messages, we successfully decreased the usage of limits. Since we are sending only the relevant data, the AI model doesn’t get confused much. Hence, the cost also decreases."
  },
  {
    type: "text",
    text: "This is how a basic AI workflow for an AI chatbot looks. The majority of the AI apps use the same flow, but the complexity would be on a higher level. This is just a foundation. The main goal is to learn how the process works. Once you understand the process, you can always go deeper into every step. I hope atleast some of you learnt something new today."
  }
]

  },
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
