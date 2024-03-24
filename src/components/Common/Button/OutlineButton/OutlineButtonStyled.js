import styled from "styled-components";


export const OutlineButtonStyled = styled.div`
    @media (max-width: 43.75em) {
        width: 100%;
    }

    .outline-button {
        flex: 1;
        width: 100%;
        height: 100%;
        padding: 0.9rem 1.6rem;
        border-radius: 8px;
        color: ${(props) => props.color || "#08133D"};
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.2rem;
        background-color: transparent;
        border: 1px solid ${(props) => props.$borderColor || "#08133D"};
        cursor: pointer;
    }
    .outline-button-gradient {
        background: 
        linear-gradient(#1BBE72, #1BBE72) padding-box,
        linear-gradient(60deg, #2BE841, #10E7B3) border-box;
        color: #fff;
        padding: 9px 16px;
        border: 1px solid transparent;
        border-radius: 8px;
        display: inline-block;
        font-size: 1.4rem;
        cursor: pointer;
    }
    .outline-button-disabled {
        border: 1px solid #d7d7d7;
        color: #b1b1b1;
        cursor: unset;
    }
`;