import AfricaButton from '@/components/common/AfricaButton';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

const CreditBalance = () => {
  // Dummy data for grid items (amounts in Euros)
  const euroAmounts = [5, 10, 15, 20, 25, 30];

  const [selectedAmount, setSelectedAmount] = useState(null);

  // Function to handle card click
  const handleCardClick = (amount) => {
    // Handle click action, e.g., navigate to payment screen or perform action
    console.log(`Clicked on ${amount} Euros`);
    setSelectedAmount(amount); // Update selected amount
  };

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image
        source={require('../../assets/images/weconnect.jpeg')} // Replace with actual logo image source
        style={styles.logo}
        resizeMode="cover"
      />

      {/* Grid of Cards */}
      <View style={styles.cardContainer}>
        {euroAmounts.map((amount, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              selectedAmount === amount ? styles.selectedCard : null,
            ]}
            onPress={() => handleCardClick(amount)}
          >
            <Text style={styles.cardText}>{`\u20AC ${amount}`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsHeader}>Bank Transfer using your mobile number as reference:</Text>
        <Text>Marvel Business Limited</Text>
        <Text>Account: 51634348</Text>
        <Text>Sort Code: 402326</Text>
        <Text>International Payment: Contact us for IBAN and SWIFT</Text>
      </View>

      {/* Submit Button */}
      {selectedAmount !== null && (
        <AfricaButton label="Submit" onPress={() => console.log(`Submit ${selectedAmount} Euros`)} />
      )}
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
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    borderRadius: 5
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    height: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedCard: {
    borderColor: 'blue', // Change border color when selected
    borderWidth: 2,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  detailsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CreditBalance;
