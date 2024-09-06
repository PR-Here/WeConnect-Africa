import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AfricaBottomSheet from '@/components/common/AfricaBottomSheet';
import AfricaText from '@/components/common/AfricaText';
import AfricaButton from '@/components/common/AfricaButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Profile = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    country: '',
    state: '',
    city: '',
    street: '',
    zipCode: '',
  });

  const validate = () => {
    let valid = true;
    const newErrors = {
      name: '',
      country: '',
      state: '',
      city: '',
      street: '',
      zipCode: '',
    };

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    if (!country.trim()) {
      newErrors.country = 'Country is required.';
      valid = false;
    }

    if (!state.trim()) {
      newErrors.state = 'State is required.';
      valid = false;
    }

    if (!city.trim()) {
      newErrors.city = 'City is required.';
      valid = false;
    }

    if (!street.trim()) {
      newErrors.street = 'Street is required.';
      valid = false;
    }

    if (!zipCode.trim()) {
      newErrors.zipCode = 'Zip Code is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Perform submit action here
      console.log('Form submitted successfully:', { name, country, state, city, street, zipCode });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAwareScrollView extraScrollHeight={100} contentContainerStyle={styles.container} style={{}}>
        {/* Logo */}
        <Image
          source={require('../../assets/images/weconnect.jpeg')} // Replace with actual logo path
          style={styles.logo}
          resizeMode="cover"
        />
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            value={name}
            onChangeText={setName}
            returnKeyType='done'
          />
          {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}
        </View>

        {/* Country Input */}
        <View style={styles.inputContainer}>
          <AfricaText style={styles.label}>Country</AfricaText>
          <TextInput
            style={styles.input}
            placeholder="Enter country"
            value={country}
            onChangeText={setCountry}
            returnKeyType='done'
          />
          {errors.country ? <Text style={styles.error}>{errors.country}</Text> : null}
        </View>

        {/* State Input */}
        <View style={styles.inputContainer}>
          <AfricaText style={styles.label}>State</AfricaText>
          <TextInput
            style={styles.input}
            placeholder="Enter state"
            value={state}
            onChangeText={setState}
            returnKeyType='done'
          />
          {errors.state ? <Text style={styles.error}>{errors.state}</Text> : null}
        </View>

        {/* City Input */}
        <View style={styles.inputContainer}>
          <AfricaText style={styles.label}>City</AfricaText>
          <TextInput
            style={styles.input}
            placeholder="Enter city"
            value={city}
            onChangeText={setCity}
            returnKeyType='done'
          />
          {errors.city ? <Text style={styles.error}>{errors.city}</Text> : null}
        </View>

        {/* Street Input */}
        <View style={styles.inputContainer}>
          <AfricaText style={styles.label}>Street</AfricaText>
          <TextInput
            style={styles.input}
            placeholder="Enter street"
            value={street}
            onChangeText={setStreet}
            returnKeyType='done'
          />
          {errors.street ? <Text style={styles.error}>{errors.street}</Text> : null}
        </View>

        {/* Zip Code Input */}
        <View style={styles.inputContainer}>
          <AfricaText style={styles.label}>Zip Code</AfricaText>
          <TextInput
            style={styles.input}
            placeholder="Enter zip code"
            value={zipCode}
            onChangeText={setZipCode}
            keyboardType="numeric"
            returnKeyType='done'
          />
          {errors.zipCode ? <Text style={styles.error}>{errors.zipCode}</Text> : null}
        </View>

        {/* Submit Button */}
        <AfricaButton buttonStyle={styles.button} label='Submit' onPress={handleSubmit} />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    borderRadius: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default Profile;
