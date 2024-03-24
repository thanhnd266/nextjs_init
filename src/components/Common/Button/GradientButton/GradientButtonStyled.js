import styled from "styled-components";

export const GradientButtonStyled = styled.div`
    .MLULNGVQNK {
  background-image: linear-gradient(to right, rgba(42, 208, 61, 0.3), #ffffff);
  padding: 4px;
  border-radius: 8px;
  @media (max-width: 43.75em) {
    width: 100%;
  }
  .RBOSGVWWES {
    flex: 1;
    padding: 0.9rem 1.6rem;
    color: var(--Text-primary, #0b1237);
    font-weight: 700;
    font-size: 1.4rem;
    background: var(
      --Primary,
      linear-gradient(90deg, #2be841 0%, #10e7b3 100%)
    );
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:disabled {
      background: #f7f7f7;
      color: var(--Text-secondary, #959595);
      cursor: auto;
      // border: 1px solid var(--stroke-primary, #DCDCDC);
    }
  }
}

.VDFKHCXTLJ {
  background-image: linear-gradient(
    to right,
    rgba(42, 208, 61, 0.3),
    transparent
  );
  padding: 4px;
  border-radius: 8px;

  .RBOSGVWWES {
    padding: 0.9rem 1.6rem;
    color: var(--Text-primary, #0b1237);
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    background: var(
      --Primary,
      linear-gradient(90deg, #2be841 0%, #10e7b3 100%)
    );
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:disabled {
      background: #f7f7f7;
      color: var(--Text-secondary, #959595);
      cursor: auto;
      // border: 1px solid var(--stroke-primary, #DCDCDC);
    }
  }
}

`;