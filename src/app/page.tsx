import Head from "next/head";
import Image from "next/image";

async function getData(): Promise<Article[]> {
  const res = await fetch("http://localhost:3000/api/articles", {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const articles = await getData();

  return (
    <>
      <Head>
        <title>Clubee - Articles</title>
      </Head>

      <main>
        <div
          style={{
            display: "grid",
            gridGap: "8px",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto))",
          }}
        >
          {articles.map((article) => (
            <div key={article.title}>
              <div style={{ height: 200 }}>
                <Image
                  src={article.thumbnail}
                  width={300}
                  height={300}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: 200,
                  }}
                  alt={article.title}
                />
              </div>
              <h4>{article.title}</h4>
              <p>{article.body}</p>
              <p>{article.authorEmail}</p>
              <p>Published on {article.publicationDate}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
