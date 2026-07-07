import { Box, styled, Typography } from "@mui/material";


export const CardTaskContainerStyled = styled(Box)(() => ({
    width: "90%",
    display: "flex",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: "10px",
    padding: "10px",
}));

export const CardTaskTitleStyled = styled(Typography)(() => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
}));

export const CardTaskDescriptionStyled = styled(Typography)(() => ({
    fontSize: "1rem",
    marginBottom: "10px",
}));