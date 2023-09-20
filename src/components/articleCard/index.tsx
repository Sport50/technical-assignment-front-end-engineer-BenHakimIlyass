"use client";

import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import Image from "next/image";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card>
      <div style={{ height: 300 }}>
        <Image
          src={article.thumbnail}
          width={300}
          height={300}
          style={{
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 300,
          }}
          alt={article.title}
        />
      </div>
      <Text>
        Published on {new Date(article.publicationDate).toDateString()}
      </Text>
      <Title>{article.title}</Title>
      <Text>{article.body}</Text>
      <Stack direction="row" justifyContent="space-between">
        <Text>{article.author.email}</Text>
        <Button
          variant="text"
          endIcon={<ButtonIcon size={20} />}
          style={{ textTransform: "none", color: "#47A992" }}
        >
          Read more
        </Button>
      </Stack>
    </Card>
  );
};

const Card = styled.div({
  position: "relative",
  outline: 0,
  WebkitTapHighlightColor: "transparent",
  display: "block",
  textDecoration: "none",
  color: "rgb(0, 0, 0)",
  boxSizing: "border-box",
  borderRadius: "0.6rem",
  overflow: "hidden",
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 0.0625rem 0.1875rem, rgba(0, 0, 0, 0.05) 0px 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0px 0.4375rem 0.4375rem -0.3125rem",
  backgroundColor: "rgb(255, 255, 255)",
  padding: "1.5rem",
});

const Title = styled.h3({
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  WebkitTapHighlightColor: "transparent",
  fontSize: "1.125rem",
  lineHeight: 1.55,
  textDecoration: "none",
  fontWeight: 400,
  marginTop: "1rem",
});

const Text = styled.p({
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  WebkitTapHighlightColor: "transparent",
  color: "rgb(134, 142, 150)",
  fontSize: "0.875rem",
  lineHeight: 1.55,
  textDecoration: "none",
  marginTop: "0.625rem",
});

const ButtonIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="#47A992" />
    <path
      d="M8.05957 15.8956H14.3282H16.1193V12.9851L22.164 16.7911H8.05957V15.8956Z"
      fill="white"
    />
  </svg>
);

export default ArticleCard;
