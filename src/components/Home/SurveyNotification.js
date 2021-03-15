import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const SurveyNotification = ({ close, navigation, data }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Text}>
          Tell us how we can improve {"\n"} by answering a short survey
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() =>
            navigation.navigate("Survey", {
              surveyData: data,
            })
          }
        >
          <Text style={{ color: "#FF9D5A", fontSize: 16 }}>Start Survey</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Icon name={"close"} size={18} color={"white"} onPress={close} />
      </View>
    </View>
  );
};

export default SurveyNotification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF9D5A",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 15,
  },
  Button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 5,
  },
  Text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
