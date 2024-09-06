import AfricaButton from '@/components/common/AfricaButton';
import AfricaText from '@/components/common/AfricaText';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const BalanceTransfer = () => {
  const [userName, setUserName] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({ userName: '', amount: '' });

  const validate = () => {
    let valid = true;
    let userNameError = '';
    let amountError = '';

    if (!userName.trim()) {
      userNameError = 'Mobile number is required.';
      valid = false;
    } else if (!/^\d{10}$/.test(userName.trim())) {
      userNameError = 'Mobile number must be 10 digits.';
      valid = false;
    }

    if (!amount.trim()) {
      amountError = 'Transfer amount is required.';
      valid = false;
    } else if (isNaN(Number(amount.trim())) || Number(amount.trim()) <= 0) {
      amountError = 'Amount must be a positive number.';
      valid = false;
    }

    setErrors({ userName: userNameError, amount: amountError });
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert('Success', `Amount of ₹${amount} transferred to ${userName}`);
      // Perform actual balance transfer logic here
    }
  };

  return (
    <View style={styles.container}>
      <Image resizeMode='cover' style={styles.logoImage} source={require('../../assets/images/weconnect.jpeg')} />
      <View style={styles.view}></View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          value={userName}
          onChangeText={setUserName}
          keyboardType="numeric"
          returnKeyType='done'
        />
        {errors.userName ? <Text style={styles.error}>{errors.userName}</Text> : null}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Transfer Amount</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.rupee}>€</Text>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter transfer amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            returnKeyType='done'
          />
        </View>
        {errors.amount ? <Text style={styles.error}>{errors.amount}</Text> : null}
      </View>

      <AfricaButton buttonStyle={styles.button} label='Submit' onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  view: {
    marginTop: 50
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
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupee: {
    fontSize: 18,
    paddingRight: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    marginTop: 50,
  },
  logoImage: {
    height: 100,
    alignSelf: 'center',
    width: '100%',
    marginTop: 10,
    borderRadius: 5,
  },
});

export default BalanceTransfer;
