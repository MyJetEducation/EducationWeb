import styled from '@emotion/styled';

interface AuthFormProps {
  marginBottom?: string;
}
export const AuthForm = styled.form<AuthFormProps>`
  display: flex;
  flex-direction: column;
  width: 340px;
  margin: 0;
  padding: 0;
  margin-bottom: ${(props) => props.marginBottom};
`;
