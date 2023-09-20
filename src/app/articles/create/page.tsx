import ArticleForm from "@/components/articleForm";
import Footer from "@/components/footer";
import ResponsiveAppBar from "@/components/header";
import TextArea from "@/components/kit/textArea";

import GlobalStyles from "@/styles/global";
import { Container, Paper, Stack, TextField } from "@mui/material";
import Head from "next/head";

export default async function CreateArticle() {
  return (
    <>
      <Head>
        <title>Clubee - Create a new article</title>
      </Head>

      <GlobalStyles />

      <header>
        <ResponsiveAppBar />
      </header>

      <main>
        <Container>
          <ArticleForm />
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
