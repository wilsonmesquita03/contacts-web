import styled from "styled-components";

export const FormContainer = styled.form`
    color: var(--Grey-0);

    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;


    width: 90vw;
    max-width: 420px;

    padding: 1rem;

    box-sizing: border-box;

    background-color: var(--Grey-3);

    h1 {
        font-size: 1.25rem;
        padding: 0.75rem;
        color: var(--Grey-0);
    }

    p {
        font-size: 0.85rem;
    }
`