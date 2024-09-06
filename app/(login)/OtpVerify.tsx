import AfricaText from '@/components/common/AfricaText';
import { appColor } from '@/theme/appColor';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const OTPVerify = () => {
  const [otp, setOtp] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [timer, setTimer] = useState(90);
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          setIsResendDisabled(false); // Enable resend when timer reaches 0
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Validate OTP input
  useEffect(() => {
    setIsButtonDisabled(!(otp.length === 4));
  }, [otp]);

  // Handle OTP verification
  const handleVerify = () => {
    console.log(`Verifying OTP: ${otp}`);
    // Perform OTP verification logic here
  };

  // Handle OTP resend click
  const handleResend = () => {
    console.log('Resending OTP');
    setTimer(90); // Reset timer
    setIsResendDisabled(true); // Disable resend button until timer reaches 0
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/weconnect.jpeg')} // Replace with actual logo path
        style={styles.logo}
        resizeMode="cover"
      />

      {/* Text below logo */}
      <AfricaText style={styles.text}>
        Please enter the One Time PIN which you have received on +917715046781 or Re-generate the one time PIN
      </AfricaText>

      {/* Label above OTP field */}
      <AfricaText style={styles.label}>Your OTP Code will expire in {90} seconds</AfricaText>

      {/* OTP Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        maxLength={4}
        value={otp}
        onChangeText={(text) => setOtp(text)}
        returnKeyType='done'
      />

      {/* Verify Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isButtonDisabled ? '#ccc' : appColor.PRIMARY_COLOR, }]}
        onPress={handleVerify}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend OTP Text and Timer */}
      <AfricaText style={styles.resendText}>
        {timer > 0 ? (
          `Resend OTP in ${timer} seconds`
        ) : (
          <Text style={isResendDisabled ? styles.disabledLink : styles.link} onPress={handleResend}>
            Resend OTP
          </Text>
        )}
      </AfricaText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: appColor.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  disabledLink: {
    color: '#ccc',
  },
});

export default OTPVerify;
