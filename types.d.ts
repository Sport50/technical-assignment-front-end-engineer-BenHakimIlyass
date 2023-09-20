declare interface Article {
  id: string;
  thumbnail: string;
  title: string;
  body: string;
  author: { email: string; name: string };
  publicationDate: string;
}

declare module "react-useheadroom";
