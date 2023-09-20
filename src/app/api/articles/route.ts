import { NextResponse } from "next/server";
import articles from "../data";

import fs from "fs";

type GetArticlesResponse = Article[];
type CreateArticleResponse = Article;

export function GET() {
  return NextResponse.json<GetArticlesResponse>(articles);
}
// check this https://dev.to/this-is-learning/readwrite-on-local-json-file-with-nextjs-part-51-8gg
export function POST(req: Request) {
  const article = (req.body as unknown) as Article;

  articles.push(article);
  return NextResponse.json<CreateArticleResponse>(article);
}

export const dynamic = "force-dynamic";
