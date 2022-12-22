import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./form.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;
// `${process.env.REACT_APP_BACKEND}api/user-emails`

export default function Navbar() {
  const form = useRef();
  const [newEmail, setNewEmail] = useState("");

  function addemail(e) {
    e.preventDefault();
    let item = newEmail;
    let body = {
      data: {
        emailId: item,
      },
    };

    try {
      fetch(`${process.env.REACT_APP_BACKEND}api/user-emails`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      }).then(() => {
        setNewEmail("");
      });
    } catch (error) {
      alert(error);
    }
    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
          alert("email not sent");
        }
      );
  }

  return (
    <form onSubmit={addemail} ref={form}>
      <InputGroup>
        <Input
          placeholder="Email Address"
          className="inputgrp"
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.currentTarget.value)}
          name="user_email"
        />
        <InputRightElement
          children={
            <IconButton
              aria-label="Send Email"
              icon={<ChevronRightIcon />}
              className="iconbtn"
              type="submit"
            />
          }
          className="iconre"
          minW={{ base: "70px", md: "90px" }}
        />
      </InputGroup>
    </form>
  );
}
