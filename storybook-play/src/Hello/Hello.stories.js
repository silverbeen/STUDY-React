import React from "react";
import Hello from "./Hello";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "components|basic/Hello",
  component: Hello,
  decorators: [withKnobs], //애드온 적용
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: mdx,
    },
  },
};

export const hello = () => {
  const big = boolean("big", false);
  const name = text("name", "storybook");
  return (
    <Hello
      name={name}
      big={big}
      onHello={action("onHello")}
      onBye={action("onBye")}
    />
  );
};
hello.story = {
  name: "Defalut",
};

export const standard = () => <Hello name="storybook" />;
export const big = () => <Hello name="storybook" big />;
