import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface AppLoaderProps {
    isLoading: boolean;
  size?: 'small' | 'large';
  color?: string;
}

const AppLoader: React.FC<AppLoaderProps> = ({ isLoading, size = 'large', color = '#000000' }) => {
  if (!isLoading) {
    return null; // Hide loader if loading is false
  }

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
  },
});

export default AppLoader;
