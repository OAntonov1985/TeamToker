import { Pressable, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonReg({ buttonText, textStyle }) {
    return (
        <LinearGradient colors={['#BF61E1', '#9045F0', '#5E27FF']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0.92, y: 0 }}
            style={styles.container}>
            <Pressable onPress={() => console.log(777)} style={styles.container}>
                <Text style={[styles.textStyleInComponents, textStyle]}>{buttonText}</Text>
            </Pressable>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 56,
        borderRadius: 18,
        justifyContent: "center"
    },
    textStyleInComponents: {
        textAlign: "center",
        fontSize: 16,
        color: "#fff"
    }
})