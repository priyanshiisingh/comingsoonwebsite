import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./form.css";

export default function Navbar() {
  return (
    <Box>
      <InputGroup>
        <Input placeholder="Email Address" className="inputgrp" type="email" />
        <InputRightElement
          children={
            <IconButton
              aria-label="Send Email"
              icon={<ChevronRightIcon />}
              className="iconbtn"
              onClick={() => alert("click!")}
              type="submit"
            />
          }
          className="iconre"
          minW={{ base: "70px", md: "90px" }}
        />
      </InputGroup>
    </Box>
  );
}
