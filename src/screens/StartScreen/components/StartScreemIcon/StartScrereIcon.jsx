import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';



export default function StartScrereIconView() {
    return (
        // <View style={styles.container}>
        //     <LinearGradient
        //         colors={['#1631E9', '#09E6F8']}
        //         start={{ x: 0.25, y: 0 }}
        //         end={{ x: 1, y: 1 }}
        //         style={{ flex: 1, padding: 16, borderRadius: 8, }}
        //     />
        //     <Image
        //         source={require("../../../../../assets/images/StartIconParts/Group 37.png")}
        //         style={{ width: 61, height: 128 }}
        //     />
        //     {/* <Image
        //         source={require("../../../../../assets/images/StartIconParts/Ellipse 37.png")}
        //         style={{ width: 23, height: 8 }}
        //     />
        //     <Image
        //         source={require("../../../../../assets/images/StartIconParts/Frame 2608942.png")}
        //         style={{ width: 12, height: 12 }}
        //     /> */}

        // </View>
        <Image
            source={require("../../../../../assets/images/StartIconParts/Group 37.png")}
            style={styles.container}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 128,
    }
})