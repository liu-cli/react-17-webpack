import type { FC } from "react";
import React from "react";

interface CountProps {}

const Count: FC<CountProps> = (props) => {
  const {} = props;
  console.log("Count");
  return <div>Count</div>;
};

export default Count;
