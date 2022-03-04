import { Text, ListText, TextDiv } from "./style";

type TextSubTitleProps = {
  text: string;
  additionalText1?: string;
  additionalText2?: string;
};

export const LiText = (props: TextSubTitleProps) => {
  return (
    <TextDiv>
      <Text>{props.text}</Text>
      <ListText>{props.additionalText1}</ListText>
      <ListText>{props.additionalText2}</ListText>
    </TextDiv>
  );
};
