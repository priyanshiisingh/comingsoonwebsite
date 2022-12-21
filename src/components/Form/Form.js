import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

import arrowsvg from "../../images/icon-arrow.svg";

export default function Navbar() {
  return (
    <Box>
      <InputGroup>
        <Input placeholder="mysite" />
        <InputRightElement children={<Button>></Button>} />
      </InputGroup>
    </Box>
  );
}
