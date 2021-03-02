import React from "react";
import "./App.scss";

import {
  Button as ChakraButton,
  Heading as ChakraHeading,
} from "@chakra-ui/react";

import Heading from "fe-ui/v2/Heading";
import ButtonV2 from "fe-ui/v2/Button";
import ThemeProvider from "fe-ui/v2/ThemeProvider";
import ThemeProvider2 from "@spothero/chakra/v2/ThemeProvider";
import Button from "@spothero/chakra/v1/Button";

const GridBox = (props) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      padding: "1rem",
      border: "1px solid #ccc",
    }}
    {...props}
  />
);

function App() {
  // console.log(SHTheme);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(2, 50vh)",
          gridTemplateColumns: "repeat(2, 50vw)",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <GridBox>
          <ChakraHeading textAlign="center" as="h1">
            Chakra Default
          </ChakraHeading>
          <ChakraButton>Some Button</ChakraButton>
        </GridBox>
        <GridBox>
          <h1>Normal H1 Tag</h1>
          <Button color="primary">FE UI V1</Button>
        </GridBox>
        <ThemeProvider>
          <GridBox>
            <Heading textAlign="center" as="h1" styledAs="h1">
              SpotheroTheme Bare Repo
            </Heading>
            <ButtonV2 variant="primary">Hello</ButtonV2>
          </GridBox>
        </ThemeProvider>
        <ThemeProvider2>
          <GridBox>
            <Heading textAlign="center" as="h1" styledAs="h1">
              SpotheroTheme FE-UI V2
            </Heading>
            <ButtonV2 variant="primary">Hello</ButtonV2>
          </GridBox>
        </ThemeProvider2>
      </div>
    </div>
  );
}

export default App;
