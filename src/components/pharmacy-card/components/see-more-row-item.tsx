import * as React from "react";
import { View } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import { makeStyles } from "~theme/make-styles";

type Props = {
  label: string;
  value: string;
  index: number;
};

function SeeMoreRowItem({ label, value, index }: Props) {
  const styles = useStyles({ index });

  return (
    <View style={styles.rowItem}>
      <Title style={styles.cardContentTitle}>{label}</Title>
      <Paragraph style={styles.cardContentParagraph}>{value}</Paragraph>
    </View>
  );
}

export default React.memo(SeeMoreRowItem);

const useStyles = makeStyles((theme, props) => ({
  rowItem: {
    flexDirection: "row",
    paddingVertical: 8,
    borderColor: theme.colors.border,
    borderTopWidth: props.index !== 0 ? 1 : 0,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  cardContentTitle: {
    ...theme.fonts.h4,
    color: theme.colors.primary,
  },
  cardContentParagraph: {
    ...theme.fonts.p1,
    maxWidth: 200,
    textAlign: "right",
    color: theme.colors.text,
  },
}));
