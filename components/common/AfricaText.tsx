import { appColor } from '@/theme/appColor';
import React from 'react';
import { StyleSheet, Text, TextStyle, TextProps } from 'react-native';


interface ApricaTextProps extends TextProps {
    children: React.ReactNode;
    style?: TextStyle | TextStyle[];
}

const AfricaText: React.FC<ApricaTextProps> = ({ children, style, ...props }) => {
    const combinedStyles = Array.isArray(style) ? style : [style];
    return (
        <Text style={[styles.text, ...combinedStyles]} {...props}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: appColor.BLACK, // default color
        fontFamily: 'RedHatText-Medium'
    },
});

export default AfricaText;
