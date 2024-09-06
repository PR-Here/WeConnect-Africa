import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AfricaBottomSheet from '../common/AfricaBottomSheet'
import AfricaText from '../common/AfricaText';
import AfricaButton from '../common/AfricaButton';

interface LogoutPopupprops {
    onClose: () => void;
    onConfirm: () => void
}

export default function LogoutPopup({ onClose, onConfirm }: LogoutPopupprops) {
    return (
        <AfricaBottomSheet isVisible height={150} onBackdropPress={onClose}>
            <View style={styles.view}>
                <AfricaText>Are you sure you want to logout?</AfricaText>
                <View style={{ marginTop: 20 }}></View>
                <View style={styles.buttomView}>
                    {/* Cancel Button */}
                    <AfricaButton buttonStyle={styles.button} label='Cancel' onPress={onClose} />
                    <AfricaButton buttonStyle={[styles.button, styles.buttonConfirm]} label='Logout' onPress={onConfirm} />
                </View>
            </View>
        </AfricaBottomSheet>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttomView: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    button: {
        width: '45%'
    },
    buttonConfirm: {
        backgroundColor: 'red'
    }

})