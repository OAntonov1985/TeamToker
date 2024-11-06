import { Text, StyleSheet } from 'react-native'

export default function Title({ children, textStyle }) {
    return (
        <Text style={[textStyle, styles.title]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#FFF',
        fontSize: 48,
        marginBottom: 26,
        textAlign: "center",
        lineHeight: 63
    }
})