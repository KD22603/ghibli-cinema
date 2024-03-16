import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react'
interface Props {
    id:string;
    title:string;
    original_title:string;
    image:string;
}

const CharacterCard:React.FC<Props> = ({
    title,
    original_title,
    image,
}) => {
  return (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={image} />}
  >
    <Meta title={`${title} (${original_title})`} />
  </Card>
);
}

export default CharacterCard;