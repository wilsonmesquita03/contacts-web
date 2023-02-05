import styled, { css } from "styled-components";


export const BackgroundContainer = styled.div`
    min-width: 100vw;
    min-height: 100vh;

    background-color: ${({color}) => color || css`var(--Grey-4)`};
`