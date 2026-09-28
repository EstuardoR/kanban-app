import { Box, styled, Typography, type BoxProps, type TypographyProps } from "@mui/material";

interface IColumnStyledProps extends BoxProps {
    $bg?: string
}

export const MainWrapperStyled = styled(Box)(() => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    color: 'black',
}));

export const SidebarStyled = styled(Box)(() => ({
    width: '20vw',
    flexShrink: 0,
}));

export const BoardSectionStyled = styled(Box)(() => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
}));

export const BoardHeaderStyled = styled(Typography)<TypographyProps>(() => ({
    padding: '10px 25px',
    fontWeight: 'bold',
}));

export const ColumnsContainerStyled = styled(Box)(() => ({
    display: 'flex',
    padding: '10px',
    flex: 1,
    gap: '30px',
    minHeight: 0,
}));

export const ColumnStyled = styled(Box)<IColumnStyledProps>(() => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 25px',
    gap: '10px',
    borderRadius:'32px',
    minHeight: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: '#F8FAFC',
}));
