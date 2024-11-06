import { View, Pressable, StyleSheet, Image, Text } from 'react-native';



export default function RoleItem({ textStyle, imageSourse, subText, onPress, num }) {
    return (
        <Pressable onPress={() => onPress(subText)}
            style={styles.container}>
            <Image source={imageSourse} />
            <Text style={[textStyle, styles.text]}>{subText}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "91%",
        height: 164,
        padding: 16,
        marginHorizontal: 16,
        backgroundColor: "#fff",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        borderRadius: 12

    },
    text: {
        fontSize: 24,
        textTransform: "uppercase"
    },
    selectedRole: {

    }
})