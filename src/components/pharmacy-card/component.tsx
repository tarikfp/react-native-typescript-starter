import * as React from "react";
import { View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { vs } from "react-native-size-matters";
import { PharmacyTypes } from "../../lib/pharmacy";
import { makeStyles } from "../../theme/make-styles";
import PharmacyCardActionButton from "./components/action-button";

type Props = PharmacyTypes.Pharmacy & {
  onCallPress: () => void;
  onShowInMapsPress: () => void;
};

const PharmacyCard = ({
  EczaneAdi,
  Adresi,
  Telefon,
  Telefon2,
  onCallPress,
  onShowInMapsPress,
  ilce,
}: Props) => {
  const styles = useStyles({ Telefon2 });

  return (
    <Card mode="elevated" elevation={1} style={styles.wrapper}>
      <Card.Title
        titleStyle={styles.cardTitleStyle}
        subtitleStyle={styles.cardSubtitleStyle}
        title={EczaneAdi}
        subtitle={ilce}
      />

      <Card.Content>
        <Title style={styles.cardContentTitle}>Adres</Title>
        <Paragraph style={styles.cardContentParagraph}>{Adresi}</Paragraph>

        <View style={styles.cardPhoneTitlesWrapper}>
          <View>
            <Title style={styles.cardContentTitle}>Telefon</Title>
            <Paragraph style={styles.cardContentParagraph}>{Telefon}</Paragraph>
          </View>

          {Telefon2 ? (
            <View>
              <Title style={styles.cardContentTitle}>Telefon2</Title>
              <Paragraph style={styles.cardContentParagraph}>
                {Telefon2}
              </Paragraph>
            </View>
          ) : null}
        </View>
      </Card.Content>

      <Card.Actions style={styles.cardActions}>
        <View style={styles.cardPhoneActionsWrapper}>
          <PharmacyCardActionButton onPress={onCallPress} icon="phone">
            Ara
          </PharmacyCardActionButton>

          <View style={styles.spacing} />
          {Telefon2 && (
            <PharmacyCardActionButton onPress={onCallPress} icon="phone">
              Telefon 2 Ara
            </PharmacyCardActionButton>
          )}
        </View>

        <PharmacyCardActionButton
          mode="outlined"
          onPress={onShowInMapsPress}
          icon="google-maps">
          Haritada göster
        </PharmacyCardActionButton>
      </Card.Actions>
    </Card>
  );
};

const useStyles = makeStyles((theme, props) => ({
  wrapper: {
    width: "100%",
    height: vs(props.Telefon2 ? 270 : 250),
    borderRadius: 8,
    flexDirection: "row",
    backgroundColor: theme.colors.paper,
  },
  cardTitleStyle: {
    ...theme.fonts.h3,
    color: theme.colors.text,
  },
  cardSubtitleStyle: {
    ...theme.fonts.p1,
    color: theme.colors.text,
    fontFamily: "Poppins-MediumItalic",
  },
  cardPhoneActionsWrapper: {
    flexDirection: props.Telefon2 ? "column" : "row",
    justifyContent: "space-between",
  },
  cardPhoneTitlesWrapper: {
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-between",
  },
  cardActions: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  phoneTwoButton: {
    marginTop: 6,
  },
  cardContentTitle: {
    ...theme.fonts.h3,
    color: theme.colors.text,
  },
  cardContentParagraph: {
    ...theme.fonts.p1,
    color: theme.colors.text,
    fontFamily: "Poppins-MediumItalic",
  },
  spacing: {
    height: 6,
  },
}));

export default React.memo(PharmacyCard);
