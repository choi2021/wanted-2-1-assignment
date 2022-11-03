import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AttributeType } from 'interfaces/CarsInterface';

interface MetaProps {
  attribute: AttributeType;
  amount: number;
}

const IMAGE_SIZE = {
  width: 1200,
  height: 600,
};

const Meta = ({ attribute, amount }: MetaProps) => {
  const { brand, name, imageUrl } = attribute;
  return (
    <Helmet>
      <title>{`${brand} ${name}`}</title>
      <meta name="description" content={`월 ${amount}원`} />
      <link href={imageUrl} />
      <meta name="og:title" content={`${brand} ${name}`} />
      <meta name="og:description" content={`월 ${amount}원`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={IMAGE_SIZE.width.toString()} />
      <meta property="og:image:height" content={IMAGE_SIZE.height.toString()} />
    </Helmet>
  );
};

export default Meta;
