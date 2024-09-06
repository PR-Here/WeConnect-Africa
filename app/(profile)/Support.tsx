import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import HTML from 'react-native-render-html';

const Support = () => {
  const [faqContent, setFaqContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const response = await fetch('https://weconnectafrica.com/mas_faq/what_to_do_to_start_using_weconnect_africa_services/');
        const htmlContent = await response.text();
        setFaqContent(htmlContent);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching FAQ:', error);
        setLoading(false);
      }
    };

    fetchFAQ();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <HTML
            source={{ html: faqContent }}
            ignoredDomTags={['noscript']}
          />
        </ScrollView>
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
});

export default Support;
