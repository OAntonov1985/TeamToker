import { Pressable, Text, Image, StyleSheet } from 'react-native';

export default function GoogleButtonReg({ buttonTextStyle }) {
    return (
        <Pressable style={styles.buttoncontainer} onPress={() => console.log("Google")}>
            <Image
                source={require('../../../assets/images/logos_google-icon.png')}
                style={styles.image}
            />
            <Text style={[buttonTextStyle, styles.text]}>{"Продовжити з Google"}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttoncontainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        gap: 10,
        backgroundColor: "#FFFFFF",
        padding: 14,
        borderRadius: 18,
        marginBottom: 20
    },
    image: {
        width: 27,
        height: 29
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25
    }
});
