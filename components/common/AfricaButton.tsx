import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AfricaText from './AfricaText';
import { appColor } from '@/theme/appColor';


interface AfricaButtonProps {
    label: string;
    onPress: () => void;
    disabled?: boolean;
    buttonStyle?: any;
    textStyle?: any;
    margin?: number;
    showCheckbox?: boolean; // Prop to control the visibility of the checkbox
    initialChecked?: boolean; // Initial state of the checkbox
    onCheckboxChange?: (isChecked: boolean) => void; // Callback for checkbox state change
}

const AfricaButton: React.FC<AfricaButtonProps> = ({
    label,
    onPress = () => { },
    disabled = false,
    buttonStyle,
    textStyle,
    margin = 0,
    showCheckbox = false,
    initialChecked = false,
    onCheckboxChange = () => { },
}) => {
    const [isChecked, setChecked] = useState<boolean>(initialChecked);

    const handlePress = () => {
        if (!disabled) {
            if (showCheckbox) {
                setChecked(!isChecked);
                onCheckboxChange(!isChecked);
            }
            onPress();
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={[
                styles.button,
                buttonStyle,
                disabled && styles.disabledButton,
                { marginTop: margin },
            ]}
            onPress={handlePress}
            disabled={disabled}
        >
            <View style={styles.content}>
                {showCheckbox && (
                    <Ionicons
                        name={isChecked ? 'checkbox-outline' : 'square-outline'}
                        size={24}
                        color={isChecked ? appColor.PRIMARY_COLOR : appColor.WHITE}
                        style={styles.checkbox}
                    />
                )}
                <AfricaText style={[styles.text, textStyle]}>{label}</AfricaText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: appColor.PRIMARY_COLOR,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 16,
    },
    text: {
        color: appColor.WHITE,
        fontSize: 16,
    },
    disabledButton: {
        backgroundColor: appColor.SECONDARY_COLOR,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 10,
    },
});

export default AfricaButton;
