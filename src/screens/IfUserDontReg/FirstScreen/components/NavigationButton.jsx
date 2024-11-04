import { Pressable, StyleSheet, Text } from 'react-native';

export default function NavigationButton({ title, onPres }) {
    return (
        <Pressable onPress={onPres} style={styles.button} >
            <Text >{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        marginRight: 10,
        marginStart: "auto",
        marginBottom: 73,
        padding: 5
    },
    text: {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 18.2
    }
})