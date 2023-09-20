"use client";

import { Button, Paper, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";

const useStyles = makeStyles(() => ({
  textarea: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "purple",
  },
}));

import * as Yup from "yup";
import Loading from "../loading";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("This field is required"),
  thumbnail: Yup.string().required("This field is required"),
  body: Yup.string().required("This field is required"),
});

const ArticleForm = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      thumbnail: "",
      body: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      postData("http://localhost:3000/api/articles", values)
        .then((data) => setLoading(false))
        .catch(() => setLoading(false));
    },
  });

  return (
    <>
      <Loading show={loading} />
      <Paper style={{ padding: 10, marginTop: 100 }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <TextField
              required
              label="Title"
              placeholder="Enter the title"
              {...formik.getFieldProps("title")}
              error={formik.touched.title && Boolean(formik.errors.title)}
            />
            <TextField
              required
              label="Thumbnail"
              placeholder="Enter a picture link"
              {...formik.getFieldProps("thumbnail")}
              error={
                formik.touched.thumbnail && Boolean(formik.errors.thumbnail)
              }
            />
            <TextField
              required
              label="Body"
              placeholder="Enter the title"
              className={classes.textarea}
              multiline
              rows={10}
              variant="outlined"
              {...formik.getFieldProps("body")}
              error={formik.touched.body && Boolean(formik.errors.body)}
            />
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
};

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default ArticleForm;
