import React from "react";
import "./App.scss";

import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@spothero/ui";
import { Button as ButtonV1, ThemeProvider } from "@spothero/chakra";

function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <div>
          <h2 style={{ textAlign: "center" }}>Spothero UI</h2>
          <Button color="primary">Hello</Button>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Spothero UI V2</h2>
          <ButtonV1 color="primary">Hello</ButtonV1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
