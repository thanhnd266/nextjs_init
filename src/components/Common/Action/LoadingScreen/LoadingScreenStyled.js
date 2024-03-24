/* LoadingScreen.css */

import styled from "styled-components";

export const LoadingScreenStyled = styled.div`
  .loading-screen {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.8);
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 10;
    }
    
    .loading-screen.visible {
      display: flex;
    }
    
    .loading-spinner {
      border: 8px solid #f3f3f3;
      border-top: 8px solid #2BE841;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin-bottom: 12px;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

`;

  