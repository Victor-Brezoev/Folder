import Image from 'next/image';

import {
  CardMain,
  CardMedia,
  CardInner,
  CardTitle,
  Cardbody,
} from './elements';

export const Card = ({ image, title, description, ...props }) => {
  return (
    <CardMain>
      <CardMedia>
        {/* <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        /> */}
      </CardMedia>
      <CardInner>
        <CardTitle>{title}</CardTitle>
        <Cardbody>{description}</Cardbody>
      </CardInner>
    </CardMain>
  );
};
