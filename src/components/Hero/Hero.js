import {
  //   Button,
  Flex,
  //   Heading,
  Image,
  Stack,
  Text,
  //   useBreakpointValue,
} from "@chakra-ui/react";

import "./hero.css";
import heroImg from "../../images/hero-desktop.jpg";
import heroMobImg from "../../images/hero-mobile.jpg";
import logosvg from "../../images/logo.svg";
import Form from "../Form/Form";

export default function Hero() {
  return (
    <Stack direction={{ base: "column-reverse", md: "row" }}>
      <Flex
        p={8}
        flex={1.6}
        align={"start"}
        justify={"center"}
        className="mainStack">
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Image
            alt={"Login Image"}
            src={logosvg}
            maxW={250}
            mb={{ base: "none", md: "100px" }}
            display={{ base: "none", md: "flex" }}
          />
          <Text className="context">
            <span className="wefont">
              We're
              <br />
            </span>
            <span className="csfont">
              Coming
              <br /> Soon
            </span>
          </Text>
          <Text className="parafont">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </Text>
          <Form />
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          src={heroImg}
          display={{ base: "none", md: "flex" }}
          w="100%"
        />
        <Image
          alt={"Login Image"}
          src={heroMobImg}
          display={{ base: "flex", md: "none" }}
          w="100%"
        />
      </Flex>
    </Stack>
  );
}
