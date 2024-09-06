import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import WebView from 'react-native-webview';

const About = () => {
  const layout = Dimensions.get('window');
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'whyUseUs', title: 'Why Use Us' },
    { key: 'givingBack', title: 'Giving Back' },
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const renderScene = SceneMap({
    whyUseUs: () => (
      <WebView
        source={{ uri: 'https://weconnectafrica.com/why_use_weconnecafrica_calling/' }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error:', nativeEvent);
          setError('Failed to load content. Please try again later.');
        }}
      />
    ),
    givingBack: () => (
      <WebView
        source={{ uri: 'https://weconnectafrica.com/givingback/' }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error:', nativeEvent);
          setError('Failed to load content. Please try again later.');
        }}
      />
    ),
  });

  useEffect(() => {
    setLoading(false); // Assuming loading is done once WebView renders content
  }, []);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicator}
          style={styles.tabBar}
          labelStyle={styles.label}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: '#007AFF',
  },
  label: {
    color: '#000',
  },
});

export default About;
