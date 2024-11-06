import { Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavigationButton({ title, nextComponent }) {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() =>
            navigation.navigate(nextComponent)
        } style={styles.button} >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        marginRight: 10,
        marginStart: "auto",
        marginBottom: 73,
        padding: 5
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 18.2,
        color: "white"
    }
})