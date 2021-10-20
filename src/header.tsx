import React from "react";
import { Box } from "@grupoboticario/flora-react-box";
import { Heading } from "@grupoboticario/flora-react-heading";

const Header: React.FC = ({ children }) => {
  return (
    <Box
      as="header"
      css={{
        backgroundColor: "$brand-1",
        height: 80,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading level={4}>This is a header -- {children}</Heading>
    </Box>
  );
};

export default Header;
