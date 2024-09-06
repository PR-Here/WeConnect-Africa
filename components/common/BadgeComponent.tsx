import React from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import AfricaText from './AfricaText';
import { appColor } from '@/theme/appColor';

interface BadgeProps {
    text: string;
    badgeStyle?: ViewStyle;
    textStyle?: TextStyle;
}

const BadgeComponent: React.FC<BadgeProps> = ({ text, badgeStyle, textStyle }) => {
    return (
        <View style={[styles.badge, badgeStyle]}>
            <AfricaText style={[styles.text, textStyle]}>{text}</AfricaText>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        backgroundColor: appColor.SECONDARY_COLOR, // Default background color
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12, // Make it round
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: 'white', // Default text color
        fontSize: 12, // Default font size
        fontWeight: 'bold',
    },
});

export default BadgeComponent;
