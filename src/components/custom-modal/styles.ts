import styled from 'styled-components'

export const OverlayStyled = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    inset: 0;
    background: rgba(0, 0, 0, 0.63);
`

export const ModalContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    width: 300px;
    height: 400px;
    border-radius: 8px;
    background-color: white;
    color: black;
`