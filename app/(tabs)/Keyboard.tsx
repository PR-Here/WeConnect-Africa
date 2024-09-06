import { appColor } from "@/theme/appColor";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Platform,
  Linking,
} from "react-native";
import SoftPhone from "react-softphone";
import { WebSocketInterface } from "jssip";

const phoneButtons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "0",
  "#",
];

const config = {
  domain: "3.110.18.55", // sip-server@your-domain.io
  // uri: "sip:sip-user@your-domain.io", // sip:sip-user@your-domain.io
  password: "123", //  PASSWORD ,
  // ws_servers: "wss://sip-user@your-domain.io:8089/ws", //ws server
  // sockets: new WebSocketInterface("wss://sip-server@your-domain.io:8089/ws"),
  display_name: "WeTransfer-Africa", //jssip Display Name
  debug: false, // Turn debug messages on
};

const Keyboard = () => {
  const [account, setAccount] = React.useState(null);
  const [call, setCall] = React.useState(null);
  const [number, setNumber] = React.useState("");

  const handleButtonPress = (value: string) => {
    setNumber((prev) => formatInput(prev + value));
  };

  const handleDeletePress = () => {
    setNumber((prev) => formatInput(prev.slice(0, -1)));
  };

  const handleDeleteLongPress = () => {
    setNumber("");
  };

  const handleZeroLongPress = () => {
    setNumber((prev) => formatInput(prev + "+"));
  };

  const handleEuroPress = () => {
    Alert.alert("Euro", ``);
  };

  const handleCallPress = () => {
    if (number == "" || number.length < 10) {
      alert("Please Enter a valid Phone Number");
      return;
    }

    // let phoneNumber;
    // if (Platform.OS !== 'android') {
    //   phoneNumber = `telprompt:${number}`;
    // } else {
    //   phoneNumber = `tel:${number}`;
    // }
    // Linking.canOpenURL(phoneNumber)
    //   .then(supported => {
    //     if (!supported) {
    //       Alert.alert('Phone number is not available', number);
    //     } else {
    //       return Linking.openURL(phoneNumber);
    //     }
    //   })
    //   .catch(err => console.log(err));
  };
  // Add actual call functionality here if needed

  const handleContactPress = () => {
    Alert.alert("Contacts", "Accessing Contacts");
    // Add actual contact access functionality here if needed
  };

  const formatInput = (value: string) => {
    if (value.startsWith("+")) {
      const digits = value.replace(/\D/g, ""); // remove non-digit characters
      if (digits.length > 2) {
        return `+${digits.slice(0, 2)}-${digits.slice(2)}`;
      }
      return `+${digits}`;
    }
    return value;
  };

  const setConnectOnStartToLocalStorage = (newValue: any) => {
    // Handle save the auto connect value to local storage
    return true;
  };
  const setNotifications = (newValue: any) => {
    // Handle save the Show notifications of an incoming call to local storage
    return true;
  };
  const setCallVolume = (newValue: any) => {
    // Handle save the call Volume value to local storage
    return true;
  };
  const setRingVolume = (newValue: any) => {
    // Handle save the Ring Volume value to local storage
    return true;
  };

  return (
    <ImageBackground
      source={require("../../assets/images/weconnect.jpeg")}
      style={styles.background}
      resizeMode="repeat"
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={(text) => setNumber(formatInput(text))}
          placeholder="Enter number"
          keyboardType="numeric"
        />

        <View style={styles.keyboard}>
          {phoneButtons.map((button) => (
            <TouchableOpacity
              key={button}
              style={styles.button}
              onPress={() => handleButtonPress(button)}
              onLongPress={button === "0" ? handleZeroLongPress : undefined}
            >
              {button === "0" ? (
                <View style={styles.zeroButton}>
                  <Text style={styles.buttonText}>0</Text>
                  <Text style={styles.plusText}>+</Text>
                </View>
              ) : (
                <Text style={styles.buttonText}>{button}</Text>
              )}
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleDeletePress}
            onLongPress={handleDeleteLongPress}
          >
            <Text style={styles.buttonText}>⌫</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.extraButtons}>
          {/* Euro Button */}
          <TouchableOpacity
            style={styles.extraButton}
            onPress={handleEuroPress}
          >
            <Text style={styles.buttonText}>€</Text>
          </TouchableOpacity>
          {/* Call Button */}
          <TouchableOpacity
            style={styles.extraButton}
            onPress={handleCallPress}
          >
            <Text style={styles.buttonText}>📞</Text>
          </TouchableOpacity>
          {/* Contact Butotn */}
          <TouchableOpacity
            style={styles.extraButton}
            onPress={handleContactPress}
          >
            <Text style={styles.buttonText}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColor.PRIMARY_COLOR,
    margin: 5,
    borderRadius: 30,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
  },
  zeroButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  plusText: {
    color: "#fff",
    fontSize: 18,
    position: "absolute",
    bottom: -15,
  },
  extraButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  extraButton: {
    width: 80,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    margin: 5,
    borderRadius: 30,
  },
});

export default Keyboard;
