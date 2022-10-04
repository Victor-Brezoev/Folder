import styled from 'styled-components';

export const CardMain = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
  margin-bottom: 14px;
  text-align: start;
  padding: 10px;
  border-radius: 6px;
  &:hover {
    box-shadow: inset 0px 0px 0px 5px lightblue;
    cursor: pointer;
  }
  &:nth-child(1) {
    max-width: 380px;
  }
  &:nth-child(2) {
    max-width: 410px;
  }
  &:nth-child(3) {
    max-width: 440px;
  }
`;

export const CardInner = styled(({ ...props }) => <div {...props} />)`
  // display: block;
`;

export const Cardbody = styled(({ ...props }) => <div {...props} />)`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
`;

export const CardMedia = styled(({ ...props }) => <div {...props} />)`
  width: 190px;
  margin-right: 3px;
`;
export const CardTitle = styled(({ ...props }) => <div {...props} />)`
  font-weight: 700;
  font-size: 20px;
  font-family: Poppins;
  line-height: 28px;
  letter-spacing: 0.55px;
`;
