import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";
import fonst from "../constants/fonts";
import { Input } from "../components/Input";
import fonts from "../constants/fonts";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth.slice";

function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "rpsahani@mailinator.com",
      password: "Ramprit@1234",
    },
  });
  const [error, setError] = useState("");
  const onSubmit = async (data) => {
    await AsyncStorage.removeItem("@access_token");
    if (data.email === "" || data.email === undefined || data.email === null) {
      setError("Email is required");
      return;
    }

    if (
      data.password === "" ||
      data.password === undefined ||
      data.password === null
    ) {
      setError("Password is required");
      return;
    }
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        navigation.navigate("Home");
      });
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.primary[600] }}>
      <SafeAreaView
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
        }}></SafeAreaView>
      <View style={{ marginTop: 129 }}>
        <Text
          style={{
            marginLeft: 80,
            fontFamily: fonst.Montserrat_500Medium,
            fontSize: 24,
            color: colors.white[100],
          }}>
          Welcome to tradly
        </Text>
      </View>

      <View style={{ marginTop: 66 }}>
        <Text
          style={{
            marginLeft: 104,
            fontFamily: fonst.Montserrat_400Regular,
            fontSize: 16,
            color: colors.white[100],
          }}>
          Welcome to tradly
        </Text>
      </View>

      <View
        style={{
          marginTop: 45,
        }}>
        <Input placeholder='Email Address' control={control} name='email' />
      </View>

      <View
        style={{
          marginTop: 16,
        }}>
        <Input
          placeholder='Password'
          secureTextEntry
          control={control}
          name='password'
        />
      </View>

      <View
        style={{
          marginLeft: 32,
          marginRight: 32,
          marginTop: 38,
        }}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            height: 40,
            borderRadius: 24,
            backgroundColor: "#ffff",
          }}>
          <Text style={{ textAlign: "center", marginTop: 10, fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 32.5, marginLeft: 88 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: fonts.Montserrat_400Regular,
            color: colors.white[100],
          }}>
          Forgot your password?
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 45.5,
          marginLeft: 49,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: fonts.Montserrat_400Regular,
            color: colors.white[100],
          }}>
          Don’t have an account? Sign up
        </Text>
      </View>
    </View>
  );
}
export default LoginScreen;
