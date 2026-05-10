const htmlData = Array.from({ length: 76 }, (_, index) => ({
  id: `topic${index + 1}`,
  topic: "HTML",
  title: `HTML Topic ${index + 1}`,
  desc: "Advanced HTML concepts and real-world implementation techniques.",
  img: `/images/ph${index + 1}.png`,
}));

export default htmlData;