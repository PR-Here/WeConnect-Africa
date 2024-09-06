import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, TextStyle, ViewStyle, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
import { appColor } from '@/theme/appColor';

interface AfricaTextInputProps extends TextInputProps {
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    secureTextEntry?: boolean;
    showSearchIcon?: boolean; // New prop to control the visibility of the search icon
}

const AfricaTextInput: React.FC<AfricaTextInputProps> = ({ containerStyle, inputStyle, secureTextEntry = false, showSearchIcon = false, ...props }) => {
    const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.inputContainer}>
                {showSearchIcon && (
                    <Ionicons style={styles.searchIcon} name="search" size={24} color={appColor.SECONDARY_COLOR} />
                )}
                <TextInput
                    style={[
                        styles.input,
                        inputStyle,
                        showSearchIcon && { paddingLeft: 40 }, // Adjusted padding for the search icon
                        !showSearchIcon && secureTextEntry && { paddingLeft: 10 }, // Adjusted padding for the secure text entry without search icon
                    ]}
                    secureTextEntry={secureTextEntry && !isPasswordVisible}
                    {...props}
                />
                {secureTextEntry && (
                    <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
                        <Ionicons name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
    },
    inputContainer: {
        position: 'relative',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        fontFamily: 'RedHatText-Medium'
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 8,
        alignSelf: 'center'
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 8,
    },
});

export default AfricaTextInput;
