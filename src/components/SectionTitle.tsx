import React from "react";

import { Title } from "../components/ui/layout";

const index = (props: any) => {
  const { title, className } = props;
  return (
    <div className={`${(className && className) || "pb-12"} `}>
      <Title {...props}>
        <span>{title}</span>
      </Title>
    </div>
  );
};

export default index;
