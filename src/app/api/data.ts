const articles = [
  {
    title: "Cosmic Voyages",
    body:
      "Embark on interstellar adventures and learn about space exploration, missions, and cosmic mysteries.",
    thumbnail:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: {
      email: "tennisfan@clubee.com",
      name: "John Moe",
    },
    publicationDate: "2023-03-15T08:30:00.000Z",
  },
  {
    title: "The Science Behind Running Shoe Technology",
    body:
      "Running shoe technology has come a long way in optimizing comfort and performance for runners. This article delves into the science behind cushioning, arch support, and materials used in running shoe construction, shedding light on how these innovations can enhance your running experience.",
    thumbnail:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    author: {
      email: "runnersworld@clubee.com",
      name: "Alex Tores",
    },
    publicationDate: "2023-03-12T11:15:00.000Z",
  },
  {
    title: "Historical Chronicles",
    body:
      "Journey through time and discover intriguing stories and forgotten chapters of world history.",
    thumbnail:
      "https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: {
      email: "esportsenthusiast@clubee.com",
      name: "Dino Benoiz",
    },
    publicationDate: "2023-03-10T14:45:00.000Z",
  },
  {
    title: "Climate Chronicles",
    body:
      "Delve into the complexities of climate change, environmental conservation, and sustainable practices.",
    thumbnail:
      "https://images.unsplash.com/photo-1616164942025-f0f6edbc31f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    author: {
      email: "sportspsychologist@clubee.com",
      name: "Vladimir Xik",
    },
    publicationDate: "2023-03-08T09:00:00.000Z",
  },
  {
    title: "Stellar Insights",
    body:
      "Explore the wonders of the universe and the latest discoveries about stars, galaxies, and celestial phenomena.",
    thumbnail:
      "https://images.unsplash.com/photo-1640796433065-f423a9d9a5fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    author: {
      email: "olympicsenthusiast@clubee.com",
      name: "Ilyass Ben Hakim",
    },
    publicationDate: "2023-03-05T16:20:00.000Z",
  },
  {
    title: "Tech Trends",
    body:
      "Stay updated on the latest in technology, gadgets, and innovations shaping the future of our digital world.",
    thumbnail:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    author: {
      email: "sportsphotographer@clubee.com",
      name: "Badr Bannoun",
    },
    publicationDate: "2023-03-03T13:10:00.000Z",
  },
];

const makeId = () =>
  Math.random()
    .toString(36)
    .substring(2, articles.length + 2);

export default articles.map((article) => ({
  ...article,
  id: makeId(),
}));
