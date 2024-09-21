import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SEND_COMMENT } from "../../graphQl/mutations";
import Comments from "./Comments";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { data, loading, error }] = useMutation(SEND_COMMENT);

  const sendHanlder = (e) => {
    e.preventDefault()
    console.log({ name, email, text, slug });
      if (name && email && text) {
        sendComment({variables:{
          text,name,email,slug
        }});
        toast.success("کامنت شما در انتظار تایید می باشد");
        setName("");
        setEmail("");
        setText("");
      } else {
        toast.warn("لطفا تمامی فیلد ها را کامل کنید");
      }
    };

  return (
    <Grid
      display="flex"
      flexDirection="column"
      gap={3}
      padding={3}
      bgcolor="#fff"
      borderRadius={4}
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px" }}
    >
      <Typography fontWeight={600} color="#172554">
        ارسال کامنت
      </Typography>

      <TextField
      value={name}
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="نام کاربری"
        variant="outlined"
      />
      <TextField
      value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic"
        label="ایمیل"
        variant="outlined"
      />
      <TextField
      value={text}
        onChange={(e) => setText(e.target.value)}
        id="outlined-basic"
        label="متن کامنت"
        variant="outlined"
        multiline
        minRows={4}
      />
      {loading ? (
        <Button variant="outlined">
          در حال ارسال...
        </Button>
      ) : (
        <Button onClick={sendHanlder} variant="contained">
          ارسال کامنت
        </Button>
      )}
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
