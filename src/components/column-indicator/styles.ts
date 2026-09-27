import { Box, IconButton, styled, Typography, type BoxProps } from "@mui/material";

interface IColumnIndicatorProps extends BoxProps {
    $backgroundColor?: string
}

export const ColumnIndicatorWrapperStyled = styled(Box, {
    shouldForwardProp: (prop) => prop !== '$backgroundColor'
})<IColumnIndicatorProps>(({ $backgroundColor }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: '10px',
    backgroundColor: $backgroundColor,
    borderRadius: '25px',
    padding: '10px',
}));

export const CounterIndicatorStyled = styled(Box ,{
    shouldForwardProp:(prop) => prop !== '$backgroundColor'
})<IColumnIndicatorProps>(({$backgroundColor}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    padding: '2px',
    fontWeight: 500,
    color: $backgroundColor,
    backgroundColor: '#ffffff'
}));

export const InfoWrapperStyled = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: '5px'
}));

export const IconButtonStyled = styled(IconButton)(() => ({
    position:'absolute',
    right: '10px',
    color: 'white',
}));

export const ColumnTitleStyled = styled(Typography)(() => ({
    fontWeight: 'bold',
    color: '#ffffff',
    justifyContent:'center',
    alignContent:'center'
}));