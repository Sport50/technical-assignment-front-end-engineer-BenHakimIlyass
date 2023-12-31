import { NextResponse } from "next/server";
import articlesData from "../data";

type GetArticlesResponse = Article[];
type CreateArticleResponse = Article[];

let articles = [...articlesData];

export function GET() {
  console.log(articles);
  return NextResponse.json<GetArticlesResponse>(articles);
}
// check this https://dev.to/this-is-learning/readwrite-on-local-json-file-with-nextjs-part-51-8gg
export async function POST(req: Request) {
  const article = await req.json();

  const newArticles = [
    {
      ...article,
      publicationDate: new Date().toString(),
      author: {
        email: "email@clubee.com",
        name: "John",
      },
    },
    ...articles,
  ];

  /** 
   * here we update the articles table in the db,
   * as I don't have any db connected so it is not going to be storing new articles 
   * */

  return NextResponse.json<CreateArticleResponse>(newArticles);
}

export const dynamic = "force-dynamic";
