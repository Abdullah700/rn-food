import { Feather } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface IProp {
  term: string;
  onTermChange: (t: string) => void;
  onTermSubmit: () => void;
}

const SearchBar: FC<IProp> = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        value={term}
        autoCapitalize={"none"}
        autoCorrect={false}
        onChangeText={onTermChange}
        placeholder="Search"
        onEndEditing={onTermSubmit}
        onSubmitEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    paddingHorizontal: 5,
    marginBottom:10,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
