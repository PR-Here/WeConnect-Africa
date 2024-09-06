import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ProfileItem from '@/components/common/ProfileItem'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AboutIcon, BalanceTransferIcon, CreditbalanceIcon, ExitIcon, ProfileIcon, ReportIcon, SettingIcon, ShareIcon, SupportIcon, TransferHistoryIcon } from '@/assets/svgIcon/SvgIcon'
import { useRouter } from 'expo-router'
import { shareAppLink } from '@/utils/Constant'
import LogoutPopup from '@/components/modal/LogoutPopup'



export default function Profile() {
    const routes = useRouter()
    const [showLogoutPopup, setShowLogoutPopup] = useState<boolean>(false)

    const DATA = [
        {
            id: 1,
            name: "Settings",
            subName: "Network and Media Setting",
            icon: <SettingIcon />,
            onPress: () => routes.navigate("(profile)/Setting")
        },
        {
            id: 2,
            name: "Profile",
            icon: <ProfileIcon />,
            onPress: () => routes.navigate("(profile)/Profile")
        },
        {
            id: 3,
            name: "Credit Balance",
            icon: <CreditbalanceIcon />,
            onPress: () => routes.navigate("(profile)/CreditBalance")
        },
        {
            id: 4,
            name: "Balance Transfer",
            icon: <BalanceTransferIcon />,
            onPress: () => routes.navigate("(profile)/BalanceTransfer")
        },
        {
            id: 5,
            name: "Report",
            icon: <ReportIcon />,
            onPress: () => routes.navigate("(profile)/Report")
        },
        {
            id: 6,
            name: "Transfer History",
            icon: <TransferHistoryIcon />,
            onPress: () => routes.navigate("(profile)/TransferHistory")
        },
        {
            id: 7,
            name: "Invite a Friend",
            icon: <ShareIcon />,
            onPress: () => shareAppLink()
        },
        {
            id: 8,
            name: "About",
            icon: <AboutIcon />,
            onPress: () => routes.navigate("(profile)/About")
        },
        {
            id: 9,
            name: "Help & Support",
            icon: <SupportIcon />,
            onPress: () => routes.navigate("(profile)/Support")
        },
        {
            id: 10,
            name: "Exit",
            icon: <ExitIcon />,
            onPress: () => setShowLogoutPopup(true)
        },
    ]
    return (
        <>
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                {DATA.map(item => {
                    return <ProfileItem name={item.name} subName={item.subName}
                        Icon={item.icon} onPress={item.onPress}
                    />
                })}
            </KeyboardAwareScrollView>
            {/* Logout Popup */}
            {showLogoutPopup && <LogoutPopup
                onClose={() => setShowLogoutPopup(false)}
                onConfirm={() => {
                    setShowLogoutPopup(false)
                    routes.navigate('(login)/Login')
                }}
            />}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})