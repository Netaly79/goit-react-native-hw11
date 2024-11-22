import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

const image = require("../assets/photo_bg.png");
const photo_block = require("../assets/add_photo.png");

const RegistrationScreen = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.canva}>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} placeholder="Логін" />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.password}
                value={password}
                onChangeText={setPassword}
                placeholder="Пароль"readOnly
                placeholderTextColor="#B0B0B0"
                secureTextEntry={!isPasswordVisible}
              />
              <Pressable
                style={styles.button}
                onPress={togglePasswordVisibility}>
                <Text style={styles.buttonText}>
                  {isPasswordVisible ? "Скрыть" : "Показати"}
                </Text>
              </Pressable>
            </View>
          </View>
          <Pressable onPress={onPressFunction} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Зареєстуватися</Text>
          </Pressable>
          <Pressable onPress={onEnterFunction} style={styles.enterButton}>
            <Text style={styles.enterButtonText}>Вже є акаунт? Увійти</Text>
          </Pressable>
        </View>
        <Image style={styles.avatarBox} source={photo_block}></Image>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  canva: {
    backgroundColor: "rgb(255, 255, 255)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    height: 549,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatarBox: {
    width: 132,
    height: 120,
    zIndex: 2,
    position: "absolute",
    bottom: 489,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: 0.3,
    paddingTop: 92,
    paddingBottom: 33,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 27,
  },
  submitButton: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: "column",
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
  },
  button: {},
  buttonText: {
    fontSize: 16,
    color: "#1B4371",
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 16,
  },
  password: {
    color: '#BDBDBD',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal'
  },
  enterButton: {
    margin: 16,
  },
  enterButtonText: {
    color: '#1B4371',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    
  },
});

const onPressFunction = () => {};
const onEnterFunction = () => {};

export default RegistrationScreen;
