import { css } from '@emotion/core';
import ColorTheme from '../constants/ColorTheme';

export const ColorVars = css`
  :root {
    --color-primary:  ${ColorTheme['default'].primary};
    --color-bg-block: ${ColorTheme['default'].bg_block};
    --color-bg-accent: ${ColorTheme['default'].bg_accent};
    --color-input-border: ${ColorTheme['default'].input_border};
    --color-text: ${ColorTheme['default'].text};
    --color-text-secondary-light: ${ColorTheme['default'].text_secondary_light};
    --color-danger: ${ColorTheme['default'].danger};
    --color-accent: ${ColorTheme['default'].accent};
  }
`;
