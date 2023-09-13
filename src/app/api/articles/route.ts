import { NextResponse } from "next/server";

type GetArticlesResponse = Article[];

export function GET() {
  return NextResponse.json<GetArticlesResponse>(articles);
}

const articles = [
  {
    title: "The Evolution of Tennis Racquets",
    body:
      "Over the years, tennis racquets have undergone significant changes in design and materials. From the wooden racquets of the past to the modern graphite composites, this article explores the fascinating evolution of tennis racquets and how these changes have impacted the game.",
    thumbnail: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVubmlzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    authorEmail: "tennisfan@example.com",
    publicationDate: "2023-03-15T08:30:00.000Z",
  },
  {
    title: "The Science Behind Running Shoe Technology",
    body:
      "Running shoe technology has come a long way in optimizing comfort and performance for runners. This article delves into the science behind cushioning, arch support, and materials used in running shoe construction, shedding light on how these innovations can enhance your running experience.",
    thumbnail: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    authorEmail: "runnersworld@example.com",
    publicationDate: "2023-03-12T11:15:00.000Z",
  },
  {
    title: "The Rise of Esports: Competitive Gaming Goes Mainstream",
    body:
      "Esports, or competitive video gaming, has exploded in popularity worldwide. In this article, we examine the rapid growth of esports, its massive fan base, and the professional players who have become global sensations, blurring the line between sports and gaming.",
    thumbnail: "https://images.unsplash.com/photo-1636487658547-c05ee4cdc1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXNwb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    authorEmail: "esportsenthusiast@example.com",
    publicationDate: "2023-03-10T14:45:00.000Z",
  },
  {
    title: "The Impact of Sports Psychology on Athlete Performance",
    body:
      "Sports psychology plays a crucial role in the mental preparation of athletes. This article delves into the strategies and techniques used by sports psychologists to help athletes overcome mental obstacles, boost confidence, and achieve peak performance in high-pressure situations.",
    thumbnail: "https://images.unsplash.com/photo-1597484389225-c68a9f0fa106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyYWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60https://example.com/sports-psychology.jpg",
    authorEmail: "sportspsychologist@example.com",
    publicationDate: "2023-03-08T09:00:00.000Z",
  },
  {
    title: "The Olympic Legacy: How Host Cities Benefit from the Games",
    body:
      "Hosting the Olympic Games is a significant undertaking, but it also brings long-term benefits to host cities. From infrastructure development to increased tourism, this article explores the positive legacies left by the Olympics and how they shape the future of these cities.",
    thumbnail: "https://images.unsplash.com/photo-1555848960-c881e30379c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2x5bXBpYyUyMGdhbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    authorEmail: "olympicsenthusiast@example.com",
    publicationDate: "2023-03-05T16:20:00.000Z",
  },
  {
    title: "The Art of Sports Photography: Capturing the Perfect Moment",
    body:
      "Sports photography is a dynamic field that requires skill, timing, and creativity. This article showcases the artistry behind capturing iconic sports moments, from the thrill of victory to the agony of defeat, through the lens of talented photographers.",
    thumbnail: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    authorEmail: "sportsphotographer@example.com",
    publicationDate: "2023-03-03T13:10:00.000Z",
  },
];
