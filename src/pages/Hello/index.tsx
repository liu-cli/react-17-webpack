import React from "react";
import type { FC } from 'react';

interface HelloProps {}

const Hello: FC<HelloProps> = (props) => {
  const {} = props;
  console.log('Hello');
  return <div>Hello</div>;
};

export default Hello;
