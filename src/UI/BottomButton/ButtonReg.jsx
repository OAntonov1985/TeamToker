import { Pressable, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function ButtonReg({ buttonText, textStyle, nextComponent, style }) {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#BF61E1', '#9045F0', '#5E27FF']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0.92, y: 0 }}
            style={[styles.container, style]}>
            <Pressable onPress={typeof nextComponent === "string"
                ? () => navigation.navigate(nextComponent)
                : typeof nextComponent === "function"
                    ? nextComponent
                    : null} style={styles.container}>
                <Text style={[styles.textStyleInComponents, textStyle]}>{buttonText}</Text>
            </Pressable>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "91%",
        height: 56,
        borderRadius: 18,
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 16,
    },
    textStyleInComponents: {
        textAlign: "center",
        fontSize: 16,
        color: "#fff"
    }
})