import { Text, StyleSheet } from 'react-native'

export default function ScreenText({ children, style }) {
    return (
        <Text style={[style, styles.text]}>
            {children}
        </Text>)
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto-Regular",
        fontSize: 20,
        color: "#FFF",
        lineHeight: 30,
        textAlign: "center",
        backgroundColor: "red"
    }
})