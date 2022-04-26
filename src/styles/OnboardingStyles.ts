import { css } from '@emotion/core';

export const OBStyles = css`
  .ob_item {
    &.active_hint {
      position: relative;
      z-index: 11;
      &:before {
        content: '';
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 24px);
        height: calc(100% + 24px);
        z-index: -1;
      }

      &.hint_1,
      &.hint_5,
      &.hint_6,
      &.hint_9 {
        &:before {
          border-radius: 50%;
        }
      }

      &.hint_2,
      &.hint_3,
      &.hint_4,
      &.hint_7,
      &.hint_8 {
        &:before {
          border-radius: 40px;
        }
      }

      &.hint_4 {
        &:before {
          height: calc(100% - 4px);
          top: calc(50% - 15px);
        }
      }

      &.hint_5,
      &.hint_6 {
        &:before {
          width: 72px;
          height: 72px;
        }
      }

      &.hint_9 {
        &:before {
          width: 108px;
          height: 108px;
        }
      }
    }
  }
`;
