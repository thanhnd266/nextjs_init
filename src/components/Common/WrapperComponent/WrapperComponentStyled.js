import styled from "styled-components";

export const WrapperComponentStyled = styled.div`
    max-width: 124rem;
    margin: 0 auto;

    @media screen and (max-width: 90em) {
        max-width: 100rem;
    }

    @media screen and (max-width: 75em) {
        max-width: 80rem;
    }

    @media screen and (max-width: 56.25em) {
        max-width: 70rem;
    }

    @media screen and (max-width: 56.25em) {
        max-width: 70rem;
    }

    @media screen and (max-width: 48em) {
        max-width: unset;
        margin: 0 2rem;
    }
`;