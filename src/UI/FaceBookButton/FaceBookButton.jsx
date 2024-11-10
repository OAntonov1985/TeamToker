import { Pressable, Text, Image, StyleSheet } from 'react-native';

export default function FaceBookButton({ buttonTextStyle }) {
    return (
        <Pressable style={styles.buttoncontainer} onPress={() => console.log("FaceBook")}>
            <Image
                source={require('../../../assets/images/Vector.png')}
                style={styles.image}
            />
            <Text style={[buttonTextStyle, styles.text]}>{"Продовжити з Facebook"}</Text>
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
        backgroundColor: "#1877F2",
        padding: 14,
        borderRadius: 18,
        marginBottom: 24,

    },
    image: {
        width: 18,
        height: 28
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25
    }
});
