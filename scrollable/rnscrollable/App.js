import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

export default class App extends React.Component {
  iter = () => {
    var dat = [
      "Devin",
      "Jackson",
      "James",
      "Joel",
      "John",
      "Jillian",
      "Jimmy",
      "Julie"
    ];
    for (var i in dat) {
      console.log(dat[i]);
    }
    // console.log(dat);
  };
  render() {
    this.iter();
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
