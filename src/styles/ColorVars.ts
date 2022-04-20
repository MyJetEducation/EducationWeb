import { css } from "@emotion/core";
import ColorTheme from "../constants/ColorTheme";

export const ColorVars = css`
  :root {
    --color-primary:  ${ColorTheme['default'].primary};
    --color-bg-block: ${ColorTheme['default'].bg_block};
    --color-bg-accent: ${ColorTheme['default'].bg_accent};
    --color-text: ${ColorTheme['default'].text};
  }
`;