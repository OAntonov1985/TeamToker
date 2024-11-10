import { View, SafeAreaView, ImageBackground, StyleSheet, Text } from 'react-native'


export default function TeacherScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/images/imageInSelectorScreen/bgColor.png")}
                resizeMode="cover"
                style={styles.container}>
                <SafeAreaView style={{ height: 52, marginBottom: 26 }} />
                <Text>dgs</Text>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})