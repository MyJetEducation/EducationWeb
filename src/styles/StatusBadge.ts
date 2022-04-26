import styled from '@emotion/styled';

interface StatusBadgeProps {}

export const StatusBadge = styled.span<StatusBadgeProps>`
  display: inline-block;
  width: max-content;
  background-color: #a8b0ba;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  padding: 2px 8px;
  border-radius: 4px;
`;
