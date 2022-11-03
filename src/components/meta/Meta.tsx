import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AttributeType } from 'types/CarsInterface';

interface MetaProps {
  attribute: AttributeType;
  amount: number;
  id: string;
}

const IMAGE_SIZE = {
  width: 1200,
  height: 600,
};

const Meta = ({ attribute, amount, id }: MetaProps) => {
  const { brand, name, imageUrl } = attribute;
  return (
    <Helmet>
      <title>{`${brand} ${name}`}</title>
      <meta name="description" content={`월 ${amount}원`} />
      <meta property="og:type" content="website" />
      <link href={imageUrl} />
      <meta property="og:url" content={`${process.env.PUBLIC_URL}/${id}`} />
      <meta name="og:title" content={`${brand} ${name}`} />
      <meta name="og:description" content={`월 ${amount.toLocaleString()}원`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={IMAGE_SIZE.width.toString()} />
      <meta property="og:image:height" content={IMAGE_SIZE.height.toString()} />
    </Helmet>
  );
};

export default Meta;
