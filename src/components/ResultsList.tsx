import { Feather } from "@expo/vector-icons";
import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { IBusiness } from "../interfaces/IBusiness";
import ResultsDetail from "./ResultsDetail";

interface IProp {
  title: string;
  results: IBusiness[];
}

const ResultsList: FC<IProp> = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
