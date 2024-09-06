import AfricaText from '@/components/common/AfricaText';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Setting = () => {
  const [enableNotification, setEnableNotification] = useState(false);
  const [accessContactList, setAccessContactList] = useState(false);

  const toggleNotification = () => {
    setEnableNotification(previousState => !previousState);
  };

  const toggleAccessContactList = () => {
    setAccessContactList(previousState => !previousState);

  };

  return (
    <View style={styles.container}>
      {/* Enable Notification */}
      <View style={styles.optionContainer}>
        <AfricaText style={styles.optionText}>Enable Notification</AfricaText>
        <Switch
          value={enableNotification}
          onValueChange={toggleNotification}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={enableNotification ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
      </View>

      {/* Access Contact List */}
      <View style={styles.optionContainer}>
        <AfricaText style={styles.optionText}>Access Contact List</AfricaText>
        <Switch
          value={accessContactList}
          onValueChange={toggleAccessContactList}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={accessContactList ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
  },
});

export default Setting;
