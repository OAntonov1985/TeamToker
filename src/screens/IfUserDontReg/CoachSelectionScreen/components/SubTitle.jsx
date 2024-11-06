import { Text, StyleSheet } from 'react-native';



export default function SubTitle({ children, textStyle }) {
    return (
        <Text style={[styles.text, textStyle]}>{children}</Text>
    )
}


const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 32,
        textAlign: "center",
        lineHeight: 38,
        marginBottom: 32

    }
})