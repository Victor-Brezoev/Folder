import styled from 'styled-components';
import { SectionBigHeading, SectionSubheading } from '~/components';

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
`;

export const WrapperMain = styled(({ ...props }) => <div {...props} />)`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ContainerMain = styled(({ ...props }) => <div {...props} />)`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1280px;
`;

export const HeaderMain = styled(({ ...props }) => <div {...props} />)`
  text-align: center;
  margin-bottom: 50px;
`;

export const InnerMain = styled(({ ...props }) => <div {...props} />)`
  background: url('/img/background.png') right center/cover no-repeat
    content-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Cards = styled(({ ...props }) => <div {...props} />)`
  color: black;
`;
