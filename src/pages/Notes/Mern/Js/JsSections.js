// src/data/htmlSections.js
const generateImages = (folder, total) =>
  Array.from(
    { length: total },
    (_, index) => `/Images/${folder}/ph${index + 1}.png`
  );

const JsSections = [
  {
    id: "intro",
    title: "Study of JavaScript",
    description: "JavaScript learning notes",

    images: generateImages("js", 300),
  },

  {
    id: "coming-soon",
    title: "Coming Soon as possible",
    description: "Coming Soon",
    images: [],
  },

  {
    id: "finish",
    title: "🎉 Congratulations! 🎉",

    description:
      "You've completed the HTML journey. You’re now ready to build beautiful web pages and step into the world of web development.",

    isFinish: true,

    buttonText: "Start Nodejs Now 🚀",

    buttonLink: "/studymaterial",
  },
];

export default JsSections;