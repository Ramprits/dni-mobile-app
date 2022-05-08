import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

function HomeScreen() {
  return (
    <View
      style={{
        backgroundColor: colors.primary[600],
      }}>
      <StatusBar barStyle='light-content' />
      <SafeAreaView
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
        }}>
        <View
          style={{
            marginTop: 12,
            marginLeft: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 14,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: fonts[600],
              fontSize: 24,
              color: colors.white[100],
            }}>
            Groceries
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}>
            <Feather name='heart' size={24} color={colors.white[100]}></Feather>
            <Feather
              name='shopping-cart'
              size={24}
              style={{
                marginLeft: 5,
              }}
              color={colors.white[100]}></Feather>
          </View>
        </View>
        <View style={styles.searchSection}>
          <Feather
            style={styles.searchIcon}
            name='search'
            size={20}
            color='#000'
          />
          <TextInput
            style={styles.input}
            placeholder='Search products...'
            onChangeText={(searchString) => {
              console.log({ searchString });
            }}
            underlineColorAndroid='transparent'
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 23,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  searchIcon: {
    padding: 10,
    color: colors.primary[600],
    fontSize: 24,
  },
  input: {
    flex: 1,
    height: 48,
  },
});
export default HomeScreen;
