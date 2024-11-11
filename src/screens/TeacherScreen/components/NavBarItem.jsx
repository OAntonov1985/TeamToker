import { Text, View, Image, StyleSheet } from 'react-native';
import HomeIcon from "./HomeIcon"


export default function NavBarItem({ text, isActive, image }) {
    return (
        <View style={styles.itemContainer}>
            {image}
            <Text style={isActive ? styles.activeText : styles.unactiveText}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        width: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        width: 24,
        height: 24,
    },
    activeText: {
        color: '#0B82BD',
        // fontSize: 12,
        lineHeight: 14
    },
    unactiveText: {
        color: "#0D0D0C80",
        // fontSize: 12,
    }
})