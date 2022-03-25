import { css } from '@emotion/core';

export const fonts = css`
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy-Regular'),
      url('/public/fonts/Gilroy-Regular.otf') format('opentype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy-Medium'),
      url('/public/fonts/Gilroy-Medium.otf') format('opentype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy-SemiBold'),
      url('/public/fonts/Gilroy-SemiBold.otf') format('opentype');
    font-weight: 600;
  }
`;
