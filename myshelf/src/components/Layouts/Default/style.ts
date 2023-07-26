import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyle = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    letter-spacing: 1px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
