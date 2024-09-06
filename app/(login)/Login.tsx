import { appColor } from '@/theme/appColor';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';


const Login = () => {
  const routes = useRoute()
  const [country, setCountry] = useState<string | undefined>(undefined); // State to store selected country
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Validation function
  const validateForm = () => {
    if (country && mobileNumber && email && termsAccepted) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  // Handle form submission
  const handleLogin = () => {
    router.navigate('(login)/OtpVerify')
  };

  // Update state and validate on input change
  const handleMobileNumberChange = (text: string) => {
    setMobileNumber(text);
    validateForm();
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    validateForm();
  };

  const handleTermsCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
    validateForm();
  };

  const handleTermsPress = () => {
    // Open terms and conditions URL in the default browser or a web view
    const termsUrl = 'https://example.com/terms'; // Replace with your terms and conditions URL
    Linking.openURL(termsUrl).catch((err) => console.error('Failed to open terms URL', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/weconnect.jpeg')} // Replace with actual logo path
        style={styles.logo}
        resizeMode="cover"
      />

      {/* Country Picker */}
      <View style={styles.input}>
        <CountryPicker
          withFlag
          withCallingCode
          withModal
          onSelect={(country) => {
            if (country) {
              setCountry(country.regionCode); // Set the ISO 3166-1 alpha-2 code of the selected country
              validateForm(); // Call validation function after selecting the country
            }
          }}
          selectedCountry={country}
        />
      </View>

      {/* Selected Country Display */}
      {country && (
        <View style={styles.selectedCountryContainer}>
          <Text style={styles.selectedCountryText}>{country}</Text>
        </View>
      )}

      {/* Enter Mobile Number */}
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={handleMobileNumberChange}
      />

      {/* Enter Email */}
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={handleEmailChange}
      />

      {/* Terms and Conditions Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleTermsCheckboxChange}>
          <View style={styles.checkbox}>
            {termsAccepted && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTermsPress}>
          <Text style={styles.checkboxLabel}>I agree to the <Text style={styles.linkText}>Terms and Conditions</Text></Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      {/* { backgroundColor: isButtonDisabled ? '#ccc' : '#007bff' } */}
      <TouchableOpacity
        style={[styles.button, ]}
        onPress={handleLogin}
      // disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
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
  inputContainer: {
    width: '100%',
    height: 50,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  selectedCountryContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedCountryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: {
    fontSize: 14,
    color: '#007bff',
  },
  checkboxLabel: {
    fontSize: 14,
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
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
});

export default Login;
