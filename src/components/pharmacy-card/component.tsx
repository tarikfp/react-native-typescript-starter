import * as React from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { Card, IconButton, Paragraph, Title } from "react-native-paper";
import { ms, vs } from "react-native-size-matters";
import { PharmacyTypes } from "../../lib/pharmacy";
import { makeStyles } from "../../theme/make-styles";
import PharmacyCardActionButton from "./components/action-button";
import SeeMoreRowItem from "./components/see-more-row-item";

type Props = PharmacyTypes.Pharmacy & {
  onCallPress: () => void;
  onShowInMapsPress: () => void;
};

const PharmacyCard = ({
  EczaneAdi,
  Adresi,
  Telefon,
  Telefon2,
  Semt,
  Sehir,
  YolTarifi,
  onCallPress,
  onShowInMapsPress,
  ilce,
}: Props) => {
  const styles = useStyles({ Telefon2 });
  const { t } = useTranslation();

  const [isDetailsCollapsed, setDetailsCollapsed] =
    React.useState<boolean>(false);

  const seeMoreRowItems = [
    { label: `${t("city")}`, value: Sehir },
    { label: `${t("district")}`, value: ilce },
    { label: `${t("neighborhood")}`, value: Semt },
    {
      label: `${t("directions")}`,
      value: YolTarifi,
    },
  ];

  return (
    <Card mode="elevated" elevation={4} style={styles.wrapper}>
      <Card.Title
        titleStyle={styles.cardTitleStyle}
        subtitleStyle={styles.cardSubtitleStyle}
        title={EczaneAdi}
        subtitle={ilce}
      />

      <Card.Content>
        <Title style={styles.cardContentTitle}>{t("address")}</Title>
        <Paragraph style={styles.cardContentParagraph}>{Adresi}</Paragraph>

        <View style={styles.cardPhoneTitlesWrapper}>
          <View>
            <Title style={styles.cardContentTitle}>{t("phone")}</Title>
            <Paragraph style={styles.cardContentParagraph}>{Telefon}</Paragraph>
          </View>

          {Telefon2 ? (
            <View>
              <Title style={styles.cardContentTitle}>{t("phone-two")}</Title>
              <Paragraph style={styles.cardContentParagraph}>
                {Telefon2}
              </Paragraph>
            </View>
          ) : null}
        </View>

        <View style={styles.rowItem}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.seeMoreRowContainer}
            onPress={() => setDetailsCollapsed((prev) => !prev)}>
            <Text style={styles.showMoreText}>
              {t(!isDetailsCollapsed ? "hide" : "show-more")}
            </Text>
            <IconButton
              icon={!isDetailsCollapsed ? "chevron-up" : "chevron-down"}
            />
          </TouchableOpacity>

          <PharmacyCardActionButton
            onPress={onShowInMapsPress}
            icon="google-maps">
            {t("show-in-maps")}
          </PharmacyCardActionButton>
        </View>
      </Card.Content>

      <Collapsible style={styles.collapsible} collapsed={isDetailsCollapsed}>
        {seeMoreRowItems.map((rowItem, ind) => (
          <SeeMoreRowItem index={ind} key={rowItem.value} {...rowItem} />
        ))}

        <View style={styles.seeMoreActionContainer}>
          <PharmacyCardActionButton
            mode="outlined"
            onPress={onCallPress}
            icon="phone">
            {t("call")}
          </PharmacyCardActionButton>

          {Telefon2 && (
            <PharmacyCardActionButton
              mode="outlined"
              onPress={onCallPress}
              icon="phone">
              {t("call-phone-two")}
            </PharmacyCardActionButton>
          )}
        </View>
      </Collapsible>
    </Card>
  );
};

const useStyles = makeStyles((theme, props) => ({
  wrapper: {
    width: "100%",
    minHeight: vs(240),
    borderRadius: 8,
    shadowColor: theme.colors.primaryDisabled,
    flexDirection: "row",
    backgroundColor: theme.colors.paper,
  },
  cardTitleStyle: {
    ...theme.fonts.h3,
    color: theme.colors.primary,
  },
  cardSubtitleStyle: {
    ...theme.fonts.p1,
    color: theme.colors.text,
  },
  rowItem: {
    flexDirection: "row",
    marginTop: 6,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  seeMoreActionContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: !props.Telefon2 ? "center" : "space-between",
  },
  cardPhoneTitlesWrapper: {
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-between",
  },
  seeMoreRowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardActions: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContentTitle: {
    ...theme.fonts.h3,
    color: theme.colors.primary,
  },
  cardContentParagraph: {
    ...theme.fonts.p1,
    color: theme.colors.text,
  },
  showMoreText: {
    ...theme.fonts.p1,
    color: theme.colors.text,
    minWidth: ms(75),
  },
  collapsible: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0,0.05)",
  },
  spacing: {
    height: 6,
  },
}));

export default React.memo(PharmacyCard);
