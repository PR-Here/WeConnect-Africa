import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AfricaText from './AfricaText';
import { appColor } from '@/theme/appColor';


interface ProfileItemProps {
    name: string;
    Icon: any;
    subName?: string;
    onPress: any
}


export default function ProfileItem({
    Icon, name, onPress, subName
}: ProfileItemProps) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.item}>
            {Icon}
            <View style={styles.view}>
                <AfricaText>{name}</AfricaText>
                {subName && <AfricaText style={styles.subName}>{subName}</AfricaText>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
        borderColor: appColor.SECONDARY_COLOR,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    view: {
        marginLeft: 10
    },
    subName: {
        fontSize: 10
    }
})