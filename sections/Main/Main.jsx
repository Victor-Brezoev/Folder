import Image from 'next/image';
import { Card } from '../../collections';

import {
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  HeaderMain,
  WrapperMain,
  ContainerMain,
  InnerMain,
  Cards,
} from './elements';

const cardProps1 = {
  //   image: { src: '/img/heroimg.png', alt: '', width: 10, height: 24 },
  title: 'Brief',
  description:
    'Complete brief writing or simply guidance on what to include, we have got you covered.',
};

const cardProps2 = {
  //   image: { src: '/img/heroimg.png', alt: '', width: 1000, height: 1680 },
  title: 'Search',
  description:
    'In-debth agency search covering; criteria matching, door knocking and due-dilligenc evetting.',
};

const cardProps3 = {
  //   image: { src: '/img/heroimg.png', alt: '', width: 1000, height: 1680 },
  title: 'Pitch',
  description:
    'Comprehensive pitch management, including comms, diary management and pitch hosting.',
};

export const Main = ({ image, title, description, ...props }) => {
  return (
    <WrapperMain>
      <ContainerMain>
        <HeaderMain>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </HeaderMain>
        <InnerMain>
          <StyledImageContainer>
            <Image
              layout="responsive"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </StyledImageContainer>
          <Cards>
            <Card {...cardProps1}></Card>
            <Card {...cardProps2}></Card>
            <Card {...cardProps3}></Card>
          </Cards>
        </InnerMain>
      </ContainerMain>
    </WrapperMain>
  );
};
