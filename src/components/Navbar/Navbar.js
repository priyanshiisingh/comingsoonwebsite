import { Box, Image } from "@chakra-ui/react";
import logosvg from "../../images/logo.svg";

export default function Navbar() {
  return (
    <Box p={4} display={{ base: "flex", md: "none" }}>
      <Image
        alt={"Login Image"}
        src={logosvg}
        maxW={250}
        mb={{ base: "none", md: "100px" }}
      />
    </Box>
  );
}
