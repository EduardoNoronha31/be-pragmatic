import { TextDiv, Text } from "./style";

type MainTextProps = {
  text: string;
};

export const MainText = (props: MainTextProps) => {
  return (
    <TextDiv>
      <Text>{props.text}</Text><br/>
    </TextDiv>
  );
};
