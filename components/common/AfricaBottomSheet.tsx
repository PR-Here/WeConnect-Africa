import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Modal from 'react-native-modal'

interface AfricaBottomSheet {
    isVisible: boolean
    onBackdropPress: () => void
    children: React.ReactNode
    height?: number
    fullHeight?: boolean
    onModalHide?: () => void
}
const screenHeight = Dimensions.get('window').height
const AfricaBottomSheet: React.FC<AfricaBottomSheet> = ({
    isVisible,
    onBackdropPress,
    children,
    height,
    fullHeight = false,
    onModalHide
}) => {
    const styles = StyleSheet.create({
        modal: {
            justifyContent: 'flex-end',
            margin: 0,
        },
        bottomSheet: {
            backgroundColor: 'white',
            padding: 16,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            maxHeight: screenHeight * 0.7,
            ...(height && {
                height: height,
            }),
            ...(fullHeight && {
                height: screenHeight * 0.7,
            }),
        },
    })
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
            style={styles.modal}
            hideModalContentWhileAnimating
            backdropTransitionOutTiming={0}
            useNativeDriver
            useNativeDriverForBackdrop
            onBackButtonPress={onBackdropPress}
            onModalHide={onModalHide}
        >
            <View style={styles.bottomSheet}>{children}</View>
        </Modal>
    )
}

export default AfricaBottomSheet
