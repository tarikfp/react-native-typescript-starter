import React from "react";
import { Button } from "react-native-paper";
import { makeStyles } from "~theme/make-styles";

type Props = React.ComponentProps<typeof Button>;

export default function PharmacyCardActionButton(props: Props) {
  const styles = useStyles();

  return (
    <Button
      style={styles.btnStyle}
      labelStyle={styles.labelStyle}
      mode="contained"
      {...props}>
      {props.children}
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  labelStyle: {
    ...theme.fonts.p2,
  },
  contentStyle: {
    backgroundColor: theme.colors.surface,
  },
  btnStyle: {
    borderRadius: 10,
  },
}));
