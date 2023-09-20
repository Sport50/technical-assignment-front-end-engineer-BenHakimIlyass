import ArticleCard from "@/components/articleCard";
import Footer from "@/components/footer";
import ResponsiveAppBar from "@/components/header";
import Hero from "@/components/hero";
import GlobalStyles from "@/styles/global";
import { Button, Container, Grid } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

async function getData(): Promise<Article[]> {
  const res = await fetch("http://localhost:3000/api/articles", {
    next: { revalidate: 1 },
    // cache: "no-store",
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

      <GlobalStyles />

      <header>
        <ResponsiveAppBar />
      </header>

      <main>
        <Hero />
        <Container>
          <Grid container spacing={2} mt={20}>
            {articles.map((article) => (
              <Grid item md={6} key={article.title}>
                <ArticleCard article={article} />
              </Grid>
            ))}
          </Grid>
          <Link href="/articles/create">
            <Button
              variant="contained"
              style={{ position: "fixed", bottom: 20, right: 40 }}
            >
              New article
            </Button>
          </Link>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
