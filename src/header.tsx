import React from "react";
import { Box } from "@grupoboticario/flora-react-box";
import { Container } from "@grupoboticario/flora-react-container";

const Header: React.FC = ({ children }) => {
  return (
    <Box
      as="header"
      css={{
        backgroundColor: "$brand-1",
        height: 80,
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        size={{ "@initial": "large" }}
        css={{ display: "flex", justifyContent: "flex-end" }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Header;
