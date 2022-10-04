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

const cardProps = [
  {
    image: { src: '/img/heroimg.png', alt: '', width: 50, height: 70 },
    title: 'Brief',
    description:
      'Complete brief writing or simply guidance on what to include, we have got you covered.'
        .split('brief writing or')
        .map((description, index) => (
          <>
            {index !== 0 && <b>brief writing or simply guidance</b>}
            {description}
          </>
        )),
  },
  {
    image: { src: '/img/heroimg.png', alt: '', width: 50, height: 70 },
    title: 'Search',
    description:
      'In-debth agency search covering; criteria matching, door knocking and due-dilligenc evetting.'
        .split('criteria matching')
        .map((description, index) => (
          <>
            {index !== 0 && <b>criteria matching</b>}
            {description}
          </>
        )),
  },
  {
    image: { src: '/img/heroimg.png', alt: '', width: 50, height: 70 },
    title: 'Pitch',
    description:
      'Comprehensive pitch management, including comms, diary management and pitch hosting.'
        .split('pitch management')
        .map((description, index) => (
          <>
            {index !== 0 && <b>pitch management</b>}
            {description}
          </>
        )),
  },
];

export const Main = ({ image, title, description }) => {
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
            {cardProps.map((element, index) => (
              <Card
                key={index}
                title={element.title}
                image={element.image}
                description={element.description}
                order={index + 1}
              />
            ))}
          </Cards>
        </InnerMain>
      </ContainerMain>
    </WrapperMain>
  );
};
