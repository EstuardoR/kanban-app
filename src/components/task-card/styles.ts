import { Box, styled, Typography } from "@mui/material";

export const CardTaskContainerStyled = styled(Box)(() => ({
  display: "flex",
  position: 'relative',
  width: "100%",
  border: "1px solid #E2E8F0",
  backgroundColor: "#ffffff",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  borderRadius: "24px",
  padding: "16px",
}));



export const CardTaskTitleStyled = styled(Typography)(() => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  width: "275px",
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: "4px",
}));

export const CardTaskDescriptionStyled = styled(Typography)(() => ({
  fontSize: "0.90rem",
  fontWeight: 400,
}));
