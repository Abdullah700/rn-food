import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import { IBusiness } from "../interfaces/IBusiness";

const SearchScreen = () => {
  const [term, setTerm] = useState<string>("");
  const [results, setResults] = useState<IBusiness[]>([]);
  const [errMsg, setErrMsg] = useState<string>("");

  const searchApi = async (): Promise<void> => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrMsg("Something went wrong");
    }
  };
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {!!errMsg && <Text style={{ color: "red" }}>{errMsg}</Text>}
      <Text>{results.length} has been found</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
