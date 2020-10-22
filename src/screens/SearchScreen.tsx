import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import { IBusiness } from "../interfaces/IBusiness";

const SearchScreen = () => {
  const [term, setTerm] = useState<string>("");
  const [results, setResults] = useState<IBusiness[]>([]);

  const searchApi = async (): Promise<void> => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
      },
    });
    setResults(response.data.businesses);
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(t: string) => setTerm(t)}
        onTermSubmit={() => console.log("submitted")}
      />
      <Text>{results.length} has been found</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
