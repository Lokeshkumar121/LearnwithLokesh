// src/data/htmlSections.js

const htmlSections = [
  {
    id: "intro",
    title: "Study of HTML5",
    description:
      "Introduction to HTML, tags, webpage structure, and basic HTML elements.",
    images: [
      "/Images/Html/ph1.png",
      "/Images/Html/ph2.png",
      "/Images/Html/ph3.png",
      "/Images/Html/ph4.png",
      "/Images/Html/ph5.png",
    ],
  },

  {
    id: "print",
    title: "Print Hello World",
    description:
      "HTML files run on local machines. Learn how to print text on webpages.",
    images: ["/Images/Html/ph6.png"],
  },

  {
    id: "paragraph",
    title: "Paragraph Tag",
    description:
      "Learn how to create paragraphs using the paragraph tag in HTML.",
    images: ["/Images/Html/ph7.png"],
  },

  {
    id: "headings",
    title: "Heading Tags",
    description:
      "Learn about heading tags from h1 to h6 and their importance.",
    images: [
      "/Images/Html/ph8.png",
      "/Images/Html/ph9.png",
    ],
  },

  {
    id: "boiler",
    title: "What is Boilerplate?",
    description:
      "Boilerplate is the basic HTML structure required for every webpage.",
    images: ["/Images/Html/ph10.png"],
  },

  {
    id: "code",
    title: "Boilerplate Code",
    description:
      "Understand the complete structure of an HTML document.",
    images: ["/Images/Html/ph11.png"],

    code: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`,
  },

  {
    id: "list",
    title: "HTML Lists",
    description:
      "Ordered lists, unordered lists, and definition lists in HTML.",
    images: [
      "/Images/Html/ph12.png",
      "/Images/Html/ph13.png",
      "/Images/Html/ph14.png",
      "/Images/Html/ph16.png",
      "/Images/Html/ph17.png",
    ],
  },

  {
    id: "Attribute",
    title: "HTML Attributes",
    description:
      "Attributes provide additional information about HTML elements.",
    images: ["/Images/Html/ph15.png"],
  },

  {
    id: "link",
    title: "Anchor Element",
    description:
      "Learn how to create hyperlinks using anchor tags.",
    images: [
      "/Images/Html/ph18.png",
      "/Images/Html/ph19.png",
      "/Images/Html/ph20.png",
    ],
  },

  {
    id: "path",
    title: "Paths in HTML",
    description:
      "Relative paths and absolute paths used in HTML documents.",
    images: [
      "/Images/Html/ph21.png",
      "/Images/Html/ph22.png",
    ],
  },

  {
    id: "img",
    title: "Image Element",
    description:
      "Learn how to display images using the img tag.",
    images: [
      "/Images/Html/ph23.png",
      "/Images/Html/ph24.png",
    ],
  },

  {
    id: "ptr2",
    title: "Practice Question 2",
    description:
      "Practice questions related to image and path elements.",
    images: ["/Images/Html/ph25.png"],
  },

  {
    id: "br",
    title: "BR Tag",
    description:
      "Line breaks using the br tag.",
    images: ["/Images/Html/ph26.png"],
  },

  {
    id: "more",
    title: "Text Formatting Tags",
    description:
      "Bold, italic, underline, and other formatting tags.",
    images: ["/Images/Html/ph27.png"],
  },

  {
    id: "comments",
    title: "Comments in HTML",
    description:
      "Learn how to write comments inside HTML code.",
    images: ["/Images/Html/ph28.png"],
  },

  {
    id: "html",
    title: "Is HTML Case Sensitive?",
    description:
      "Understanding case sensitivity in HTML.",
    images: ["/Images/Html/ph29.png"],
  },

  {
    id: "ques3",
    title: "Practice Question 3",
    description:
      "Practice question related to HTML basics.",
    images: ["/Images/Html/ph30.png"],
  },

  {
    id: "inline",
    title: "Inline vs Block Elements",
    description:
      "Difference between inline and block-level elements.",
    images: [
      "/Images/Html/ph31.png",
      "/Images/Html/ph32.png",
      "/Images/Html/ph33.png",
    ],
  },

  {
    id: "div",
    title: "Div Element",
    description:
      "Container element used for grouping HTML content.",
    images: ["/Images/Html/ph34.png"],
  },

  {
    id: "span",
    title: "Span Element",
    description:
      "Inline container element used for styling text.",
    images: ["/Images/Html/ph35.png"],
  },

  {
    id: "hr",
    title: "HR Tag",
    description:
      "Horizontal line element in HTML.",
    images: ["/Images/Html/ph36.png"],
  },

  {
    id: "sub",
    title: "Sub and Sup Tags",
    description:
      "Subscript and superscript tags in HTML.",
    images: ["/Images/Html/ph37.png"],
  },

  {
    id: "ques4",
    title: "Practice Question 4",
    description:
      "Practice question for formatting tags.",
    images: ["/Images/Html/ph38.png"],
  },

  {
    id: "semantic",
    title: "Semantic HTML",
    description:
      "Semantic tags improve readability and SEO.",
    images: [
      "/Images/Html/ph39.png",
      "/Images/Html/ph40.png",
      "/Images/Html/ph41.png",
      "/Images/Html/ph42.png",
      "/Images/Html/ph43.png",
    ],
  },

  {
    id: "ques5",
    title: "Practice Question 5",
    description:
      "Practice question related to semantic tags.",
    images: ["/Images/Html/ph44.png"],
  },

  {
    id: "Htmlenti",
    title: "HTML Entities",
    description:
      "Special characters and entities used in HTML.",
    images: [
      "/Images/Html/ph45.png",
      "/Images/Html/ph46.png",
    ],
  },

  {
    id: "ques6",
    title: "Practice Question 6",
    description:
      "Practice questions on HTML entities.",
    images: ["/Images/Html/ph47.png"],
  },

  {
    id: "Html5",
    title: "HTML5 Features",
    description:
      "Introduction to HTML5 features and APIs.",
    images: [
      "/Images/Html/ph48.png",
      "/Images/Html/ph49.png",
      "/Images/Html/ph50.png",
    ],
  },

  {
    id: "table",
    title: "HTML Tables",
    description:
      "Learn table structure, rows, columns, and table formatting.",
    images: [
      "/Images/Html/ph51.png",
      "/Images/Html/ph52.png",
      "/Images/Html/ph53.png",
      "/Images/Html/ph54.png",
      "/Images/Html/ph55.png",
      "/Images/Html/ph56.png",
    ],
  },

  {
    id: "ques7",
    title: "Practice Question 7",
    description:
      "Practice questions related to tables.",
    images: ["/Images/Html/ph57.png"],
  },

  {
    id: "form",
    title: "HTML Forms",
    description:
      "Learn forms, input fields, buttons, labels, and validations.",
    images: [
      "/Images/Html/ph58.png",
      "/Images/Html/ph59.png",
      "/Images/Html/ph60.png",
      "/Images/Html/ph61.png",
      "/Images/Html/ph62.png",
      "/Images/Html/ph63.png",
      "/Images/Html/ph64.png",
      "/Images/Html/ph65.png",
      "/Images/Html/ph66.png",
      "/Images/Html/ph67.png",
      "/Images/Html/ph68.png",
      "/Images/Html/ph69.png",
      "/Images/Html/ph70.png",
      "/Images/Html/ph71.png",
      "/Images/Html/ph72.png",
      "/Images/Html/ph73.png",
      "/Images/Html/ph74.png",
      "/Images/Html/ph75.png",
      "/Images/Html/ph76.png",
    ],
  },

  {
    id: "finish",
    title: "🎉 Congratulations! 🎉",

    description:
      "You've completed the HTML journey. You’re now ready to build beautiful web pages and step into the world of web development.",

    isFinish: true,

    buttonText: "Start CSS Now 🚀",

    buttonLink: "/studymaterial",
  },
];

export default htmlSections;