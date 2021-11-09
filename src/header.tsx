import React from "react";
import { Box, Container } from "@grupoboticario/flora-react";

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
      <Container size="large">{children}</Container>
    </Box>
  );
};

export default Header;
