import { Pressable, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function BackButton({ textStyle }) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => navigation.goBack()}>
            <Image
                source={require('../../../assets/images/Back Icon.png')}
                style={styles.image}
            />
            <Text style={[styles.text, textStyle]}>Назад</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 69
    },
    image: {
        width: 24,
        height: 24
    },
    text: {
        color: "#FFFFFF",
        fontSize: 12
    }
})