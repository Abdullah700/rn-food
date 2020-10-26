import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { IBusiness } from "../interfaces/IBusiness";

const SearchScreen: FC = () => {
  const [term, setTerm] = useState<string>("");
  const [{ searchApi }, { results }, { errMsg }] = useResults();
  const filterResultsByPrice = (price: string): IBusiness[] => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {!!errMsg && <Text style={{ color: "red" }}>{errMsg}</Text>}
      <Text>{results.length} has been found</Text>
      <ResultsList
        results={filterResultsByPrice("$")}
        title={"Cost Effective"}
      />
      <ResultsList results={filterResultsByPrice("$$")} title={"Bit Pricer"} />
      <ResultsList
        results={filterResultsByPrice("$$$")}
        title={"Big Spender"}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
