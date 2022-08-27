import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, View } from "react-native";
import { PharmacyCard } from "../../components/pharmacy-card";
import { makeStyles } from "../../theme/make-styles";

function HomeScreen() {
  const navigation = useNavigation();
  const styles = useStyles();

  return (
    <View style={styles.wrapper}>
      <PharmacyCard
        Adresi="Burgazadası Mahallesi Çınarlık Sokak 3 Burgazada / Adalar / İstanbul"
        EczaneAdi="Umut eczanesi"
        Semt="Burgazada"
        Sehir="İstanbul"
        ilce="Cankaya"
        Telefon="0(216)381-21-12"
        Telefon2="0(212)389-12-21"
        YolTarifi="Burgazada Sağlık Ocağı Karşısı"
        latitude={40.879987}
        longitude={29.069194}
      />
      <Text onPress={() => navigation.navigate("innerHome")}>
        go inner home
      </Text>
    </View>
  );
}

const useStyles = makeStyles((theme, props) => ({
  wrapper: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
}));

export default HomeScreen;
