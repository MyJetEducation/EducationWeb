import styled from '@emotion/styled';

interface TitleProps {
  color?: string;
  fontSize?: string;
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase';
  textAlign?: 'left' | 'center' | 'right';
  marginRight?: string;
  marginBottom?: string;
  fontWeight?: 'bold' | 'normal' | number;
}


export const TitleH0 = styled.h1<TitleProps>`
  margin: 0;
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  color: ${(props) => props.color || '#000'};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize || '56px'};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: 60px;
  text-transform: ${(props) => props.textTransform};
`;

export const TitleH1 = styled.h1<TitleProps>`
  margin: 0;
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  color: ${(props) => props.color || '#000'};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize || '40px'};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: 48px;
  text-transform: ${(props) => props.textTransform};
`;

export const TitleH2 = styled.h2<TitleProps>`
  margin: 0;
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  color: ${(props) => props.color || '#000'};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize || '28px'};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: 36px;
  text-transform: ${(props) => props.textTransform};
`;

export const TitleH3 = styled.h3<TitleProps>`
  margin: 0;
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  color: ${(props) => props.color || '#000'};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize || '24px'};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: 32px;
  text-transform: ${(props) => props.textTransform};
`;


export const TitleH5 = styled.h3<TitleProps>`
  margin: 0;
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  color: ${(props) => props.color || '#000'};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: 26px;
  text-transform: ${(props) => props.textTransform};
`;

