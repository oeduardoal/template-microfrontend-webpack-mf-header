import React from "react";
import { Box } from "@grupoboticario/flora-react-box";

const App: React.FC = ({ children }) => {
  return (
    <Box as="header">
      This is a header <br /> {children}
    </Box>
  );
};

export default App;
