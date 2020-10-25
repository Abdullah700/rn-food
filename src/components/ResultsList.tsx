import { Feather } from "@expo/vector-icons";
import React, { FC } from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {IBusiness} from "../interfaces/IBusiness";

interface IProp {
    title:string,
    results:IBusiness[]
}

const ResultsList: FC<IProp> = ({title, results}) => {
    return (
        <View >
           <Text style={styles.title}>{title}</Text>
           <Text>{results.length}</Text>
        </View>
    );
};

export default ResultsList;

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:"bold"
    }
});
