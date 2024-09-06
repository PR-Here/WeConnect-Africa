import { Tabs } from 'expo-router';
import React from 'react';
import { LogBox } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); // Ignore all log notifications
  const colorScheme = useColorScheme();

  console.log("TabLayout rendered with colorScheme:", colorScheme);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="Recent"
        options={{
          title: 'Recents',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'stopwatch' : 'stopwatch-outline'} color={color} />
          ),
          tabBarLabel: 'Recents', // Ensure label is set correctly
        }}
      />
      <Tabs.Screen
        name="Keyboard"
        options={{
          title: 'Keyboard',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'grid' : 'grid-outline'} color={color} />
          ),
          tabBarLabel: 'Keyboard', // Ensure label is set correctly
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
          tabBarLabel: 'Profile', // Ensure label is set correctly
        }}
      />
    </Tabs>
  );
}
