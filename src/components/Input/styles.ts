import styled from "styled-components";

export const IInputController = styled.div`
    width: 100%;

    overflow: hidden;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        width: 100%;

        position: relative;
    }

    input {
        padding-top: 0.5rem;
        padding-left: 0.5rem;
        width: 100%;
        height: 3rem;


        background-color: rgba(0, 0, 0, 0.20);
        
        border: none;
        color: white;
        font-size: 1rem;
    }

    input:active, input:focus {
        border: none;
        outline: none;
    }

    label {
        left: 8px;
        top: 8px;
        position: absolute;
        font-size: 0.8rem;
        color: var(--Grey-1);
    }

    .span--error {
        color: var(--Negative);
    }

    .span--helper {
        color: var(--Grey-1)
    }

    button {
        cursor: pointer;
        right: 8px;
        top: 14px;
        position: absolute;
        border: none;
        width: fit-content;
        height: fit-content;
        background-color: transparent;
        color: white;
    }
`