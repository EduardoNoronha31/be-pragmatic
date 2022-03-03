import { Text } from "./style";

type TextTitleProps = {
  text: string;
};

export const TextTitle = (props: TextTitleProps) => {
  return <Text>{props.text}</Text>;
};
