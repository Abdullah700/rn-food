import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IBusiness } from "../interfaces/IBusiness";

interface IProp {
  result: IBusiness;
}

const ResultsDetail: FC<IProp> = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
