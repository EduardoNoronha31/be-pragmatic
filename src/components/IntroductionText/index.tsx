import { TextDiv, Text } from "./style";

type IntroductionTextProps = {
  text: string;
};

export const IntroductionText = (props: IntroductionTextProps) => {
  return (
    <TextDiv>
      <Text>{props.text}</Text>
    </TextDiv>
  );
};
