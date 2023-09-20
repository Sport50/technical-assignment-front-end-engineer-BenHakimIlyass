"use client";

import { TextFieldProps } from "@mui/material";
import { styled } from "@mui/system";

export default function TextField(props: TextFieldProps) {
  return <StyledTextField {...props} />;
}

const StyledTextField = styled(TextField)(
  () => `  
width: 320px;
font-family: IBM Plex Sans, sans-serif;
font-size: 0.875rem;
font-weight: 400;
line-height: 1.5;
padding: 12px;
border-radius: 12px;
color: #24292f;
background: #fff;
border: 1px solid #d0d7de;
box-shadow: 0px 2px 24px #daecff;

&:hover {
  border-color: #3399ff;
}

&:focus {
  border-color: #3399ff;
  box-shadow: 0 0 0 3px #b6daff;
}

// firefox
&:focus-visible {
  outline: 0;
}`
);
