import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

const Preloader = () => {
  return (
    <PreloaderWrap>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </PreloaderWrap>
  );
};

export default Preloader;

const animBar1 = keyframes`
  0% { top: 12.299999999999997px; height: 75.4px }
  50% { top: 21px; height: 58px }
  100% { top: 21px; height: 58px }
`;

const animBar2 = keyframes`
  0% { top: 14.474999999999994px; height: 71.05000000000001px }
  50% { top: 21px; height: 58px }
  100% { top: 21px; height: 58px }
`;

const animBar3 = keyframes`
  0% { top: 16.650000000000006px; height: 66.69999999999999px }
  50% { top: 21px; height: 58px }
  100% { top: 21px; height: 58px }
`;

const PreloaderWrap = styled.div`
  width: 68px;
  height: 68px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
  & > div {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.68);
    backface-visibility: hidden;
    transform-origin: 0 0;

    div { 
      position: absolute; 
      width: 15px; 
      box-sizing: content-box;

      &:nth-of-type(1) {
        left: 17.5px;
        background: #757575;
        animation: ${animBar1} 1s cubic-bezier(0,0.5,0.5,1) infinite;
        animation-delay: -0.2s
      }
      &:nth-of-type(2) {
        left: 42.5px;
        background: #5a5a5a;
        animation: ${animBar2} 1s cubic-bezier(0,0.5,0.5,1) infinite;
        animation-delay: -0.1s
      }
      &:nth-of-type(3) {
        left: 67.5px;
        background: #414141;
        animation: ${animBar3} 1s cubic-bezier(0,0.5,0.5,1) infinite;
        animation-delay: undefineds
      }
    }

    
  }
`;
