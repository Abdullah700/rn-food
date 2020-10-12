import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState<string>("");
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(t: string) => setTerm(t)}
        onTermSubmit={() => console.log("submitted")}
      />
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
